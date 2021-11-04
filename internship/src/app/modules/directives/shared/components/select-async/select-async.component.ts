import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ISelectInput } from 'src/app/core/data/models';

@Component({
  selector: 'app-select-async',
  templateUrl: './select-async.component.html',
  styleUrls: ['./select-async.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectAsyncComponent<T> implements OnInit, ISelectInput {
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public loading!: boolean
  @Input() public selectsRef!: TemplateRef<void>;

  @Input() public set data(data: T[]) {
    this._data = data;
    this.cdr.detectChanges()
    console.log(data, 'data')
  }

  public get data(): T[] {
    return this._data;
  }

  private _data!: T[];

  constructor(private readonly cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {}

}
