import * as React from 'react'
import { graphql } from 'gatsby'
import {AboutPage} from '../container/AboutPage/AboutPage'
import { Page } from '../container/Page/Page'
import { HomeDataQuery } from '../graphql-types'
import {Languages} from '../utils/languages'

interface Props {
    data: HomeDataQuery
}

const About: React.FC<Props> = ({ data }) => {
    return <Page currentPage="about" language={Languages.pl}><AboutPage data={data} /></Page>
}

export default About

// export const query = graphql`
//   query HomeData {
//     home {
//       title
//     }
//   }
// `
