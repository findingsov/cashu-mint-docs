---
sidebar_position: 2
---
# Getting Started

This guide is currently a generic best practice document that applies across most of the existing mint implementations. 


## Knowledge Requirements

To run a mint safely and seccurely, and protect your mint's users, you should have knowledge of the following:

* Networking
* Security
* Care and Feeding of Your Lightning Node

## Hardware Requirements

Mints are pretty lightweight in their systm requirements.  However, Docker and Keycloak can consume resources, and should be run on a separate machine.

## Choosing your Lightning Backend

Cashu works with Bitcoin, and particularly with Lightning. 
To mint (create) and melt (destroy) ecash, you need to plug your mint into a Lightning backend.

### Best Practice: Run Your Own Lightning Node
 The best practice is to run your own dedicated Lightning node, such as LND or CLN. Running a Lightning node comes with its own responsibilities. 
    *  make sure that you properly back up your seed phrase
    * regularly export your static channel backups, 
    * ideally, have a copy of your node's database in case of a catastrophic incident. 

These are all things that apply to Lightning nodes, with or without ecash. You should be aware of these things whenever you run a Lightning node. This will help to assume your setup is safe and you have enough experience keeping your node happy and alive.

### Other Custodial Backends
Mints also work with custodial backends. This is great for getting started quickly, to experiment or to run a mint for a temporary event, such as a conference. Supported custodial back-ends may include a Strike or Blink account, or use of an LNbits wallet of your choice to hook it up to a  mint.


### Care of Lightning Node
Whichever method you choose, you absolutely need to make sure that the balance on your Lightning backend always exceeds the amount of ecash that you have issued. 

Do not, under any circumstance, repeat the same mistakes of the banking system by running a fractional reserve mint. You will run into terrible issues once your users start making Lightning payments and withdrawing their ecash. 

It's best if you can provide up-to-date proof of reserves reports to your users combined with a proof of liabilities for the ecash you're issuing (see ["A Proof of Liabilities Scheme for Ecash Mints"](https://gist.github.com/callebtc/ed5228d1d8cbaade0104db5d1cf63939) for more on this).





