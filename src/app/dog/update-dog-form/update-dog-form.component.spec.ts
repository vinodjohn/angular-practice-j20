import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDogFormComponent } from './update-dog-form.component';

describe('UpdateDogFormComponent', () => {
  let component: UpdateDogFormComponent;
  let fixture: ComponentFixture<UpdateDogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDogFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateDogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
