const coerceDates = value => {
  if (value instanceof Date) {
    return value.toISOString()
  }

  if (Array.isArray(value)) {
    return value.map(item => coerceDates(item))
  }

  if (value && typeof value === 'object') {
    Object.keys(value).forEach(key => {
      value[key] = coerceDates(value[key])
    })
  }

  return value
}

exports.onCreateNode = ({ node }) => {
  Object.keys(node).forEach(key => {
    if (key === 'internal' || key === 'parent' || key === 'children') {
      return
    }

    node[key] = coerceDates(node[key])
  })
}
