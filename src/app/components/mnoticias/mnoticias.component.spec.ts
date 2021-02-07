import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnoticiasComponent } from './mnoticias.component';

describe('MnoticiasComponent', () => {
  let component: MnoticiasComponent;
  let fixture: ComponentFixture<MnoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
