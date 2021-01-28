import Head from 'next/head'
import NavBar from './NavBar'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1' crossOrigin='anonymous' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css' />
        <link rel='icon' href='/favicon.ico' />
        <title>PokeTrade</title>
      </Head>

      <NavBar />
      <main>
        {children}
      </main>

      <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js' integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW' crossOrigin='anonymous' />
    </div>
  )
}