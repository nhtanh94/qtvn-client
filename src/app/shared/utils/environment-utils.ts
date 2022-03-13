export class Environment {
  static CONST_ENVIRONMENT = {
    TEST: 'test',
    STAGING: 'staging',
    LOCAL: 'localhost',
  };

  // NOTE : CHANGE CONST_ENVIRONMENT,arrDomain for other project
  static getEnvironmentName(): string {
    const arrDomain: string[] = ['test', 'staging', 'localhost'];
    const hostnameArr: string[] = location?.hostname?.split('.');
    hostnameArr.push('youmed.vn');
    arrDomain.push('youmed.vn');
    const domain: string | undefined = hostnameArr.find((x) =>
      arrDomain.includes(x)
    );
    const environmentName: any = arrDomain.find((x) => domain?.includes(x));
    return environmentName;
  }
}
