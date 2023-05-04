import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, PageProps }) {
  return <Component {...PageProps} />
}

export default MyApp