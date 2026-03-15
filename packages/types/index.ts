
// Authentication Types

export interface AuthRequest {
    username: string
    password: string
}

export interface AuthResponse {
    code: number
    message: string
}


