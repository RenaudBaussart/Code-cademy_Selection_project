import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionDropdownPanelComponent } from './connection-dropdown-panel.component';

describe('ConnectionDropdownPanelComponent', () => {
  let component: ConnectionDropdownPanelComponent;
  let fixture: ComponentFixture<ConnectionDropdownPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectionDropdownPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionDropdownPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
