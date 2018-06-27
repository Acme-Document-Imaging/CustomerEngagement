interface LoginResponse {
    access_token: string;
    token_type: string;
    userName: string;
}

interface ErroResponse {
    error: string;
    error_description: string;
}


interface Employee {
    EmpId: string;
    EmpName: string;
}

interface ClientID {
    Id: string;
    FirstName: string;
    LastName: string;
    Birthdate: string;
    ExpirationDate: string;
    LicenseNumber: string;
    StreetAddress: string;
    City: string;
    Jurisdiction: string;
    Postal: string;
    Gender: string;
    Height: string;
    MobileNumber: string;
    LastCheckInDate: string;
    LastPurchaseAmount: string;
    LastPurchaseDate: string;
}


