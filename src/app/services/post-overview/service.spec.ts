/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostOverviewService } from './service';

describe('Service: PostOverview', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostOverviewService],
    });
  });

  it('should ...', inject(
    [PostOverviewService],
    (service: PostOverviewService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should call getComments', inject(
    [PostOverviewService],
    (service: PostOverviewService) => {
      // You would mock the call rather than calling the actual service here.
      service.getComments(1).then((comments) => {
        expect(comments.length).toBeGreaterThan(0);
      });
    }
  ));
});
