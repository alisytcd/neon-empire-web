import { useEffect, useRef } from "react"

type loginFormProps = {
  setLoginFormVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

function LoginForm({ setLoginFormVisibility }: loginFormProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const closeLoginForm = () => {
    setLoginFormVisibility(false)
  }

  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.showModal()
  }, [])

  return (
    <dialog className="loginModal" ref={dialogRef} onClose={closeLoginForm}>
      <div className="modalContent">
        <div className="modalHeader">
          <h2>Login</h2>
          <button
            className="loginCloseButton"
            type="button"
            onClick={() => dialogRef.current?.close()}
          >
            X
          </button>
        </div>
        <form>
          <div className="inputField">
            <label htmlFor="email">E-mail: </label>
            <input id="email" type="email" />
          </div>
          <div className="inputField">
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" />
          </div>

          <button type="submit">Login</button>
          <p>
            Forgot password? Click <a href="#">here.</a>
          </p>
        </form>
      </div>
    </dialog>
  )
}

export default LoginForm
