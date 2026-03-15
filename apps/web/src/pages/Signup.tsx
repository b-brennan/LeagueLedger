import { useState } from "react";
import { authApi } from "../utils/api";
import AuthForm from '../components/AuthForm';
import type { AuthResponse, AuthRequest } from '../../../../packages/types';

export default function Signup() {
  const [response, setResponse] = useState<AuthResponse | null>(null);

  // submit sign-up requestwith username/password input values
  async function handleSignup(data: AuthRequest) {
   
    try {
      const res = await authApi.signup(data);
      setResponse(res.data);
    } catch (err) {
      console.log("there was an error with the sign up request", err);
    }
  }

  // Sign-up form
  return (
    <>
      <AuthForm onSubmit={handleSignup} cardTitle="Sign Up" response={response?.message} />
    </>
  )
}