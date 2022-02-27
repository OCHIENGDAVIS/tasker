import { ALL_TASKS, ALL_TASKS_FAIL } from '../actions/types';

const defaultState = {
  tasks: [],
};

const taskReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ALL_TASKS:
      return { ...state, tasks: payload.tasks };
    default:
      return state;
  }
};

export default taskReducer;
