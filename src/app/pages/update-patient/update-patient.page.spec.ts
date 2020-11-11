import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatePatientPage } from './update-patient.page';

describe('UpdatePatientPage', () => {
  let component: UpdatePatientPage;
  let fixture: ComponentFixture<UpdatePatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
