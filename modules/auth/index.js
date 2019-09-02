
import Router from 'next/router'
export const auth = (isAuth) => {
  //   if (ctx.req && !token) {
  //     ctx.res.writeHead(302, { Location: '/login' })
  //     ctx.res.end()
  //     return
  //   }

  if (!isAuth) {
    Router.push('/login')
  }

  return isAuth
}
