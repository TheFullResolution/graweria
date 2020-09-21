import { graphql } from 'gatsby'
import * as React from 'react'
import { Page } from '../container/Page/Page'
import { HomeDataQuery } from '../graphql-types'
import { Languages } from '../utils/languages'

interface Props {
  data: HomeDataQuery
}

const NotFound: React.FC<Props> = ({ data }) => {
  return (
    <Page currentPage={'notfound'} language={Languages.pl}>
      Yolo
    </Page>
  )
}

export default NotFound

export const query = graphql`
  query NotFoundData {
    notfound {
      go_home_label
      text
      picture
    }
  }
`
