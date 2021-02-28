import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PbiApiService {

  constructor(private http: HttpClient) { }

  getEmbedTokenFromClient(token) {
    var formdata = {
      accessLevel: 'View',
      allowSaveAs: false
    }

    return this.http.post<any>("https://api.powerbi.com/v1.0/myorg/groups/<group_id>/reports/<report_id>/GenerateToken", formdata, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8').set('Accept', 'application/json').set('Authorization', 'Bearer ' + token)
    });
  }

  getAADFromClient() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');

    let body = new URLSearchParams();

    body.set('grant_type', 'client_credentials');
    body.set('client_id', '<client_id>');
    body.set('resource', 'https://analysis.windows.net/powerbi/api');
    body.set('client_secret', '<client_secret>');

    return this.http.post('<tenantid>/oauth2/token', body.toString(), { headers: headers });

  }
}
