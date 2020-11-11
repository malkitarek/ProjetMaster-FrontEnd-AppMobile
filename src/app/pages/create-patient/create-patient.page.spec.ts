import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePatientPage } from './create-patient.page';

describe('CreatePatientPage', () => {
  let component: CreatePatientPage;
  let fixture: ComponentFixture<CreatePatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
