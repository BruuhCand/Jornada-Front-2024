interface MessageResponse{
    data: TokenResponse,
    status: number,
    title: string,
    message: string,
    validationErrors: string
}

interface TokenResponse{
    token: string
}

