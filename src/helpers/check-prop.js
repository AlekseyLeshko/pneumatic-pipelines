module.exports = (propName, value = '') => (obj = { step: {} }) =>
  !propName ? { step: {} } : { step: { [propName]: value , ...obj.step } }
