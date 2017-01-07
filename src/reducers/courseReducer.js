/**
 *
 */
'use strict';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_COURSE':
      return [...state, // es6 spread operator, puts values in state inline
        Object.assign({}, action.course) // deep copy of the course
      ];
    default:
      return state;
  }
};
