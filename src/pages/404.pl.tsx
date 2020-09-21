import { graphql } from 'gatsby'
import * as React from 'react'
import { NotFoundPage } from '../container/NotFoundPage/NotFoundPage'
import { Page } from '../container/Page/Page'
import { NotFoundDataQuery } from '../graphql-types'
import { Languages } from '../utils/languages'

interface Props {
  data: NotFoundDataQuery
}

const NotFound: React.FC<Props> = ({ data }) => {
  return (
    <Page currentPage={'notfound'} language={Languages.pl}>
      <NotFoundPage data={data} />
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
