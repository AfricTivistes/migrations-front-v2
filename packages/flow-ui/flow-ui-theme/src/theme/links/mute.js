export default {
  // Couleur des liens de menu "muets" (horizontal, nav)
  // Harmonisée avec le bordeaux du logo / bouton Vérification
  color: '#87311a',
  textDecoration: `none`,
  userSelect: `none`,
  ':visited': {
    color: '#87311a'
  },
  ':hover': {
    color: '#6b2815'
  },
  '&.active,&[aria-current="page"]': {
    color: '#6b2815',
    fontWeight: 'bold',
    borderBottom: '2px solid #6b2815'
  }
}
