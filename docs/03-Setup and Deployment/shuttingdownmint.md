---
sidebar_position: 10
---


# Shutting Down a Mint

To shut down a mint, you should:

1. Use the Message of The Day in mint info to notify users of the timing and that the mint will be switched to withdraw only.

2. Configure the Mint to be Peg Out only. 

In the .env file:
```
# Use to allow only peg-out to LN
# MINT_PEG_OUT_ONLY=FALSE
```
3. Communicate the shutdown date and withdrawal requirements periodically, on all channels that you can communiate.