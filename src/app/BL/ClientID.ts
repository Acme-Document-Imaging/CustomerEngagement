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
    LastPurchaseAmount: string = "";
    LastPurchaseDate: DateTime = null
    LastPurchaseItem: string = "";
    Tags:string = "";
    Purchases: ClientPurchases[];
}