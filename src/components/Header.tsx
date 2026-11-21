import bandLogoImage from "../assets/images/NE_Butterfly_Metal.png"

type HeaderProps = {
  setLoginFormVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

type LoginButtonProps = {
  showLoginForm: () => void
}

function Header({ setLoginFormVisibility }: HeaderProps) {
  const showLoginForm = () => {
    setLoginFormVisibility(true)
  }

  return (
    <header className="header">
      <MerchStoreLink />
      <BandLogo />
      <LoginButton showLoginForm={showLoginForm} />
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

function LoginButton({ showLoginForm }: LoginButtonProps) {
  return (
    <nav className="navigation">
      <button
        onClick={() => {
          showLoginForm()
        }}
      >
        Login
      </button>
    </nav>
  )
}

export default Header
