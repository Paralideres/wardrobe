export function get(url) {
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': window.__csrf
    },
    credentials: 'same-origin',
  });
}

export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': window.__csrf
    },
    credentials: 'same-origin',
    body: JSON.stringify(data),
  });
}
