module.exports = (propName, value = '') => (obj = {}) =>
  !propName ? {} : { [propName]: value , ...obj }
