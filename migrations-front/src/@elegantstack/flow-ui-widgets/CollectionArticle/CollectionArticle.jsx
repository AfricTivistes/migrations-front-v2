import React from 'react'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import { Stack, Main } from '@layout'
import Divider from '@components/Divider'
import useCollectionArticleFR from '@helpers-blog/useCollectionArticle/FR'
import useCollectionArticleEN from '@helpers-blog/useCollectionArticle/EN'

const Card = ({data}) => {

  return(
    <>
    {data.length &&
        data.map((group, index) => (
          <React.Fragment key={`${group.categoryName}.list`}>
            {index % 2 === 0 ? (
              <Stack
                title={group.categoryName}
                titleLink={group.nodes[0].categories.nodes[0].slug}
              >
                <Main>
                  <CardList
                    nodes={group.nodes}
                    limit={6}
                    columns={[1, 1, 2]}
                    variant={['horizontal-md', 'horizontal']}
                    omitCategory
                    omitExcerpt
                  />
                </Main>
              </Stack>
            ) : (
              <Stack
                title={group.categoryName}
                titleLink={group.nodes[0].categories.nodes[0].slug}
              >
                <Main>
                  <CardList
                    nodes={group.nodes}
                    limit={3}
                    columns={[1, 1, 2, 3]}
                    variant={[
                      'horizontal-md',
                      'horizontal',
                      'horizontal',
                      'vertical'
                    ]}
                    omitCategory
                    omitExcerpt
                  />
                  <Divider space={2} />
                  <CardList
                    nodes={group.nodes}
                    limit={3}
                    skip={3}
                    columns={[1, 2, 3]}
                    variant={['horizontal-md', 'horizontal-aside']}
                    omitCategory
                    omitExcerpt
                  />
                  <Divider space={2} />
                  <CardList
                    nodes={group.nodes}
                    limit={3}
                    skip={6}
                    columns={[1, 1, 2, 3]}
                    variant={[
                      'horizontal-md',
                      'horizontal',
                      'horizontal',
                      'vertical'
                    ]}
                    omitCategory
                    omitExcerpt
                  />
                </Main>
              </Stack>
            )}
            {index === 1 && (
              <>
                {/* <Divider />
                <Hero wide sx={{ pb: [3, 5], pt: [4, 5] }}>
                  <Box sx={{ position: `relative`, zIndex: 2 }}>
                    <CardList
                      nodes={featuredPosts.nodes}
                      limit={2}
                      skip={7}
                      columns={[1, 1, 1, 2]}
                      variant={[
                        'horizontal-md',
                        'horizontal',
                        'horizontal',
                        'horizontal-lg'
                      ]}
                      title='Trending Now'
                      aside
                    />
                  </Box>
                  <MemphisPattern />
                </Hero> */}
              </>
            )}
            {index !== data.length - 1 && <Divider />}
          </React.Fragment>
        ))}
    </>
  )
}

const CollectionArticle = () => {
  
  const { group: nodesFR  } = useCollectionArticleFR()
  const { group: nodesEN  } = useCollectionArticleEN()
  
  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) =>
        currentLocale === 'fr' ? <Card data={nodesFR} /> : <Card data={nodesEN} />}
    </IntlContextConsumer>
  )
}

export default CollectionArticle
