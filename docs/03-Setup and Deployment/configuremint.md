---
sidebar_position: 1
---

# Configuring Your Mint

## Configure Mint

You will most likely set up configuration for your mint in either a:
* config.toml
* .env file
* Mint management site (coming soon)

This guide does not cover all the configuration options--it focuses on the most important best practices to set up for your mint.

Note: Review the NUTS that your mint supports, to understand the configuration options you can set up.

## Generate Random Private Key or Seed and Back it Up

IMPORTANT:  Set good entropy for your mint private key. 

Generate key:
```bash
openssl rand -hex 32
```
Or genearate BIP-39 seed phrase.

Set key in .env or seed mnemonic in config.toml file:
```
MINT_PRIVATE_KEY = <openssl rand -hex 32>
```
```
mnemonic = ""
```

## Provide Info


### Set Mint Contact Info
The Cashu protocol allows a mint operator to leave contact information with which users can reach out to the operator of a mint. It also allows the operator to send warnings or other notices to the wallets using that mint (assuming that the wallet application is able to display this information). Make sure to add an email address or nostr public key or Twitter handle to your contacts so that your users can reach you if anything goes wrong. You can set the mint information in your mint's configuration or .env file.

In .env
```
# Mint information
MINT_INFO_NAME="My Cashu mint"
MINT_INFO_DESCRIPTION="The short mint description"
MINT_INFO_DESCRIPTION_LONG="A long mint description that can be a long piece of text."
MINT_INFO_CONTACT=[["email","contact@me.com"], ["twitter","@me"], ["nostr",  "npub..."]]
MINT_INFO_MOTD="Message to users"
MINT_INFO_ICON_URL="https://mint.host/icon.jpg"
```

In config.toml
```
# NOTE: If [mint_management_rpc] is enabled these values will only be used on first start up.
# Further changes must be made through the rpc.
[mint_info]
# name = "cdk-mintd mutiney net mint"
# Hex pubkey of mint
# pubkey = ""
# description = "These are not real sats for testing only"
# description_long = "A longer mint for testing"
# motd = "Hello world"
# icon_url = "https://this-is-a-mint-icon-url.com/icon.png"
# contact_email = "hello@cashu.me"
# Nostr pubkey of mint (Hex)
# contact_nostr_public_key = ""
# tos_url = "https://example.com/terms-of-service"
```


### Set Additional URLs in Mint Info

If you run a mint in production, you should think about DNS, and get multiple URLs.  You can then advertise these in the urls setting on mint info. 

In .env
```
MINT_INFO_URLS=["https://mint.host", "http://mint8gv0sq5ul602uxt2fe0t80e3c2bi9fy0cxedp69v1vat6ruj81wv.onion"]
```


## Lightning Fee Reserve
When you set up your lightning back-end. be sure to set the appropriate lightning fee reserve settings in the configuration.


## Limit Mint, Melt and Max Balance Amounts


Although you can't know what the balance of each individual user is (and therefore can't limit how much ecash a single user can accumulate), you can set limits for each transaction size in the mint. This makes it a lot harder to abuse a mint and do nasty things with it. It is strongly advised to set strict limits on transaction sizes so that it's clear that a mint should only be used for small payments for example, if that is your use case. 

* Maximum mint and melt amount
You can individually set the maximum amount for any operation that creates (mints) or destroys (melts) ecash on your mint. That way, you can make sure that only small transactions are possible.

* Maximum balance of your mint
This limits the overall risk of your mint by setting an upper limit to the total ecash that can be minted with it. Once your mint has issued so ecash that it reaches this limit, new ecash issuance won't be possible anymore until enough ecash has been destroyed again. This is the best way to make sure your operation does not grow out of control.


In Nutshell .env file:
```
# Nutshell Limits
# Max mint balance in satoshis
# MINT_MAX_BALANCE=1000000
# Max peg-in amount in satoshis
# MINT_MAX_PEG_IN=100000
# Max peg-out amount in satoshis
# MINT_MAX_PEG_OUT=100000

```
In cdk-mintd config.toml file:
```
#CDK Limits
# min_mint=1
# max_mint=500000
# min_melt=1
# max_melt=500000
```









