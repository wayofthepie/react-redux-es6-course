/**
 *
 */
'use strict';

import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';


export function loadCoursesSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses}; // in es6, course is the same as course: course
}

export function loadCourses() {
  return function (dispatch) {
    return courseApi.getAllCourses()
      .then(courses => {
        dispatch(loadCoursesSuccess(courses));
      }).catch(error => {
        throw(error);
      });
  };
}
