// @ts-nocheck
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { WorkoutListComponent } from './workout-list.component';
import { WorkoutService } from '../workout.service';
import { FormBuilder } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

@Injectable()
class MockWorkoutService {}

@Directive({ selector: '[myCustom]' })
class MyCustomDirective {
  @Input() myCustom;
}

@Pipe({name: 'translate'})
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'phoneNumber'})
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'safeHtml'})
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

describe('WorkoutListComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        WorkoutListComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        MyCustomDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: WorkoutService, useClass: MockWorkoutService },
        FormBuilder
      ]
    }).overrideComponent(WorkoutListComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run GetterDeclaration #pagedWorkouts', async () => {
    component.filteredWorkouts = component.filteredWorkouts || {};
    component.filteredWorkouts = ['filteredWorkouts'];
    const pagedWorkouts = component.pagedWorkouts;

  });

  it('should run GetterDeclaration #totalPages', async () => {
    component.filteredWorkouts = component.filteredWorkouts || {};
    const totalPages = component.totalPages;

  });

  it('should run GetterDeclaration #isFirstPage', async () => {

    const isFirstPage = component.isFirstPage;

  });

  it('should run GetterDeclaration #isLastPage', async () => {

    const isLastPage = component.isLastPage;

  });

  it('should run #ngOnInit()', async () => {
    component.loadWorkouts = jest.fn();
    component.filterWorkouts = jest.fn();
    component.workoutForm = component.workoutForm || {};
    component.workoutForm.valueChanges = observableOf({});
    component.ngOnInit();
    // expect(component.loadWorkouts).toHaveBeenCalled();
    // expect(component.filterWorkouts).toHaveBeenCalled();
  });

  it('should run #loadWorkouts()', async () => {
    component.workoutService = component.workoutService || {};
    component.workoutService.getWorkouts = jest.fn();
    component.filterWorkouts = jest.fn();
    component.loadWorkouts();
    // expect(component.workoutService.getWorkouts).toHaveBeenCalled();
    // expect(component.filterWorkouts).toHaveBeenCalled();
  });

  it('should run #undefined()', async () => {
    // Error: ERROR this JS code is invalid, "workout.workouts.some((w)"
    //     at Util.getFuncReturn (/var/task/lib/util.js:325:13)
    //     at /var/task/lib/util.js:413:30
    //     at Array.forEach (<anonymous>)
    //     at Util.getFuncParamObj (/var/task/lib/util.js:396:26)
    //     at Util.getFuncArguments (/var/task/lib/util.js:347:30)
    //     at Util.getFuncReturn (/var/task/lib/util.js:332:34)
    //     at FuncTestGen.setMockData (/var/task/lib/func-test-gen.js:159:31)
    //     at FuncTestGen.setMockData (/var/task/lib/func-test-gen.js:154:14)
    //     at FuncTestGen.setMockData (/var/task/lib/func-test-gen.js:90:12)
    //     at /var/task/lib/func-test-gen.js:80:14
  });

  it('should run #onPageChange()', async () => {

    component.onPageChange({});

  });

  it('should run #onItemsPerPageChange()', async () => {
    component.filterWorkouts = jest.fn();
    component.onItemsPerPageChange({
      target: {
        value: {}
      }
    });
    // expect(component.filterWorkouts).toHaveBeenCalled();
  });

  it('should run #getWorkoutTypes()', async () => {

    component.getWorkoutTypes({
      workouts: [{
        0: {
          type: {}
        },
        join: function() {}
      }]
    });

  });

  it('should run #getTotalWorkoutMinutes()', async () => {

    component.getTotalWorkoutMinutes({
      workouts: [{}, {
        minutes: {}
      }]
    });

  });

});