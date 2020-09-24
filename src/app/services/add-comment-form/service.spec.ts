/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AddCommentFormService } from './service';

describe('Service: AddCommentForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCommentFormService]
    });
  });

  it('should ...', inject([AddCommentFormService], (service: AddCommentFormService) => {
    expect(service).toBeTruthy();
  }));
});
