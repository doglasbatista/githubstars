import gql from 'graphql-tag';

const GET_STARRED_REPOS = gql`
  query getStarredRepos($username: String!, $beforeId: String) {
    viewer {
      login
      avatarUrl
    }
    user(login: $username) {
      login
      name
      bio
      email
      avatarUrl
      location
      websiteUrl
      starredRepositories(last: 20, before: $beforeId) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            name
            description
            shortDescriptionHTML(limit: 80)
            homepageUrl
            projectsUrl
            resourcePath
            viewerHasStarred
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
