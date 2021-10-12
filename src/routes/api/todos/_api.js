const base = 'https://api.svelte.dev';

export async function api(request, resource, data) {
  if (!request.locals.userid) {
    return { status: 401 };
  }

  const res = await fetch(`${base}/${resource}`, {
    method: request.method,
    headers: { 'content-type': 'application/json' },
    body: data && JSON.stringify(data),
  });

  if (res.ok && request.method !== 'GET' && request.headers.accept !== 'application/json') {
    return { status: 303, headers: { location: '/todos' } };
  }

  return { status: res.status, body: await res.json() };
}
