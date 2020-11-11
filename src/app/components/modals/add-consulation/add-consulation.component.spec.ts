import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddConsulationComponent } from './add-consulation.component';

describe('AddConsulationComponent', () => {
  let component: AddConsulationComponent;
  let fixture: ComponentFixture<AddConsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsulationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddConsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
