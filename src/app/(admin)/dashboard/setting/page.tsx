'use client'
// para saber la ruta en donde el usuario esta parado se usa.
// usePathname
import { usePathname } from "next/navigation"
import Link from "next/link"

const page = () => {
    // Ahora vamos a segmetar para que el usuari se pueda mover entre las rutas
    // useSegments
    
    const pathname = usePathname()
    const segments = pathname.split('/').filter(Boolean)


    return (
     <div>
      <nav style={{ marginBottom: '10px' }}>
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/')

          return (
            <span key={href}>
              <Link href={href} className="hover:text-amber-400">
                {segment}
              </Link>
              {index < segments.length - 1 && ' / '}
            </span>
          )
        })}
      </nav>

    </div>
  )
}

export default page