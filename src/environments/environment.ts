/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  powerBI: {
    reportBaseURL: 'https://app.powerbi.com/reportEmbed',
    qnaBaseURL: 'https://app.powerbi.com/qnaEmbed',
    tileBaseURL: 'https://app.powerbi.com/embed',
    groupID: 'd3081fc2-75b1-47d8-8a58-8b8ddae4061b',
    reportID: '6fb823ad-8897-481f-8030-38ef3c262581'
  }
};
