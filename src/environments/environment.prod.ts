/*
 * Define api url
 */
const arrDomain: string[] = ['test', 'staging', 'localhost'];
const hostnameArr: string[] = location?.hostname?.split('.');
hostnameArr.push('youmed.vn');
arrDomain.push('youmed.vn');
const domain: string | undefined = hostnameArr.find((x) =>
  arrDomain.includes(x)
);

const findFlag: any = arrDomain.find((x) => domain?.includes(x));
let listUrlApi = { url: '', apiUrl: '', adminApiUrl: '' };

switch (findFlag) {
  case 'test':
    listUrlApi = {
      url: `https://youmed.test.davido.vn`,
      apiUrl: `https://youmed.test.davido.vn/api`,
      adminApiUrl: 'https://youmed.test.davido.vn/admin/api',
    };
    break;
  case 'staging':
    listUrlApi = {
      url: `https://youmed.staging.davido.vn`,
      apiUrl: `https://youmed.staging.davido.vn/api`,
      adminApiUrl: `https://youmed.staging.davido.vn/admin/api`,
    };
    break;
  case 'youmed.vn':
    listUrlApi = {
      url: `https://youmed.vn`,
      apiUrl: `https://youmed.vn/api`,
      adminApiUrl: `https://youmed.vn/admin/api`,
    };
    break;

  default:
    listUrlApi = {
      url: `https://youmed.test.davido.vn`,
      apiUrl: `https://youmed.test.davido.vn/api`,
      adminApiUrl: `https://youmed.test.davido.vn/admin/api`,
    };
    break;
}

export const environment = {
  production: true,
  useHash: true,
  api: {
    baseUrl: './',
    refreshTokenEnabled: false,
    refreshTokenType: 'auth-refresh',
  },
  url: listUrlApi?.url,
  apiUrl: listUrlApi?.apiUrl,
  adminApiUrl: listUrlApi?.adminApiUrl,
};
