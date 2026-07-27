import Link from 'next/link'

const NavMenu = () => {
  const pages = [
    { link: '/#capabilities', text: 'Capabilities' },
    { link: '/#facility', text: 'Facility' },
    { link: '/#research', text: 'Research & Work' },
    { link: '/pages/4_Student_Work', text: 'Student Work' },
    { link: '/#collaborate', text: 'Collaborate' },
  ]

  return (
    <nav>
      <ul>
        <li><Link href='/' aria-label='Starlab home'>Starlab</Link></li>
        {pages.map((page) => (
          <li key={page.text}><Link href={page.link}>{page.text}</Link></li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu
