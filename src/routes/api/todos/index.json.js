import { api } from './_api';

// GET /todos.json
export const get = async request => {
  console.log('userid', request.locals.userid);
  const response = await api(request, `todos/${request.locals.userid}`);

  if (response.status === 404) {
    return { body: [] };
  }

  return response;
};

// POST /todos.json
export const post = async request => {
  const response = await api(request, `todos/${request.locals.userid}`, {
    text: request.body.get('text'),
  });

  return response;
};
