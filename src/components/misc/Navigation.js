import { useNavigate } from 'react-router-dom'
import Logo from '../../FUN AI.png'


const navigation = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Explore',
    href: '/explore'
  },
  {
    name: 'Post',
    href: '/post'
  },
]

const Navigation = ({ page }) => {
  

  return (
    <header className="">
      <nav className="flex items-center justify-between pt-4 px-8">
        <a href="/">
          <img className="h-16 w-auto" src={Logo} alt="Logo" />
        </a>
        <div className="flex gap-6">
          {navigation.slice(0, 3).map((n) => (
            <a key={n.name} href={n.href} className={`${n.name === page ? "font-bold" : ""} text-md`}>
              {n.name}
            </a>
          ))}
        </div>
        
      </nav>
    </header>
  )
}

export default Navigation;