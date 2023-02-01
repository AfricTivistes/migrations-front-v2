import React from 'react'
import { useIntl, Link, FormattedMessage } from "gatsby-plugin-react-intl"
import { Layout, Stack, Main, PreFooter } from '@layout'
import { Badge, Flex } from 'theme-ui'
import PageTitle from '@components/PageTitle'
import Pagination from '@components/PaginationWp'
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const styles = {

  wrapper: {
    justifyContent: `space-evenly`,
    alignItems: `center`
  },

  badge: {
    display: [`none`, `block`],
    mb: 0
  }
}

const PageCollection = ({ data: { posts, collectionInfo }, ...props }) => {
  
  const intl = useIntl()
  
  const { name, description, slug, affichage } = collectionInfo.nodes[0]
  const linkProps = slug && {
    as: Link,
    to: `/${intl.formatMessage({ id: "callforslug" })}${slug}`
  }
  return (<Layout {...props}>
    <Seo title={name} description={description} />
    <Divider />
    <Stack effectProps={{ effect: 'fadeInDown' }}>
      <Flex sx={styles.wrapper}>
        <PageTitle
          header={name}
          subheader={name}
          running={description}
          totalCount={posts.totalCount}
          styles={{Flex: 1}}
        />
        {affichage.widget && <Badge variant='tag' sx={styles.badge} {...linkProps}>
          <FormattedMessage id="callfor" /> {name}
        </Badge>}
      </Flex>
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
