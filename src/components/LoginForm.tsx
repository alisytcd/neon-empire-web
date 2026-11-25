import { useEffect, useRef, useState } from "react"
import { login } from "../api/auth"

type loginFormProps = {
  setLoginFormVisibility: React.Dispatch<React.SetStateAction<boolean>>
}

function LoginForm({ setLoginFormVisibility }: loginFormProps) {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setLoadingState] = useState(false)

  const handleSubmit = async (
    submitEvent: React.SubmitEvent<HTMLFormElement>,
  ) => {
    //generally, the browser's default behavior upon form submission is to refresh the page.
    //we don't want that, so we call .preventDefault() on the event
    submitEvent.preventDefault()

    //if submit button for login has already been clicked, we wana return early
    if (isLoading) {
      return
    }

    //don't want users to be spamming the login button once a request is made
    //going to manage it with state
    setLoadingState(true)

    try {
      //setting error as null in case user retries to submit credentials
      setError(null)

      const formData = new FormData(submitEvent.currentTarget)
      const email = formData.get("email")
      const password = formData.get("password")

      //narrowing types of email and password as FormData.get() returns a FormDataEntryValue | null
      //which could be a string, file or null. And as the login function expects two strings, we need
      //to narrow the type manually

      //if the types aren't what we expect, present an error and return early
      if (typeof email !== "string" || typeof password !== "string") {
        setError("Unable to process login credentials. Please try again.")
        return
      }
      const loginResponse = await login(email, password)
      const accessToken = loginResponse.accessToken
      const tokenType = loginResponse.tokenType

      //do something with accessToken and tokenType
    } catch (error) {
      //since we could have errors be something went wrong" , or new Error("something went wrong")
      //we want to first check if it's an instance of Error, and extract the error.message for our setter,
      //otherwise we default to setting the error message with a string
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError("An unexpected error occurred.")
      }
    } finally {
      setLoadingState(false)
    }
  }

  //in order to be able to call the methods of HTMLDialogElement, we need aceess to its ref
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
        <form onSubmit={handleSubmit}>
          <div className="inputField">
            <label htmlFor="email">E-mail: </label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="inputField">
            <label htmlFor="password">Password: </label>
            <input id="password" name="password" type="password" required />
          </div>

          <button type="submit" disabled={isLoading}>
            Login
          </button>
          <p>
            Forgot password? Click <a href="#">here.</a>
          </p>
          {error != null && <p>{error}</p>}
        </form>
      </div>
    </dialog>
  )
}

export default LoginForm
