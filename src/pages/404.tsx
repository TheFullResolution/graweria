import * as React from 'react'
import { graphql } from 'gatsby'
import { Page } from '../container/Page/Page'
import {HomeDataQuery} from '../graphql-types'
import {Languages} from '../utils/languages'

interface Props {
  data: HomeDataQuery
}

const NotFound: React.FC<Props> = ({ data }) => {
  return <Page currentPage={'404'} language={Languages.pl}>Yolo</Page>
}

export default NotFound;

// export const query = graphql`
//   query HomeData {
//     home {
//       title
//     }
//   }
// `
