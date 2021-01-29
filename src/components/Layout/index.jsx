import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className='bg-gray'>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1' crossOrigin='anonymous' />
        <script src="https://kit.fontawesome.com/1500b09f5a.js" crossOrigin="anonymous"></script>
        <link rel='icon' href='/favicon.ico' />
        <title>PokeTrade</title>
      </Head>

      { children }

      <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js' integrity='sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW' crossOrigin='anonymous' />
    </div>
  )
}