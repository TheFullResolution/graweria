import React from 'react'
import { Markdown } from '../../components/Markdown/Markdown'
import { HomeDataQuery } from '../../graphql-types'

interface Props {
  data: HomeDataQuery
}

export const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <>
      <h1>{data.page.title}</h1>
      <Markdown>{data.page.description}</Markdown>
      {data.blogList.edges.map((entry) => (
        <div key={entry.node.id}>
          <h2>{entry.node.frontmatter.title}</h2>
          <span>({entry.node.frontmatter.date})</span>
          <Markdown excerpt={true}>{entry.node.excerpt}</Markdown>
        </div>
      ))}
    </>
  )
}
