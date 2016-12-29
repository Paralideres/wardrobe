export function get(url) {
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    credentials: 'same-origin',
  });
}

export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    mode: 'no-cors',
    credentials: 'same-origin',
    body: JSON.stringify(data),
  });
}

export function postForm(url, data, headers) {
  return fetch(url, {
    method: 'POST',
    headers: Object.assign({}, {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }),
    mode: 'no-cors',
    credentials: 'same-origin',
    body: data,
  })
}

/**
 * Transforms the response to JSON
 */
export function toJson(response) {
  return isValid(response).then(() => response.json());
}

/**
 * Check for the correct status
 */
export function isValid(response) {
  return new Promise((resolve, reject) => {
    if (response.status >= 200 && response.status <= 300) {
      resolve();
    }
    reject();
  });
}
