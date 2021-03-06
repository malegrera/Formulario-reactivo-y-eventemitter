import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineListComponent } from './wine-list.component';

describe('WinelistComponent', () => {
  let component: WineListComponent;
  let fixture: ComponentFixture<WineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
