import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageMPPage } from './message-m-p.page';

describe('MessageMPPage', () => {
  let component: MessageMPPage;
  let fixture: ComponentFixture<MessageMPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageMPPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageMPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
