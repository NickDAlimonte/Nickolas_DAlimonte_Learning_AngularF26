import { TestBed } from '@angular/core/testing';
import { MockCharacterListService } from './mock-character-list-service';

describe('MockCharacterListService', () => {
  let service: MockCharacterListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCharacterListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
