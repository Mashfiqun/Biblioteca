export const oktaConfig = {
    clientId: '0oam2b04qd2tbJqA75d7',
    issuer: 'https://dev-63741562.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
    useClassicEngine: true,

}