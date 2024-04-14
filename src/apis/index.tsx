import { magazinesApis } from './magazines';
import { postsApis } from './posts';
import { usersApi } from './users';
import { commentsApis } from './comments';
import { likesApis } from './likes';
import { recipesApis } from './recipes';

const repositories = {
  magazinesApis,
  postsApis,
  usersApi,
  commentsApis,
  likesApis,
  recipesApis,
};
Object.freeze(repositories);

export { repositories };
