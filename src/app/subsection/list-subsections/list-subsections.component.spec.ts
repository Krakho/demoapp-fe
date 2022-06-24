import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubsectionsComponent } from './list-subsections.component';

describe('ListSubsectionsComponent', () => {
  let component: ListSubsectionsComponent;
  let fixture: ComponentFixture<ListSubsectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubsectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubsectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
