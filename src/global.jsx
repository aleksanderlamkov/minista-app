import './styles'
import { Head } from "minista"

export default (props) => {
  const {
    children,
    title,
    url,
    bla,
  } = props

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/news', label: 'News' },
  ]

  return (
    <>
      <Head
        htmlAttributes={{ lang: 'en' }}
      >
        <title>Minista App | {title}</title>
        <script
          src="/src/main.js"
          type="module"
        />
      </Head>
      <header>
        <nav>
          <ul>
            {navItems.map(({ href, label }, index) => (
              <li key={index}>
                <a
                  className={href === url ? 'active' : ''}
                  href={href}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}{bla}</main>
      <footer>FOOTER</footer>
    </>
  )
}
