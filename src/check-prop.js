const checkProp = (propName, defaultVal = '') => (obj) => {
  const newObj = obj === undefined ? {} : obj
  if (!newObj[propName]) {
    newObj[propName] = defaultVal
  }

  return newObj
}

module.exports = checkProp
