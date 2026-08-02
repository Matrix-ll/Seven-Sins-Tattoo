import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navigation } from '@/data/seed'

const EMBLEM = 'https://storage.googleapis.com/figapp-44eac.appspot.com/chat-attachments/eaif8ssL2XQD47wTDX7ZoRjOmmk1/75ecc8c3-f566-4543-9350-25cf141d56d3/images/1785638277505-lerl0jyivbj.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const isPageRoute = (href: string) => href.startsWith('/')

  return (
    <header data-component="src/components/Navbar.tsx" className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between px-6 py-7 sm:px-12">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="Seven Sins Tattoo — Home"
        >
          <img src={EMBLEM} alt="" className="h-8 w-auto opacity-90 group-hover:opacity-100 transition-opacity" />
          <span className="font-display text-xl font-black uppercase tracking-[0.18em] text-foreground/90 transition-colors duration-500 group-hover:text-foreground">
            Seven Sins
          </span>
        </Link>

        <div className="hidden md:flex md:items-center md:gap-10">
          {navigation.map((item) => {
            if (isPageRoute(item.href)) {
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive: active }) =>
                    `ui-chrome text-[11px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                      active
                        ? 'text-accent'
                        : 'text-muted-foreground hover:text-foreground/70'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            }

            return (
              <a
                key={item.href}
                href={isHome ? item.href : `/${item.href}`}
                className="ui-chrome text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-foreground/70"
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-foreground/60 hover:text-foreground transition-colors duration-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-md px-6 pb-10 pt-5 md:hidden">
          {navigation.map((item) => {
            if (isPageRoute(item.href)) {
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive: active }) =>
                    `block py-3.5 ui-chrome text-sm font-medium uppercase tracking-[0.18em] transition-colors duration-200 ${
                      active
                        ? 'text-accent'
                        : 'text-muted-foreground hover:text-foreground/70'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              )
            }

            return (
              <a
                key={item.href}
                href={isHome ? item.href : `/${item.href}`}
                onClick={() => setOpen(false)}
                className="block py-3.5 ui-chrome text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-200 hover:text-foreground/70"
              >
                {item.label}
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
