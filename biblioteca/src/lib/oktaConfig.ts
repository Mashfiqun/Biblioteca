export const oktaConfig = {
    clientId: '0oam27gt58s1nXIee5d7',
    issuer: 'https://dev-63741562.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,

}