import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEditContactComponent } from './ajout-edit-contact.component';

describe('AjoutEditContactComponent', () => {
  let component: AjoutEditContactComponent;
  let fixture: ComponentFixture<AjoutEditContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEditContactComponent]
    });
    fixture = TestBed.createComponent(AjoutEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
