---
sidebar_position: 5
---
# (Coming Soon) Set Up Auth Provider on Separate Server

The best practice is to set up your auth provider on a separate server (or even cluster of servers).


The OIDC service must be setup as follows:
* No client secret: The OIDC service MUST NOT use a client secret.
* Authorization code flow: The OIDC service MUST enable the authorization code flow with PKCE for public clients, so that an authorization code can be exchanged for an access token and a refresh token.
* Signature algorithm: The OIDC service MUST support at least one of the two asymmetric JWS signature algorithms for access token and ID token signatures: ES256 and RS256.
* Wallet redirect URLs: To support the OpenID Connect Authorization Code flow, the OIDC service MUST allow redirect URLs that correspond to the wallets it wants to support. You can find a list of common redirect URLs for well-known Cashu wallets here.
* Localhost redirect URL: The OIDC service MUST also allow redirects to the URL http://localhost:33388/callback.
* Authentication flows: Although, strictly speaking, this NUT does not restrict the OpenID Connect grant types that can be used to obtain a CAT, it is recommended to enable at least the authorization_code (Authorization Code) flow and the urn:ietf:params:oauth:grant-type:device_code (Device Code) flow in the grant_types_supported field of the openid_discovery configuration. The password (Resource Owner Password Credentials, ROPC) flow SHOULD NOT be used as it requires handling the user's credentials in the wallet application.


## Keycloak Setup

Set up .env file with passwords, etc.

```
POSTGRES_DB="keycloakdb"
POSTGRES_USER="keycloakadmin"
POSTGRES_PASSWORD=****
KEYCLOAK_ADMIN="admin"
KEYCLOAK_ADMIN_PASSWORD=*****
KC_HOSTNAME="hostname"
#KC_HOSTNAME=localhost
KC_HOSTNAME_PORT=8080
KC_HOSTNAME_URL="<url>"
```

Edit the provided docker-compose.yml for any additional setup you may need (add vars to .env file), such as:
```
KC_HOSTNAME_ADMIN_URL=""
KC_HOSTNAME_URL=""
KC_CORS: "true"
KC_CORS_ORIGINS: "*"
KC_CORS_ALLOW_METHODS: "GET,POST,OPTIONS,PUT,DELETE"
```

From the keycloak directory:
```
sudo docker-compose up -d
docker ps
```

## Keycloak Setup

For KeyCloak:
1. Keycloak - Create realm for mint. e.g., nutshell
2. Keycloak Steps to Make Public, Enable Authorization Code Flow with PKCE (Minimal Configuration)
Under your realm
a. Go to the Keycloak Admin Console → Clients → select (or create) your client.
b. Under the Settings tab:
        *  Client Authentication=No, or Access Type: set to Public (this automatically ensures no client secret is used).
        * Standard Flow Enabled: ON (this is the authorization code flow).
        * Implicit Flow Enabled: OFF (unless you explicitly need the Implicit Flow).
        * Direct Access Grants Enabled: OFF (unless you want users to authenticate via resource owner password credentials).
        * Service Accounts Enabled: OFF (this is for confidential clients needing a service account).
        * Device Authetication Grant : On
c. In newer Keycloak versions, under Advanced Settings (or similar), find Proof Key for Code Exchange or PKCE Policy:
        * Set PKCE to Required and RS256.
        * “RS256” is the recommended secure hashing method.
d. Click Save.