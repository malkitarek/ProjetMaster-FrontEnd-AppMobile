import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MedecinsTraitantsComponent } from './medecins-traitants.component';

describe('MedecinsTraitantsComponent', () => {
  let component: MedecinsTraitantsComponent;
  let fixture: ComponentFixture<MedecinsTraitantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinsTraitantsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MedecinsTraitantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
