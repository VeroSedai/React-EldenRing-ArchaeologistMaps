import { gql } from 'graphql-request';

export const QUERIES = {
  weapon: {
    allNames: gql`
      query {
        weapon(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        weapon(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  shield: {
    allNames: gql`
      query {
        shield(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        shield(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  npc: {
    allNames: gql`
      query {
        npc(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        npc(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  armor: {
    allNames: gql`
      query {
        armor(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        armor(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  boss: {
    allNames: gql`
      query {
        boss(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        boss(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  ammo: {
    allNames: gql`
      query {
        ammo(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        ammo(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  ashover: {
    allNames: gql`
      query {
        ashofwar(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        ashofwar(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  creature: {
    allNames: gql`
      query {
        creature(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        creature(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  incantation: {
    allNames: gql`
      query {
        incantation(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        incantation(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  item: {
    allNames: gql`
      query {
        item(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        item(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  sorcery: {
    allNames: gql`
      query {
        sorcery(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        sorcery(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  spirit: {
    allNames: gql`
      query {
        spirit(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        spirit(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
  talisman: {
    allNames: gql`
      query {
        talisman(limit: -1) {
          name
        }
      }
    `,
    details: gql`
      query SearchItems($name: String!) {
        talisman(name: $name) {
          id
          name
          image
          description
        }
      }
    `,
  },
};
