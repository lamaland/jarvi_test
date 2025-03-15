import { NhostClient } from '@nhost/nhost-js'

const initNhostProvider = async () => {
  const { auth, graphql } = new NhostClient({
    subdomain: 'ufulyzisftpgnnrcyley',
    region: 'eu-central-1',
  })

  await auth.signIn({
    email: 'quentin@jarvi.tech',
    password: 'mYAW9QVdMKZenfbA',
  })

  graphql.setHeaders({ 'x-hasura-role': 'user' })

  return graphql
}

const graphql = await initNhostProvider()

export { graphql }
