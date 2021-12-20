import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { fromEvent, Observable, ReplaySubject } from 'rxjs';
import { ConnectionPositionPair, FlexibleConnectedPositionStrategy, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { filter, takeUntil } from 'rxjs/operators';
import { AbstractControl, NgControl } from '@angular/forms';
import { AutocompleteComponent } from '../components/autocomplete/autocomplete.component';

@Directive({
  selector: '[appAutocomplete]'
})
export class AutocompleteDirective implements OnInit {

  private get origin(): HTMLElement {
    return this._host.nativeElement;
  };

  public get control(): AbstractControl {
    return this._ngControl.control as AbstractControl;
  };

  @Input() public appAutocomplete!: AutocompleteComponent;

  private _overlayRef!: OverlayRef;
  private readonly _destroyed$ = new ReplaySubject<1>();

  constructor(
    private readonly _host: ElementRef<HTMLInputElement>,
    private readonly _ngControl: NgControl,
    private readonly _vcr: ViewContainerRef,
    private readonly _overlay: Overlay
  ) {}

  @HostListener('keyup', ['$event'])
  public onEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this._close();
    }
  }

  public ngOnInit(): void {
    this._handleInputKeydownEvent();
    this._handleInputValueChange();
  }

  private _handleInputKeydownEvent(): void {
    fromEvent<KeyboardEvent>(this.origin, 'keydown')
      .pipe(
        takeUntil(this._destroyed$),
        filter(() => !this._overlayRef)
      )
      .subscribe(() => {
        this._openDropdown();

        this.appAutocomplete
          .optionsClick()
          .pipe(takeUntil(this._overlayRef.detachments()))
          .subscribe((value: any) => {
            this._close();
          });
      });
  }

  private _handleInputValueChange(): void {
    this.control?.valueChanges.pipe(takeUntil(this._destroyed$)).subscribe((value: string) => {
      // close dropdown to provide correct UI/UX fo user
      if (!value) {
        this._close();
      }
    });
  }

  private _openDropdown(): void {
    this._overlayRef = this._overlay.create({
      width: this.origin.offsetWidth,
      scrollStrategy: this._overlay.scrollStrategies.reposition(),
      positionStrategy: this._getOverlayPosition()
    });

    const template: TemplatePortal = new TemplatePortal(this.appAutocomplete.rootTemplate, this._vcr);
    this._overlayRef.attach(template);
    overlayClickOutside(this._overlayRef, this.origin).subscribe(() => this._close());
  }

  private _close(): void {
    this._overlayRef?.detach();
    this._overlayRef = undefined as unknown as OverlayRef;
  }

  private _getOverlayPosition(): FlexibleConnectedPositionStrategy {
    const positions: Array<ConnectionPositionPair> = [
      new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
      new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
    ];

    return this._overlay
      .position()
      .flexibleConnectedTo(this.origin)
      .withPositions(positions)
      .withFlexibleDimensions(false)
      .withPush(false);
  }
}

export const overlayClickOutside = (overlayRef: OverlayRef, origin: HTMLElement): Observable<MouseEvent> =>
  fromEvent<MouseEvent>(document, 'click').pipe(
    filter(event => {
      const clickTarget: HTMLElement = event.target as HTMLElement;
      const notOrigin: boolean = clickTarget !== origin; // the input
      const notOverlay: boolean = !!overlayRef && overlayRef.overlayElement.contains(clickTarget) === false; // the autocomplete

      return notOrigin && notOverlay;
    }),
    takeUntil(overlayRef.detachments())
  );
