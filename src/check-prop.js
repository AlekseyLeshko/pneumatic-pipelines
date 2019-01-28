module.exports = (propName, value = '') => (obj = {}) =>
  !propName ? {} : { ...obj, [propName]: value }
