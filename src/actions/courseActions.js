/**
 *
 */
'use strict';

import * as types from './actionTypes';

export function createCourse(course) {
  return {type: types.CREATE_COURSE, course}; // in es6, course is the same as course: course
}
