import { useState } from 'react'
import type { AuthRequest } from "@leagueledger/types";

type Props = {
    onSubmit: (data: AuthRequest) =>Promise<void>
    cardTitle: string
    response: string | undefined
}

export default function AuthForm({onSubmit, cardTitle, response}: Props) {
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit (e: React.FormEvent) {
        e.preventDefault()
        // set auth request with user input, call parent submit function, clear contents
        const reqData: AuthRequest = {username, password}
        await onSubmit(reqData)
        setUsername("")
        setPassword("")
    }
  
    // Sign-up form
    return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="shadow-lg bg-gray-800 rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">{cardTitle}</h2>
  
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter username"
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter password"
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
          >
            {cardTitle}
          </button>
        </form>

        {response && (
        <p className="mt-4 text-center text-red-600">
          {response}
        </p>
      )}
      </div>
    </div>
  );
}