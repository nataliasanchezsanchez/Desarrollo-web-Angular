import { TestBed } from '@angular/core/testing';

import { VoiceRecognitionService } from './voice-recognition.service';

describe('VoiceRecognitionService', () => {
  /*let service: VoiceRecognitionService;*/

  beforeEach(() =>  TestBed.configureTestingModule({}));
    /*service = TestBed.inject(VoiceRecognitionService);
  });*/

  it('should be created', () => {
   const service: VoiceRecognitionService=TestBed.get(VoiceRecognitionService); 
    expect(service).toBeTruthy();
  });
});
