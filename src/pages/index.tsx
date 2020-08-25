import * as React from 'react'
import { graphql } from 'gatsby'
import { HomeDataQuery } from '../graphql-types'

interface Props {
    data: HomeDataQuery
}

const HomePage: React.FC<Props  > = ({ data }) =>  {
  return (
    <div>
      <h1>{data?.home.title}</h1>
    </div>
  )
}

export default HomePage

export const query = graphql`
  query HomeData {
    home {
      title
    }
  }
`
