import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogAffilMembrePage } from './dialog-affil-membre.page';

describe('DialogAffilMembrePage', () => {
  let component: DialogAffilMembrePage;
  let fixture: ComponentFixture<DialogAffilMembrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAffilMembrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogAffilMembrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
