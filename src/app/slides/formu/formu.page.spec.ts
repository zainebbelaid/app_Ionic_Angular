import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormuPage } from './formu.page';

describe('FormuPage', () => {
  let component: FormuPage;
  let fixture: ComponentFixture<FormuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
