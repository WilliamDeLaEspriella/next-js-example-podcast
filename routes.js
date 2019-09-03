const routes = require('next-routes')

module.exports = routes()
  .add('index')
  .add('login')
  .add('profile')
  // .add("user", "/user/", "profile");
// .add('/:noname/:lang(en|es)/:wow+', 'complex')
// .add({name: 'beta', pattern: '/v3', page: 'v3'})
