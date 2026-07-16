import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeCatalog } from './shoe-catalog';

describe('ShoeCatalog', () => {
  let component: ShoeCatalog;
  let fixture: ComponentFixture<ShoeCatalog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoeCatalog],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoeCatalog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
