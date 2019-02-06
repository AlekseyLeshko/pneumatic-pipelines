module.exports = (propName) =>
  (obj) =>
    (pipelines) =>
      ({
        ...pipelines,
        [propName]: obj,
      })
