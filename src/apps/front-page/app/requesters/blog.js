import { get } from 'common/utils/request';

export function fetchBlogPosts() {
  return get(`http://blog.paralideres.org/api/get_recent_posts/?count=7`).
    then(response => {
      console.log(response);
    });
}
