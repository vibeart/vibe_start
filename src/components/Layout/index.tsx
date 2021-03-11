import Head from 'next/head'
import HeaderPage from 'components/Header'

type DataPage = {
  children: React.ReactNode
  titulo: string
  metatags?: {}
}

const index = ({ children, titulo, metatags }: DataPage) => {
  return (
    <div>
      <Head>
        <title>{titulo}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <HeaderPage />
      {children}
      <footer className="footer">
        <div className="content has-text-centered">
          <a>TESTE</a>
        </div>
      </footer>
    </div>
  )
}

export default index
