export class CurrentUserVm {
  access_token?: string;
  refresh_token?: string;
  expires_in?: any;
  refresh_expires_in?: any;
  token_type?: string;
  session_state?: string;
  scope?: string;
  id_token?: string;

  constructor(
    access_token?: string,
    refresh_token?: string,
    expires_in?: any,
    refresh_expires_in?: any,
    token_type?: string,
    session_state?: string,
    scope?: string,
    id_token?: string
  ) {
    this.access_token = access_token;
    this.refresh_token = refresh_token;
    this.expires_in = expires_in;
    this.refresh_expires_in = refresh_expires_in;
    this.token_type = token_type;
    this.session_state = session_state;
    this.scope = scope;
    this.id_token = id_token;
  }
}
