import { TestBed } from '@angular/core/testing';

import { AnalyseText } from './analyse-text';

describe('AnalyseText', () => {
  let service: AnalyseText;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalyseText);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
