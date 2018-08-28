import { Injectable } from '@angular/core';
import { ClientID } from '../BL/ClientID';

@Injectable()
export class Configuration {
    
    //public Url = 'http://localhost:53223/';
    public Url  = 'http://loyaltyxafapi-test.azurewebsites.net'
    public ApiUrl = this.Url + "/api/store";
    public Token = "";
    public SelectedEmpID;
    public clientID: ClientID;
    public listClients: Employee[];

    public listClientsWaiting: ClientID[];
    public errorMsgWaiting: string;
}
