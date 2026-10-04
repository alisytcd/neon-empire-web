
function Header() {

  return (
    <header className="header">
      <BandNameAndLogo />
      <AdminLink />
    </header>

  )
}

function BandNameAndLogo() {

  return (
    <div className="nameAndLogo">
      <p>Neon Empire</p>
    </div>
  )
}

function AdminLink() {

  return (
    <nav className="navigation">
      <a href="#">Admin</a>
    </nav>
  )
}

export default Header