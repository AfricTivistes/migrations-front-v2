import React from 'react'
import { graphql } from "gatsby"
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import { useBlogAuthors } from '@helpers-blog'
import { useBlogCategories } from '@helpers-blog'
import IconButton from '@components/IconButton'

const PageEspaceDialogue = props => {
  const authors = useBlogAuthors()
  const categories = useBlogCategories()
  const {title, content} = props.data.allWpPage.nodes[0]

  return (
    <Layout {...props}>
      <Seo title='Espace dialogue' />
      <Divider />
      <Stack effectProps={{ effect: 'fadeInDown' }}>
      <PageTitle
          header={title}
          subheader={content}
        />
      </Stack>
      <Stack>
    <Main>
    {categories &&
        categories.filter(category => category.widget).map(({ id, name, slug, totalCount, icon }) => {
          const buttonProps = {
            key: id,
            name,
            number: totalCount,
            to: slug,
            iconPath: icon,
            Icon: !icon && FaArchive,
            variant: 'vertical'
          }
          
          return totalCount !== 0 && <IconButton {...buttonProps} />
        })}
        </Main>
      </Stack>
    </Layout>
  )
}

export default PageEspaceDialogue
export const query = graphql`
query {
  allWpPage(filter: {slug: {eq: "espace-dialogue"}}) {
    nodes {
      title
      content
    }
  }
}
`