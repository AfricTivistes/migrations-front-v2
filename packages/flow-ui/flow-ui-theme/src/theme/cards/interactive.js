export default {
  variant: 'cards.primary',
  '@media (hover: hover) and (pointer: fine)': {
    ':hover': {
      transform: `translateY(-0.25rem)`,
      borderColor: `#87311a`,
      bg: `rgba(135, 49, 26, 0.04)`,
      boxShadow: `
        0 4px 12px rgba(135, 49, 26, 0.12),
        0 2px 4px rgba(46,41,51,0.08)
      `,
      'h2 a, h3 a, h4 a': {
        color: `#87311a !important`
      }
    }
  }
}
