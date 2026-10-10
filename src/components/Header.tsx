import bandLogoImage from '../assets/images/NE_Butterfly_Metal.png'


function Header() {

  return (
    <header className="header">
      <MerchStoreLink />
      <BandLogo />
      <AdminLink />
    </header>

  )
}

function MerchStoreLink() {

  return (
    <div className="merchStoreLink">
      <a href="#">Merch</a>
    </div>
  )
}

function BandLogo() {

  return (
    <div className="bandLogo">
      <img src={bandLogoImage} />
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