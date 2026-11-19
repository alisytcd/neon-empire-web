import bandLogoImage from "../assets/images/NE_Butterfly_Metal.png"

type HeaderProps = {
  setLoginFormVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

type AdminLinkProps = {
  toggleLoginVisibility: () => void
}

function Header({ setLoginFormVisibility }: HeaderProps) {
  const toggleLoginVisibility = () => {
    setLoginFormVisibility(true)
  }

  return (
    <header className="header">
      <MerchStoreLink />
      <BandLogo />
      <AdminLink toggleLoginVisibility={toggleLoginVisibility} />
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

function AdminLink({ toggleLoginVisibility }: AdminLinkProps) {
  return (
    <nav className="navigation">
      <button
        onClick={() => {
          toggleLoginVisibility()
        }}
      >
        Admin
      </button>
    </nav>
  )
}

export default Header
