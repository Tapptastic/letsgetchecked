import { Component, Input, OnInit } from '@angular/core';
import { AddCommentFormService } from '../services/add-comment-form/service';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.scss'],
})
export class AddCommentFormComponent implements OnInit {
  @Input() id: number;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private addCommentService: AddCommentFormService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  addComment() {
    this.addCommentService.postComment(this.id, { ...this.form.value });
    window.location.reload();
  }
}
