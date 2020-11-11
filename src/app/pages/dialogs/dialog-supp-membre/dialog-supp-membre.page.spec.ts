import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DialogSuppMembrePage } from './dialog-supp-membre.page';

describe('DialogSuppMembrePage', () => {
  let component: DialogSuppMembrePage;
  let fixture: ComponentFixture<DialogSuppMembrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSuppMembrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DialogSuppMembrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
