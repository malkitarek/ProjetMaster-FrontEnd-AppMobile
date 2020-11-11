import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogSuppConsultationPage } from './dialog-supp-consultation.page';

describe('DialogSuppConsultationPage', () => {
  let component: DialogSuppConsultationPage;
  let fixture: ComponentFixture<DialogSuppConsultationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSuppConsultationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogSuppConsultationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
