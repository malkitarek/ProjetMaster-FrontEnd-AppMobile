import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceCreateModalPage } from './device-create-modal.page';

describe('DeviceCreateModalPage', () => {
  let component: DeviceCreateModalPage;
  let fixture: ComponentFixture<DeviceCreateModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceCreateModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceCreateModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
