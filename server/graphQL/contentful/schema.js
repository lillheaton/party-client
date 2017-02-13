
const schema = `
type Party {
  id: String! # the ! means that every author object _must_ have an id
  name: String!
  facebookId: String
  cost: Int
  date: String,
  assignments: [Assignment]
}

type Assignment {
  id: String!
  title: String!
  description: String
  positions: Int
  assignees: [Assignee]
}

type Assignee {
  facebookId: String!
}
`;

export default () => [schema];