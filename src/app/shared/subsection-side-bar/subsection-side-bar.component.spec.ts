import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsectionSideBarComponent } from './subsection-side-bar.component';

describe('SubsectionSideBarComponent', () => {
  let component: SubsectionSideBarComponent;
  let fixture: ComponentFixture<SubsectionSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsectionSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsectionSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
