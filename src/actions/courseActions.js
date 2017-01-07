/**
 *
 */
'use strict';

export function createCourse(course) {
  return {type: 'CREATE_COURSE', course}; // in es6, course is the same as course: course
}
