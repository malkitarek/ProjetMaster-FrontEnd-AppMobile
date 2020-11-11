import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntecedentsFamiliauxComponent } from './antecedents-familiaux.component';

describe('AntecedentsFamiliauxComponent', () => {
  let component: AntecedentsFamiliauxComponent;
  let fixture: ComponentFixture<AntecedentsFamiliauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntecedentsFamiliauxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntecedentsFamiliauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
