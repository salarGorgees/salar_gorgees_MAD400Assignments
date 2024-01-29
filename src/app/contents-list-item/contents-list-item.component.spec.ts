import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentsListItemComponent } from './contents-list-item.component';

describe('ContentsListItemComponent', () => {
  let component: ContentsListItemComponent;
  let fixture: ComponentFixture<ContentsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentsListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
