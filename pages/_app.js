import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/fonts/gt/style.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import ('bootstrap/dist/js/bootstrap')
  }, [])
  return (
    <div>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
