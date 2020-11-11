import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailChanelPage } from './detail-chanel.page';

describe('DetailChanelPage', () => {
  let component: DetailChanelPage;
  let fixture: ComponentFixture<DetailChanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailChanelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailChanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
