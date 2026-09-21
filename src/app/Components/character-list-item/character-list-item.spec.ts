import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListItem } from './character-list-item';

describe('CharacterListItem', () => {
  let component: CharacterListItem;
  let fixture: ComponentFixture<CharacterListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
