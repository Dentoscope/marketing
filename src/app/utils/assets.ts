const isGithubActions = typeof process !== 'undefined' && process.env.GITHUB_ACTIONS === 'true';
const repoName = isGithubActions && process.env.GITHUB_REPOSITORY
  ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}`
  : '';

export const getAssetPath = (src: string) => {
  return `${repoName}${src}`;
};
