import Link from 'next/link'

const NavMenu = () => {
  const pages = [
    { link: '/pages/1_Motion_Capture', text: 'Motion Capture' },
    { link: '/#facility', text: 'Facility' },
    { link: '/#research', text: 'Research & Work' },
    { link: '/pages/4_Student_Work', text: 'Student Work' },
    { link: '/pages/5_Contact_Us', text: 'Contact' },
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
