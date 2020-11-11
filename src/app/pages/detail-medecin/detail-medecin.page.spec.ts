import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailMedecinPage } from './detail-medecin.page';

describe('DetailMedecinPage', () => {
  let component: DetailMedecinPage;
  let fixture: ComponentFixture<DetailMedecinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMedecinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
