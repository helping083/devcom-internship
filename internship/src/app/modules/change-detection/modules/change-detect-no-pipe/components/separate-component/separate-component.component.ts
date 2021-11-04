import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComment } from 'src/app/core/data/models';

@Component({
  selector: 'app-separate-comment',
  templateUrl: './separate-component.component.html',
  styleUrls: ['./separate-component.component.scss']
})
export class SeparateComponentComponent implements OnInit {
  @Input() public comment!: IComment;
  @Output() public readonly handleCloseEvent: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public handleCloseComponent(e:Event): void {
    e.preventDefault();

    this.handleCloseEvent.emit()
  }
}
