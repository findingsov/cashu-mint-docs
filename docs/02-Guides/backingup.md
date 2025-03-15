---
sidebar_position: 5
---

# Backing Up Your Mint

## Store Private Key
Your private key or seed must be stored safely and resistant to loss.

Every ecash mint also has a private key or seed from which it derives its keysets which it uses to blind-sign the ecash. Obviously, you also need to back up this key, the same way you should keep your Bitcoin seed phrase secure in a safe place.

## Backup Mint Database.

Similar to a Lightning node, your ecash mint has a database in which all the spent ecash is stored (and other data as well). You must make sure that this data is safe and is regularly backed up. My preferred approach is to have database replication using Postgres or to mirror the SQLite database across different disks. It's also useful to have a fault-tolerant RAID storage system. This is a common feature for servers that you can rent today, so make sure that you always have a copy of your database. I additionally use custom cron jobs that push the mint's database to another server regularly so that I always keep a copy of it off-premise.

One interesting quirk about ecash services is that in the case of loss of your database, it won't affect the balances of your users as would be the case for many other services. The ecash is not stored on your server, it is stored on the users's device. What the server stores is all spent ecash. That means that if you lose your database for good, your users would be able to double-spend their ecash. Just to drive this point home: in the case of a fatal loss of data, while for normal services the user's balances would be affected, for ecash, the service provider has a much bigger problem than the users. I think that's a good thing. It's your responsibility to keep everything safe.



