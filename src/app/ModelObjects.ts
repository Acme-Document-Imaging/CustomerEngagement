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
    EmployeeCode: string;
    EmployeeId: string;
    EmployeeName: string;
}

interface ClientID {
    QueueId: string;
    ClienID: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Gender: string;
    Height: string;     
    Age: string;
    CheckinTimeMinutes: string;
    Birthdate: string;
    ExpirationDate: string;
    LicenseNumber: string;
    StreetAddress: string;
    City: string;
    Jurisdiction: string;
    Postal: string;
    MobileNumber: string;
    LastCheckInDate: string;
    LastPurchaseAmount: string;
}


