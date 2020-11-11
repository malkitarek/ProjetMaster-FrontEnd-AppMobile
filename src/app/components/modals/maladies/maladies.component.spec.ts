import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MaladiesComponent } from './maladies.component';

describe('MaladiesComponent', () => {
  let component: MaladiesComponent;
  let fixture: ComponentFixture<MaladiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaladiesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaladiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
