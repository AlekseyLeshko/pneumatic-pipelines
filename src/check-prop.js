const checkProp = (propName, defaultVal = '') => (obj) => {
  const newObj = obj === undefined ? {} : obj
  if (!propName) {
    return newObj
  }

  newObj[propName] = defaultVal

  return newObj
}

module.exports = checkProp
