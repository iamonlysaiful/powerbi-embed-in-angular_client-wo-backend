# Embedding Power BI Report in Angular Client W/O Backend

In this project No Backend is used to embed Power BI report to Angular client.

### Flow
* Getting AAD token from Azure for Power BI resource.
* Avoid CORS issue to get AAD token in client by setting Proxy configuration
* Getting Embed token from Power BI using AAD bearer token
* Binding Report to Client with Embed token

### To Run This Application
* _Run_ npm i
* Replace properties with *<>* tag in _pbi-api.service.ts_ & _proxy.conf.json_
* Local SSL added to this application & configured too. so run _npm run start_
* This application also have docker configuration file named _DockerFile_ & _nginx.conf_ . If you want you can deploy it as docker container.

### Template
_In this application I used [ngx-admin](https://akveo.github.io/ngx-admin?utm_campaign=ngx_admin%20-%20home%20-%20ngx_admin%20github%20readme&utm_source=ngx_admin_material&utm_medium=referral&utm_content=github_readme) template_

#### Files I modified in whole  template are,
* e-commerce.component.ts
* pbi-api.service.ts
* proxy.conf.json
* package.json
* angular.json
* DockerFile
* nginx.conf
