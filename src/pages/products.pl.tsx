import * as React from 'react'
import { graphql } from 'gatsby'
import { Page } from '../container/Page/Page'
import { HomeDataQuery } from '../graphql-types'

interface Props {
    data: HomeDataQuery
}

const Products: React.FC<Props> = ({ data }) => {
    return <Page currentPage="contact">Yolo</Page>
}

export default Products

// export const query = graphql`
//   query HomeData {
//     home {
//       title
//     }
//   }
// `