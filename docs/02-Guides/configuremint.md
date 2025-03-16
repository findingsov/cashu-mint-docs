---
sidebar_position: 1
---

# Configuring Your Mint

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

### Set Additional URLs in Mint Info

If you run a mint in production, you should think about DNS, and get multiple URLs.  You can then advertise these in the urls setting on mint info. 

## Limit Mint, Melt and Max Balance Amounts


Although you can't know what the balance of each individual user is (and therefore can't limit how much ecash a single user can accumulate), you can set limits for each transaction size in the mint. This makes it a lot harder to abuse a mint and do nasty things with it. It is strongly advised to set strict limits on transaction sizes so that it's clear that a mint should only be used for small payments for example, if that is your use case. Y

Maximum mint and melt amount
You can individually set the maximum amount for any operation that creates (mints) or destroys (melts) ecash on your mint. That way, you can make sure that only small transactions are possible.

Maximum balance of your mint
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
# Use to allow only peg-out to LN
# MINT_PEG_OUT_ONLY=FALSE
```
In cdk-mintd config.toml file:
```
#CDK Limits
# min_mint=1
# max_mint=500000
# min_melt=1
# max_melt=500000
```







