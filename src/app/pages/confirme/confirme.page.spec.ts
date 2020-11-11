import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfirmePage } from './confirme.page';

describe('ConfirmePage', () => {
  let component: ConfirmePage;
  let fixture: ComponentFixture<ConfirmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
