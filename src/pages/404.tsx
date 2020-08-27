import * as React from 'react'
import { graphql } from 'gatsby'
import { Page } from '../container/Page/Page'

interface Props {
  data: HomeDataQuery
}

const NotFound: React.FC<Props> = ({ data }) => {
  return <Page>Yolo</Page>
}

export default NotFound;

// export const query = graphql`
//   query HomeData {
//     home {
//       title
//     }
//   }
// `
