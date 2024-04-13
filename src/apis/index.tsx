import { magazinesApis } from './magazines';
import { usersApi } from './users';
import { commentsApis } from './comments';

const repositories = {
  magazinesApis,
  usersApi,
  commentsApis,
};
Object.freeze(repositories);

export { repositories };
