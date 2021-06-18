import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStartedMenuComponent } from './get-started-menu.component';

describe('GetStartedMenuComponent', () => {
  let component: GetStartedMenuComponent;
  let fixture: ComponentFixture<GetStartedMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStartedMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetStartedMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
