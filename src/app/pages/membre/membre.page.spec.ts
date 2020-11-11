import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembrePage } from './membre.page';

describe('MembrePage', () => {
  let component: MembrePage;
  let fixture: ComponentFixture<MembrePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
