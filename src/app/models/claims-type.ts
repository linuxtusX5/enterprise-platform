export type ClaimsType = {
  readonly email: string;
  readonly iat: number; // iat - (issued at claim): Identifies the issuance time of the JWT
  readonly exp: number; // exp - (expiration time claim): Sets the expiration time on or after which the access token MUST NOT be accepted for processing.
  readonly sub: string; // sub - (subject claim): Identifies the principal that is the subject of the JWT.
};
