import ToDo from '../Api/axios';

export const ACTIONS = {
  GET: 'todo/get',
  CREATE: 'todo/create',
  UPDATE: 'todo/update',
  DELETE: 'todo/update',
};

export const getTodo = todo => (dispatch) => {
  dispatch({ type: ACTIONS.GET, payload: todo });
};

export const updateTodo = value => (dispatch) => {
  dispatch({ type: ACTIONS.UPDATE, payload: value });
};

export const createTodo = value => dispatch =>
  ToDo.set(value).then((response) => {
    dispatch({ type: ACTIONS.CREATE, payload: response.data });
  });

export const getTodoAsync = () => dispatch =>
  ToDo.get()
    .then((response) => {
      dispatch({ type: ACTIONS.GET, payload: response.data });
    })
    .catch((err) => {
      if (err) {
        console.log(err);
      }
    });
