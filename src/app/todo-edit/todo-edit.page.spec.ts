import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoEditPage } from './todo-edit.page';

describe('TodoEditPage', () => {
  let component: TodoEditPage;
  let fixture: ComponentFixture<TodoEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
