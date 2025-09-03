import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDropdownPanelComponent } from './user-dropdown-panel.component';

describe('UserDropdownPanelComponent', () => {
  let component: UserDropdownPanelComponent;
  let fixture: ComponentFixture<UserDropdownPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDropdownPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDropdownPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
