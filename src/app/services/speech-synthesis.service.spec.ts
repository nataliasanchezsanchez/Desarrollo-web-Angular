import { TestBed } from '@angular/core/testing';

import { SpeechSynthesisService } from './speech-synthesis.service';

describe('SpeechSynthesisService', () => {
  /*let service: SpeechSynthesisService;*/

  beforeEach(() => TestBed.configureTestingModule({}));
   /* service = TestBed.inject(SpeechSynthesisService);
  });*/

  it('should be created', () => {
    const service: SpeechSynthesisService=TestBed.get(SpeechSynthesisService);
    expect(service).toBeTruthy();
  });
});

