import React from 'react'
import HeroWide from '@widgets/HeroWide'
import Content from './Hero.Content'
import Overlay from './Hero.Overlay'

const styles = {
  wrapper: {
    pb: 0
  }
}

const HeroFaq = ({title, content}, ...props) => {

  return (
    <HeroWide.Wrapper sx={styles.wrapper}>
      <HeroWide.LeftColumn>
        <Content title={title} content={content} />
      </HeroWide.LeftColumn>
      <HeroWide.Overlay>
        <Overlay />
      </HeroWide.Overlay>
    </HeroWide.Wrapper>
  )
}

export default HeroFaq
