---
sidebar_position: 1
---

# Configuring Your Mint

## Generate Random Private Key and Back it Up

IMPORTANT:  Set good entropy for your mint private key. 

Generate key:
```bash
openssl rand -hex 32
```

Set key in .env or config.toml file:
```
MINT_PRIVATE_KEY = <openssl rand -hex 32>
```


## Provide Info
The Cashu protocol allows a mint operator to leave contact information with which users can reach out to the operator of a mint. It also allows the operator to send warnings or other notices to the wallets using that mint (assuming that the wallet application is able to display this information). Make sure to add an email address or nostr public key or Twitter handle to your contacts so that your users can reach you if anything goes wrong. You can set your contact information in the Nutshell config file.

### Set Additional URLs in Mint Info



## Limit Mint, Melt and Max Balance Amounts

In Nutshell:
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
In cdk-mintd:
```
#CDK Limits
```



Although you can't know what the balance of each individual user is (and therefore can't limit how much ecash a single user can accumulate), you can set limits for each transaction size in Nutshell. This makes it a lot harder to abuse a mint and do nasty things with it. It is strongly advised to set strict limits on transaction sizes so that it's clear that a mint should only be used for small payments for example, if that is your use case. You have three options in nutshell.

Maximum balance of your mint
This limits the overall risk of your mint by setting an upper limit to the total ecash that can be minted with it. Once your mint has issued so ecash that it reaches this limit, new ecash issuance won't be possible anymore until enough ecash has been destroyed again. This is the best way to make sure your operation does not grow out of control.

Maximum mint and melt amount
You can individually set the maximum amount for any operation that creates (mints) or destroys (melts) ecash on your mint. That way, you can make sure that only small transactions are possible.





