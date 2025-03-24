---
sidebar_position: 5
---
# Monitoring Your Mint 




## Periodically Check Login Attempts Jail
Regularly check login attempts
```
cat /var/log/auth.log
```
View logs
```
tail -f /var/log/fail2ban.log
```
Check Jails
```
fail2ban-client status
```