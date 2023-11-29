import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactAddPage } from './contact-add.page';

describe('ContactAddPage', () => {
  let component: ContactAddPage;
  let fixture: ComponentFixture<ContactAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ContactAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
