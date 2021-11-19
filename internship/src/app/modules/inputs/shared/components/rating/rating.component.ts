import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, HostBinding, Input, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true
    }
  ]
})
export class RatingComponent implements OnInit, ControlValueAccessor {
  public stars: Array<number> = [];
  @Input() public set starsAmount(amount: number) {
    this.stars = []
    for(let i = 1; i <= amount; i++) {
      this.stars.push(i);
    }
  }

  @Input() public set value(value: number) {
    if(this._value > this.stars.length) {
      throw new Error('value cant be more than rating');
    }
    this._value = value;
  }
  get value(): number {
    return this._value;
  }
 
  @Input() public set size(size: number) {
    this._size = `${size}px`;
  };

  @HostBinding("style.--colorSelected")
  @Input() public colorSelected: 'gold' | 'yellow' | 'blue' | 'orange' = 'orange';

  @HostBinding("style.--colorUnchecked")
  @Input() public colorUnchecked: 'grey' | 'black' | 'red' = 'black';
  
  @HostBinding("style.--size")
  private _size: string = '16px';

  private _value!: number;

  @ViewChildren('star', { read: ElementRef }) public rating!: QueryList<ElementRef>;

  constructor(private readonly _renderer: Renderer2, private readonly _cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public onSetRating(rating: number): void {
    this.value = rating
    this._displayRating(this.value);
    this.onChange(this.value);
  }

  public onHoverRating(ratingId: number): void {
    this._displayRating(ratingId);
  }

  public onLeaveRating(): void {
    this._displayRating(this.value);
  }

  private _displayRating(ratingId: number): void {
    this.rating.forEach((item: ElementRef, idx: number): void => {
      this._renderer.removeClass(item.nativeElement, 'checked');
      if (idx + 1 <= ratingId) {
        this._renderer.addClass(item.nativeElement, 'checked');
      };
    });
  }

  public onChange = (quantity: number): void => {
  }

  public onTouched = () => {};

  public writeValue(value: number) {
    this._value = value;
  }

  public registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
}
