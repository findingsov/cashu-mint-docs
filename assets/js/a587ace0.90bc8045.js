"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5617],{5861:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"Backups/backingup","title":"Backing Up Your Mint","description":"Store Private Key or Seed (depending on mint)","source":"@site/docs/04-Backups/backingup.md","sourceDirName":"04-Backups","slug":"/Backups/backingup","permalink":"/cashu-mint-docs/docs/Backups/backingup","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Migrating Your Mint","permalink":"/cashu-mint-docs/docs/Setup and Deployment/migration"},"next":{"title":"Limit Access to your Mint","permalink":"/cashu-mint-docs/docs/Security/limitingaccessmint"}}');var o=t(4848),n=t(8453);const i={sidebar_position:5},r="Backing Up Your Mint",c={},d=[{value:"Store Private Key or Seed (depending on mint)",id:"store-private-key-or-seed-depending-on-mint",level:2},{value:"Backup Mint Database",id:"backup-mint-database",level:2},{value:"Loss of Database",id:"loss-of-database",level:2}];function u(e){const s={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.header,{children:(0,o.jsx)(s.h1,{id:"backing-up-your-mint",children:"Backing Up Your Mint"})}),"\n",(0,o.jsx)(s.h2,{id:"store-private-key-or-seed-depending-on-mint",children:"Store Private Key or Seed (depending on mint)"}),"\n",(0,o.jsx)(s.p,{children:"Your private key or seed must be stored safely and resistant to loss."}),"\n",(0,o.jsx)(s.p,{children:"Every ecash mint also has a private key or seed from which it derives its keysets which it uses to blind-sign the ecash. Obviously, you also need to back up this key or seed, the same way you should keep your Bitcoin seed phrase secure in a safe place."}),"\n",(0,o.jsx)(s.h2,{id:"backup-mint-database",children:"Backup Mint Database"}),"\n",(0,o.jsx)(s.p,{children:"Similar to a Lightning node, your ecash mint has a database in which all the spent ecash is stored (and other data as well). You must make sure that this data is safe and is regularly backed up."}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"One recommended  approach is to have database replication using Postgres or to mirror the SQLite database across different disks."}),"\n",(0,o.jsx)(s.li,{children:"It's also useful to have a fault-tolerant RAID storage system. This is a common feature for servers that you can rent today, so make sure that you always have a copy of your database."}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"Additionally, use custom cron jobs that push the mint's database to another server regularly so that you always keep a copy of it off-premise."}),"\n",(0,o.jsx)(s.h2,{id:"loss-of-database",children:"Loss of Database"}),"\n",(0,o.jsx)(s.p,{children:"One interesting quirk about ecash services is that in the case of loss of your database, it won't affect the balances of your users as would be the case for many other services. The ecash is not stored on your server, it is stored on the users's device. What the server stores is all spent ecash. That means that if you lose your database for good, your users would be able to double-spend their ecash. Just to drive this point home: in the case of a fatal loss of data, while for normal services the user's balances would be affected, for ecash, the service provider has a much bigger problem than the users. We think that's a good thing."}),"\n",(0,o.jsx)(s.p,{children:"It's your responsibility to keep everything safe."})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var a=t(6540);const o={},n=a.createContext(o);function i(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);