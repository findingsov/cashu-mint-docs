---
sidebar_position: 5
---
# Set Up Auth and Auth Provider 

## Configure Mint for Authentication

Make sure your mint configuration is set up for authentication. In your .env or config.toml file, you need to make sure the URL for discovery is set correctly for your realm name.

cdk config.toml
```
# [auth]
# openid_discovery = "http://127.0.0.1:8080/realms/<realm name, e.g cdk>/.well-known/openid-configuration"
# openid_client_id = "cashu-client"
# mint_max_bat=50
# enabled_mint=true
# enabled_melt=true
# enabled_swap=true
# enabled_check_mint_quote=true
# enabled_check_melt_quote=true
# enabled_restore=true
```
nutshell .env file
```
# Turn on authentication
# MINT_REQUIRE_AUTH=TRUE
# OpenID Connect discovery URL of the authentication provider
# MINT_AUTH_OICD_DISCOVERY_URL=http://localhost:8080/realms/<realm name, e.g nutshell>/.well-known/openid-configuration
# MINT_AUTH_OICD_CLIENT_ID=cashu-client
# Number of authentication attempts allowed per minute per user
# MINT_AUTH_RATE_LIMIT_PER_MINUTE=5
# Maximum number of blind auth tokens per authentication request
# MINT_AUTH_MAX_BLIND_TOKENS=100
```

## Auth Provider Setup

The best practice is to set up your auth provider on a separate server (or even cluster of servers).


The OIDC service must be setup as follows:
* No client secret: The OIDC service MUST NOT use a client secret.
* Authorization code flow: The OIDC service MUST enable the authorization code flow with PKCE for public clients, so that an authorization code can be exchanged for an access token and a refresh token.
* Signature algorithm: The OIDC service MUST support at least one of the two asymmetric JWS signature algorithms for access token and ID token signatures: ES256 and RS256.
* Wallet redirect URLs: To support the OpenID Connect Authorization Code flow, the OIDC service MUST allow redirect URLs that correspond to the wallets it wants to support. You can find a list of common redirect URLs for well-known Cashu wallets here.
* Localhost redirect URL: The OIDC service MUST also allow redirects to the URL http://localhost:33388/callback.
* Authentication flows: Although, strictly speaking, this NUT does not restrict the OpenID Connect grant types that can be used to obtain a CAT, it is recommended to enable at least the authorization_code (Authorization Code) flow and the urn:ietf:params:oauth:grant-type:device_code (Device Code) flow in the grant_types_supported field of the openid_discovery configuration. The password (Resource Owner Password Credentials, ROPC) flow SHOULD NOT be used as it requires handling the user's credentials in the wallet application.


## Keycloak Setup

### Set Up Docker
1. Make sure you have docker and docker-compose installed. 

2. Locate the docker-compose.yml file and .env file in your keycloak folder.

3. Set up .env file with passwords, etc.
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

3. Edit the provided docker-compose.yml for any additional setup you may need (add vars to .env file), such as:
```
KC_HOSTNAME_ADMIN_URL=""
KC_HOSTNAME_URL=""
KC_CORS: "true"
KC_CORS_ORIGINS: "*"
KC_CORS_ALLOW_METHODS: "GET,POST,OPTIONS,PUT,DELETE"
```

### Start and Stop Keycloak
To start, from the keycloak directory:
```
sudo docker-compose up -d
docker ps
```

To stop:
```
sudo docker-compose down
```

## Keycloak Admin Setup

### Realm and Client Setup
Access the Keycloak Admin Console at the Keycloak admin URL:
1. Click the Keycloak drop-down in upper left, and Create Realm for the mint. e.g., nutshell, cdk  
2. Select Clients and set 
    * Client type = OpenID Connect 
    * Client ID = cashu-client 
3. In the Client settings, configure:
* Client Authentication = OFF 
(This configures the type as public access and automatically ensures no client secret is used).
* Standard Flow Enabled = ON 
(This is the authorization code flow).
* Implicit Flow Enabled = OFF 
(Unless you explicitly need the Implicit Flow).
* Direct Access Grants Enabled = OFF 
(Unless you want users to authenticate via resource owner password credentials).
* Service Accounts Enabled = OFF 
(This is for confidential clients needing a service account).
* Device Authentication Grant : ON
4. For Web-based clients, provide proper root, home, and redirect URLs. Set a redirect URL of http://localhost:33388/callback.


### User Setup

Define users and their initial passwords.
1. Select the Users tab and Create User
2. After User creatiion, select the Credentials tab and Set password.  Choose Temporary=On. 