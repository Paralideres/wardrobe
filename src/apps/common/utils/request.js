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
    mode: 'cors',
    credentials: 'same-origin',
    body: JSON.stringify(data),
  });
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
