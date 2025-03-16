---
sidebar_position: 2
---
# Plan to Rotate Keysets

Every ecash transaction your users make will leave entries in your database so that your mint can remember which ecash has been spent before. That means that, in the most basic case, your database's size will grow indefinitely, which is obviously not a sustainable state of affairs. This growth is fairly small and I have seen a Nutshell database grow to a mere size of a few dozen MB over a course of more than a year of usage. 

However, we would like to be able to use ecash until the heat death of the universe, and that's why there is a nice strategy to keep the size of your database constant over a long time which is keyset rotations. 

## About Keysets
Every mint has a private key from which it derives its keysets. A keyset is the set of private keys used to sign the ecash. Inside a Cashu token, you can see the fingerprint (or ID) of the keyset with which it was signed.


As mentioned in ["A Proof of Liabilities Scheme for Ecash Mints"](https://gist.github.com/callebtc/ed5228d1d8cbaade0104db5d1cf63939), we can keep the size of the database constant by rotating to a new keyset epoch once every few months or a year. A keyset rotation will create a new keyset and new ecash signed with this new keyset will have a different keyset ID. You can imagine it like opening a new ecash counter from which users are served from now on. Ecash from an older keysets will still be accepted but only be exchanged for ecash from the new keyset. That way, ecash from the old epoch will slowly be taken out of circulation (once it is spent) and after a while, there will be only ecash from the new epoch. Once all (or almost all, you can't force dead users to spend their ecash) of the old ecash has been spent and replaced by ecash from the new epoch, you can delete that part of the database that remembered the ecash from the old epoch (to prevent its double spending). That way, a mint operator can regularly reduce the size of the mint's database which allows you to run the mint forever.

## Rotating Keysets
To rotate to a new keyset in Nutshell (version 0.15.3 as of this writing), you increment the derivation path in the config of the mint and restart it. 

To rotate keysets, there are currently two steps:
1. You would change the derivation from m/0'/0'/0' to m/0'/0'/1' to rotate to the new keyset. 

2. To prevent minting of ecash from an old keyset, you also need to set that keyset inactive.  Currently, this is only possible manually by finding the keyset in the mint's database, and marking the column active as false. 

Now, only ecash from the new epoch (m/0'/0'/1') will be allowed to be minted and all ecash from the old epoch (m/0'/0'/0') will be slowly taken out of circulation. 

There is currently also no automated way to crop your database and get rid of the old spent table in Nutshell so this step also needs to be done manually as of this writing. However, since this is a vital part of running a sustainable mint, all this will be automated soon such that manual intervention with the database won't be necessary anymore and all of this will simply be possible by changing the configuration of the mint. More updates on this soon. For now, I'll leave you with an outlook and a clear path for an automated solution, and the option to do it manually in case it will be necessary in the short-term.


