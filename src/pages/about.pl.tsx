import * as React from 'react'
import { graphql } from 'gatsby'
import { Page } from '../container/Page/Page'
import { HomeDataQuery } from '../graphql-types'

interface Props {
    data: HomeDataQuery
}

const About: React.FC<Props> = ({ data }) => {
    return <Page currentPage="contact">Yolo</Page>
}

export default About

// export const query = graphql`
//   query HomeData {
//     home {
//       title
//     }
//   }
// `
