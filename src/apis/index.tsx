import { magazinesApis } from './magazines';
import { postsApis } from './posts';
import { usersApi } from './users';
import { commentsApis } from './comments';
import { likesApis } from './likes';

const repositories = {
  magazinesApis,
  postsApis,
  usersApi,
  commentsApis,
  likesApis,
};
Object.freeze(repositories);

export { repositories };
