interface LoginResponse {
    access_token: string;
    token_type: string;
    userName: string;
  }

  interface ErroResponse {
    error : string;
    error_description: string;
  }