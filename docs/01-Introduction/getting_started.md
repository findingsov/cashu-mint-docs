---
sidebar_position: 2
---
# Getting Started

This guide is currently a generic best practice document that applies across most of the existing mint implementations. 


## Knowledge Requirements

To run a mint safely and seccurely, and protect your mint's users, you should have knowledge of the following:

* Networking
* Security
* Lightning Nodes

## Hardware Requirements

Mints are pretty lightweight in their systm requirements.  However, docker and keycloak can consume resources, and should be run on a separate machine.

## Choosing your Lightning Backend

Cashu works with Bitcoin, and particularly with Lightning. In order to be able to mint (create) and melt (destroy) ecash, you need to plug your mint into a Lightning backend. The best practice is to run your own dedicated Lightning node, such as LND or CLN. Running a Lightning node comes with its own responsibilities. You need to make sure that you properly back up your seed phrase, regularly export your static channel backups, and, ideally, have a copy of your node's database in case of a catastrophic incident. These are all things that apply to Lightning nodes, with or without ecash. You should be aware of these things whenever you run a Lightning node, so I will assume that your setup is safe and you have enough experience keeping your node happy and alive.

Nutshell also works with custodial backends. This is great for getting started quickly, to experiment or to run a mint for a temporary event, such as a conference. Currently, you can use your Strike or Blink account, or use an LNbits wallet of your choice to hook it up to a Nutshell mint.

Whichever method you choose, you absolutely need to make sure that the balance on your Lightning backend always exceeds the amount of ecash that you have issued. Do not, under any circumstance, repeat the same mistakes of the banking system by running a fractional reserve mint. You will run into terrible issues once your users start making Lightning payments and withdrawing their ecash. It's best if you can provide up-to-date proof of reserves reports to your users combined with a proof of liabilities for the ecash you're issuing (see here for more on this).





