/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SaveStateService } from './save-state.service';

describe('SaveStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveStateService]
    });
  });

  it('should ...', inject([SaveStateService], (service: SaveStateService) => {
    expect(service).toBeTruthy();
  }));
});
