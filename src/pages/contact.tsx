import * as React from 'react'
import { graphql } from 'gatsby'
import { Page } from '../container/Page/Page'
import { HomeDataQuery } from '../graphql-types'

interface Props {
    data: HomeDataQuery
}

const Contact: React.FC<Props> = ({ data }) => {
    return <Page>Yolo</Page>
}

export default Contact

// export const query = graphql`
//   query HomeData {
//     home {
//       title
//     }
//   }
// `
