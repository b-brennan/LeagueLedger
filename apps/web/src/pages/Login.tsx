import { useState } from "react";
import { authApi } from "../utils/api";
import AuthForm from '../components/AuthForm';
import type { AuthResponse, AuthRequest } from "@leagueledger/types";

export default function Login() {
  const [response, setResponse] = useState<AuthResponse | null>(null);

  // submit login request with username/password input values
  async function handleLogin(data: AuthRequest) {
   
    try {
      const res = await authApi.login(data);
      console.log(res.data)
      setResponse(res.data);
    } catch (err) {
      console.log("there was an error with the sign up request", err);
    }
  }

  // Login form
  return (
    <>
      <AuthForm onSubmit={handleLogin} cardTitle="Login" response={response?.message}/>
    </>
  )
}