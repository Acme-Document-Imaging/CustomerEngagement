import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    
    // public Url = 'http://localhost:53223/';
    public Url  = 'http://loyaltyxafapi-test.azurewebsites.net'
    public ApiUrl = this.Url + "/api/store";
    public Token = "";
    public SelectedEmp :Employee = null;
}
