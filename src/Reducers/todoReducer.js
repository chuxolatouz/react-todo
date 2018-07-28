import { ACTIONS } from '../Actions/todoActions';

const initialState = {
  todos: [],
  newTodo: '',
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET:
      return { ...state, todos: action.payload };
    case ACTIONS.UPDATE:
      return { ...state, ...action.payload };
    case ACTIONS.CREATE:
      return { newTodo: '', todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

export default todoReducer;
