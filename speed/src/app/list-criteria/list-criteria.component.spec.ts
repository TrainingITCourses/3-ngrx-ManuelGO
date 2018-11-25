import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCriteriaComponent } from './list-criteria.component';

describe('ListCriteriaComponent', () => {
  let component: ListCriteriaComponent;
  let fixture: ComponentFixture<ListCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
