import { v4 as uuid } from '@lukeed/uuid';
import cookie from 'cookie';

export const handle = async ({ request, resolve }) => {
  const cookies = cookie.parse(request.headers.cookie || '');
  request.locals.userid = cookies.userid || uuid();
  if (request.query.has('_method')) request.method = request.query.get('_method').toUpperCase();
  const response = await resolve(request);
  if (!cookies.userid) response.headers['set-cookie'] = cookie.serialize('userid', request.locals.userid, { path: '/', httpOnly: true });
  return response;
};
