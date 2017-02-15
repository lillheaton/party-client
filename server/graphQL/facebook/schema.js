
const schema = `
type Profile {
    id: String!
    name: String
    picture: String
}

type FBEvent {
    id: String!
    name: String
    description: String
    place: Place
    start_time: String
    attending_count: String
    interested_count: String
    attending: [Profile]
    interested: [Profile]
}

type Place {
    name: String
}

type EventMutationResp {
    success: Boolean
}

`;

export default () => [schema];