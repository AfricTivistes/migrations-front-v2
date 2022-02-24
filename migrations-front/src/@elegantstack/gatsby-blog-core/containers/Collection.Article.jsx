import React from 'react'
import { Layout, Stack, Main, PreFooter } from '@layout'
import PageTitle from '@components/PageTitle'
import Pagination from '@components/PaginationWp'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const PageCollection = ({ data: { posts, collectionInfo }, ...props }) => {
  
  const { name, description } = collectionInfo.nodes[0]
  
  return (<Layout {...props}>
    <Seo title={name} description={description} />
    <Divider />
    <Stack effectProps={{ effect: 'fadeInDown' }}>
      <PageTitle
        header={name}
        subheader={name}
        running={description}
        totalCount={posts.totalCount}
      />
    </Stack>
    <Divider />
    <Stack>
      <Main>
        {posts.nodes && (
          <CardList
            nodes={posts.nodes}
            variant={['horizontal-md', 'vertical']}
            columns={[1, 2, 3, 3]}
            omitCategory={
              props.pageContext &&
              props.pageContext.collectionType === 'categories'
            }
          />
        )}
      </Main>
    </Stack>
    <Divider />
    <PreFooter>
      <Pagination {...posts.pageInfo} {...collectionInfo.nodes[0]} />
    </PreFooter>
  </Layout>
)}

export default PageCollection
