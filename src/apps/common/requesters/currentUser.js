import { get, postForm, toJson } from '../utils/request';

const clientId = 2;
const clientSecret = 'o05jkQLCEjxC4yKS6UyKHHLU91LUhzFIpQt4Dc7F';
const grantType = 'password';
const scope = '*';
const creds = [
  `client_id=${clientId}`,
  `client_secret=${clientSecret}`,
  `grant_type=${grantType}`,
  `scope=${scope}`
].join('&');

export function requestLogin(credentials) {
  const data = [
    `username=${credentials.email}`,
    `password=${credentials.password}`
  ].join('&');
  return postForm('/api/account/login', creds.concat(data)).
    then(toJson);
}

export function getCurrentUser() {
  return get('/api/account').
    then(toJson);
}
