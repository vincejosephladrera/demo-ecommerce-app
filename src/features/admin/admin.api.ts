
import axios from "axios"

import type { AdminLoginSchemaType, AdminSignupSchemaType } from "./admin.types"

async function signIn(loginData: AdminLoginSchemaType) {
  const { data } = await axios.post('/api/admin', loginData)

  return data
}

async function signUp(signUpData: AdminSignupSchemaType) {
  const { data } = await axios.post('/api/admin/signup', signUpData)

  return data
}

export { signIn, signUp }