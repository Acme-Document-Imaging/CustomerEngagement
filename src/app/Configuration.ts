import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    
    //public Url = 'https://loyaltyapi20180219045601.azurewebsites.net/';
    public Url = 'http://localhost:53223/';
    public ApiUrl = this.Url + "/api/store";
    public Token = "";
}
