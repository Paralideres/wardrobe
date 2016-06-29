export function requestUsers() {
  return fetch('/api/users').
    then(response => response.json());
}
