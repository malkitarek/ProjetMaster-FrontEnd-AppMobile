import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailMembrePage } from './detail-membre.page';

describe('DetailMembrePage', () => {
  let component: DetailMembrePage;
  let fixture: ComponentFixture<DetailMembrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailMembrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailMembrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
