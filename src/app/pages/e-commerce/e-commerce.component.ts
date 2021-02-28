import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PbiApiService } from '../../@core/api-services/pbi-api.service';
import * as pbi from 'powerbi-client';


@Component({
  selector: 'ngx-ecommerce',
  styleUrls: ['./e-commerc.component.scss'],
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements AfterViewInit {
  report: pbi.Embed;
  xx: any;
  @ViewChild('reportContainer', { static: false }) reportContainer: ElementRef;

  constructor(private api: PbiApiService) {
  }

  ngAfterViewInit() {
    this.getAADFromClients();
  }

  getAADFromClients() {
    this.api.getAADFromClient().subscribe(res => {
      console.log(res);
      this.xx = res;
      this.getEmbed(this.xx.access_token);
    }, err => {
      console.log(err, 'error')
    })
  }

  getEmbed(token) {
    this.api.getEmbedTokenFromClient(token).subscribe(res => {
      this.showReport(res.token);
    })
  }

  showReport(embed_token) {
    // Embed URL    
    let embedUrl = environment.powerBI.reportBaseURL;
    let embedReportId = environment.powerBI.reportID;
    let settings: pbi.IEmbedSettings = {
      filterPaneEnabled: false,
      navContentPaneEnabled: false,
    };
    let config: pbi.IEmbedConfiguration = {
      type: 'report',
      tokenType: pbi.models.TokenType.Embed,
      accessToken: embed_token,
      embedUrl: embedUrl,
      id: embedReportId,
      filters: [],
      settings: settings
    };
    let reportContainer = this.reportContainer.nativeElement;
    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
    this.report = powerbi.embed(reportContainer, config);
    this.report.off("loaded");
    this.report.on("loaded", () => {
      console.log("Loaded");
      //this.setTokenExpirationListener(Token.expiration, 2);
    });
    this.report.on("error", () => {
      console.log("Error");
    });
  }
}
