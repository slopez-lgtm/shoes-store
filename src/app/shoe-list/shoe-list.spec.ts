import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeList } from './shoe-list';

describe('ShoeList', () => {
  let component: ShoeList;
  let fixture: ComponentFixture<ShoeList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoeList],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoeList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
