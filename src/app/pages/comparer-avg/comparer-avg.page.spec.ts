import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparerAvgPage } from './comparer-avg.page';

describe('ComparerAvgPage', () => {
  let component: ComparerAvgPage;
  let fixture: ComponentFixture<ComparerAvgPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparerAvgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
