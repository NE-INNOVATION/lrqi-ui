
export default {
    oidc: {
      clientId: '0oad1f2wzgsnDrUxi4x6',
      issuer: 'https://dev-113976.okta.com/oauth2/default',
      redirectUri: 'http://localhost:4200/implicit/callback',
      scopes: ['openid', 'profile', 'email'],
      pkce: true
    }
  };