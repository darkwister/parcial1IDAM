import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableMultPage } from './table-mult.page';

describe('TableMultPage', () => {
  let component: TableMultPage;
  let fixture: ComponentFixture<TableMultPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
