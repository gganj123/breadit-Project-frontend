import { magazinesApis } from './magazines';
import { postsApis } from './posts';
import { usersApi } from './users';

const repositories = {
  magazinesApis,
  postsApis,
  usersApi,
};
Object.freeze(repositories);

export { repositories };
