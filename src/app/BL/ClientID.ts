import { DateTime } from "ionic-angular";
import { ClientPurchases } from '../BL/ClientPurchases';
 
export class ClientID {
    QueueId: string = "";
    Id: string = "";
    FirstName: string = "";
    MiddleName: string = "";
    LastName: string = "";
    Gender: string = "";
    Height: string = "";     
    Age: string = "";
    CheckinTimeMinutes: string = "";
    BirthDate: DateTime  = null;
    ExpirationDate: DateTime = null;
    LicenseNumber: string = "";
    StreetAddress: string = "";
    City: string = "";
    Jurisdiction: string = "";
    Postal: string = "";
    MobileNumber: string = "";
    LastCheckInDate: DateTime = null ;
    LastPurchaseDate: DateTime = null
    LastPurchaseAmount: Number = 0;
    LastPurchaseItem: string = "";
    AvgPurchaseAmount: Number = 0;
    CustomerSinceDate: DateTime = null ;
    Tags:string = "";
    Purchases: ClientPurchases[];
}