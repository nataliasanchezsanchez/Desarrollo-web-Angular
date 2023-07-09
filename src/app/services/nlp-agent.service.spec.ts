import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { NlpAgentService } from './nlp-agent.service';

describe('NlpAgentService', () => {
  let service: NlpAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NlpAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
