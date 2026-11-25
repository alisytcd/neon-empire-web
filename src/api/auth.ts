export interface LoginResponse {
  accessToken: string
  tokenType: string
}

export async function login(
  email: string,
  password: string,
): Promise<LoginResponse> {
  const request = {
    email: email,
    password: password,
  }
  const requestJson = JSON.stringify(request)

  const response = await fetch("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: requestJson,
  })

  if (response.ok) {
    const responseJson: LoginResponse = await response.json()
    return responseJson
  } else if (response.status === 401) {
    throw new Error(
      "Authentication failed. Please check that your email and password are correct and try again.",
    )
  } else {
    throw new Error("Something went wrong. Please try again later.")
  }
}
