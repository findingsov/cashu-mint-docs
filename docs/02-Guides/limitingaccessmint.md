---
sidebar_position: 3
---
# Limit Access to your Mint
An ecash mint works without accounts. Accounts are terrible for privacy but they allow you to do one good thing which is to rate-limit the requests of your users. As we've seen, a mint's database can only grow if we don't regularly rotate keys and crop the database. This poses an attack vector in which users can spend ecash to themselves forever and slowly force the mint's database to grow relatively quickly. This is not nice but it can happen. There are several mitigation strategies for this.


## Set Rate Limits
This is the simplest solution to make sure that your mint won't be subject to a denial of service attack. Nutshell has a very basic IP-based rate limiter built in for reason which you can activate using the configuration. The built-in rate limiter allows you to limit the number of requests that can come from an IP for requests that do not grow the database (like a check for a token state, or a mint info request) and for transactions that do grow the database separately. You can use the default values in the config for this or choose values you prefer. Note: In order to be able to rate limit access per IP address, Nutshell needs to be able to see the IP address of the requests. Some reverse proxies strip away the IP from the requests, so make sure that your reverse proxy does not hide the IP from Nutshell. You can verify this by looking at the activity logs of Nutshell and checking whether you see the public IP of the incoming requests.

An alternative rate limiter that works great is fail2ban which you can use if you run Nutshell as a systemd service or as a standalone application. I have included a fail2ban config in the supplementary material at the bottom of this document that works nicely with Nutshell when run as a systemd service.

## Set Fees
Require users to pay a small fee for every ecash transaction they make. As we know from how Bitcoin was designed, this is the only solution that works for systems with privacy. 


## Set Up Accounts
Accounts are terrible for privacy but they allow you to rate limit your users. The Cashu protocol will also support accounts at some point and we have current protocol specifications [NUT-21](https://github.com/cashubtc/nuts/blob/main/21.md) and [NUT-22](https://github.com/cashubtc/nuts/blob/main/22.md). This is a requirement many mint operators have expressed since they require to authenticate their users by law or due to other application-specific requirements. Accounts will make it very easy to rate limit requests per user and also ban users that misbehave. This is not ideal from a privacy perspective but it is something that people want, so we're going to build it soon.


