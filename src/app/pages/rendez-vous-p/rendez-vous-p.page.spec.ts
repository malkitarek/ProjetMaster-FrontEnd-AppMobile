import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RendezVousPPage } from './rendez-vous-p.page';

describe('RendezVousPPage', () => {
  let component: RendezVousPPage;
  let fixture: ComponentFixture<RendezVousPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RendezVousPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RendezVousPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
