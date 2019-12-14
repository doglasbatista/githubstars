import gql from 'graphql-tag';

const GET_STARRED_REPOS = gql`
  query getStarredRepos($username: String!) {
    user(login: $username) {
      login
      name
      bio
      email
      avatarUrl
      location
      websiteUrl
      starredRepositories(last: 5) {
        totalCount
        edges {
          node {
            id
            name
            description
            homepageUrl
            projectsUrl
            resourcePath
            stargazers {
              totalCount
            }
          }
        }
      }
    }
  }
`;

export { GET_STARRED_REPOS }; // eslint-disable-line
