import { TokenResponse } from "./token";

export interface MessageResponse{
    data: TokenResponse,
    status: number,
    title: string,
    message: string,
    validationErrors: string
}




