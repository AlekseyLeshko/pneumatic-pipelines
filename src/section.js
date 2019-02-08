const simpleObj = require('./helpers/simple-obj')

module.exports = {
  addDefault: simpleObj('default'),
  addBranches: simpleObj('branches'),
  addTags: simpleObj('tags'),
  addCustom: simpleObj('custom'),
  addPullRequests: simpleObj('pull-requests'),
  addBookmarks: simpleObj('bookmarks'),
}
