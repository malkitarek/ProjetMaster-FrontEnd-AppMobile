import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DonneePage } from './donnee.page';

describe('DonneePage', () => {
  let component: DonneePage;
  let fixture: ComponentFixture<DonneePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonneePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DonneePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
