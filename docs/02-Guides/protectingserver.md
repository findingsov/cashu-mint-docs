---
sidebar_position: 3
---

# Protecting Your Server

## Fail2ban
Fail2Ban is an intrusion prevention software framework designed to prevent brute-force attacks by monitoring log files for selected entries and running scripts based on them. 

This is a fail2ban config that works with Nutshell running as a systemd service called nutshell.service.

This is the jail file /etc/fail2ban/jail.d/nutshell.conf

```
[nutshell]
enabled = true
port = http,https
filter = nutshell
backend = systemd[journalflags=1]
journalmatch = _SYSTEMD_UNIT=nutshell.service
bantime = 1d
findtime = 120
maxretry = 60
banaction = ufw
This is the filter file /etc/fail2ban/filter.d/nutshell.conf

[Definition]
failregex = ^.*\| <HOST>:\d* -.*
ignoreregex =
Here is an example systemd service file /etc/systemd/system/nutshell.service for nutshell. Please adjust your directories and user names accordingly. In the example below, nutshell is running in the directory /home/cashu/cashuand is run by the user called cashu.

# Systemd unit for Nutshell
# /etc/systemd/system/nutshell.service

[Unit]
Description=nutshell
Wants=nutshell.service

[Service]
WorkingDirectory=/home/cashu/cashu
ExecStart=/home/cashu/.local/bin/poetry run python -m cashu.mint --port 2338 --host 127.0.0.1
User=cashu
Restart=always
TimeoutSec=120
RestartSec=30
Environment=PYTHONUNBUFFERED=1

[Install]
WantedBy=multi-user.target
```


## Set Up UFW
Uncomplicated Firewall (UFW) is a program designed to manage a netfilter firewall in a simple and easy-to-use manner. I

To allow basic ports:
```bash
sudo apt install ufw -y 
sudo ufw allow ssh
sudo  ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH
sudo ufw allow 80 comment 'Standard Webserver'
sudo ufw allow 443 comment 'SSL Webserver'
sudo ufw enable
```

Check rules
```bash
sudo ufw status
```