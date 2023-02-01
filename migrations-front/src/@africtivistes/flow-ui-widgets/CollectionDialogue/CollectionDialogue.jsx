import React from 'react'
import { IntlContextConsumer } from "gatsby-plugin-react-intl"
import CardList from '@components/CardList'
import Divider from '@components/Divider'
import Reveal from '@components/Reveal'
import useCollectionArticleFR from '@helpers-blog/useCollectionArticle/FR'
import useCollectionArticleEN from '@helpers-blog/useCollectionArticle/EN'

const Card = ({data}) => {

  return(
    <>
    {data.length &&
        data.map((group, index) => (
          <React.Fragment key={`${group.categoryName}.list`}>
            <Divider />
              <Reveal>
                <CardList
                  nodes={group.nodes}
                  variant={['horizontal-md', 'vertical']}
                  limit={2}
                  columns={[1, 2, 2, 2]}
                  title={group.categoryName}
                  omitCategory
                  withTitleLink
                />
                <Divider space={2} />
                <CardList
                  nodes={group.nodes}
                  variant={['horizontal-md', 'horizontal-aside']}
                  limit={4}
                  skip={2}
                  columns={[1, 2, 2, 2]}
                  omitCategory
                  withTitleLink
                />
              </Reveal>
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
