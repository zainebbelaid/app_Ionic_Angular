import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RendezVousAddPage } from './rendez-vous-add.page';

describe('RendezVousAddPage', () => {
  let component: RendezVousAddPage;
  let fixture: ComponentFixture<RendezVousAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RendezVousAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
