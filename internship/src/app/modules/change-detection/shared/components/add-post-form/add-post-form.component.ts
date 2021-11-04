import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPost } from 'src/app/core/data/models';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddPostFormComponent implements OnInit {
  @Output() public readonly addPost: EventEmitter<IPost> = new EventEmitter();
  @Input() public postsAmount!: number;

  constructor() { }

  ngOnInit(): void {

  }

  public onSubmit(f: NgForm): void {
    this.addPost.emit({
      id: this.postsAmount + 1,
      userId: Math.floor(Math.random() * 11),
      title: f.value.title,
      body: f.value.body
    })
  }
}
