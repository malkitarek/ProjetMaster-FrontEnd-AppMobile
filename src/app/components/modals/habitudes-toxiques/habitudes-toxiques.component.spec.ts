import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HabitudesToxiquesComponent } from './habitudes-toxiques.component';

describe('HabitudesToxiquesComponent', () => {
  let component: HabitudesToxiquesComponent;
  let fixture: ComponentFixture<HabitudesToxiquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabitudesToxiquesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HabitudesToxiquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
