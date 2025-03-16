"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[514],{2031:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"Guides/limitingaccessmint","title":"Limit Access to your Mint","description":"An ecash mint works without accounts. Accounts are terrible for privacy but they allow you to do one good thing which is to rate-limit the requests of your users. As we\'ve seen, a mint\'s database can only grow if we don\'t regularly rotate keys and crop the database. This poses an attack vector in which users can spend ecash to themselves forever and slowly force the mint\'s database to grow relatively quickly. This is not nice but it can happen. There are several mitigation strategies for this.","source":"@site/docs/02-Guides/limitingaccessmint.md","sourceDirName":"02-Guides","slug":"/Guides/limitingaccessmint","permalink":"/cashu-mint-docs/docs/Guides/limitingaccessmint","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Configuring Your Mint","permalink":"/cashu-mint-docs/docs/Guides/configuremint"},"next":{"title":"Protecting Your Server","permalink":"/cashu-mint-docs/docs/Guides/protectingserver"}}');var o=s(4848),a=s(8453);const n={sidebar_position:1},r="Limit Access to your Mint",c={},l=[{value:"Set Rate Limits",id:"set-rate-limits",level:2},{value:"Set Fees",id:"set-fees",level:2},{value:"Set Up Authentication",id:"set-up-authentication",level:2}];function u(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"limit-access-to-your-mint",children:"Limit Access to your Mint"})}),"\n",(0,o.jsx)(t.p,{children:"An ecash mint works without accounts. Accounts are terrible for privacy but they allow you to do one good thing which is to rate-limit the requests of your users. As we've seen, a mint's database can only grow if we don't regularly rotate keys and crop the database. This poses an attack vector in which users can spend ecash to themselves forever and slowly force the mint's database to grow relatively quickly. This is not nice but it can happen. There are several mitigation strategies for this."}),"\n",(0,o.jsx)(t.h2,{id:"set-rate-limits",children:"Set Rate Limits"}),"\n",(0,o.jsx)(t.p,{children:"Solution 1: Rate limiting\nThis is the simplest solution to make sure that your mint won't be subject to a denial of service attack. Nutshell has a very basic IP-based rate limiter built in for reason which you can activate using the configuration. The built-in rate limiter allows you to limit the number of requests that can come from an IP for requests that do not grow the database (like a check for a token state, or a mint info request) and for transactions that do grow the database separately. You can use the default values in the config for this or choose values you prefer. Note: In order to be able to rate limit access per IP address, Nutshell needs to be able to see the IP address of the requests. Some reverse proxies strip away the IP from the requests, so make sure that your reverse proxy does not hide the IP from Nutshell. You can verify this by looking at the activity logs of Nutshell and checking whether you see the public IP of the incoming requests."}),"\n",(0,o.jsx)(t.p,{children:"An alternative rate limiter that works great is fail2ban which you can use if you run Nutshell as a systemd service or as a standalone application. I have included a fail2ban config in the supplementary material at the bottom of this document that works nicely with Nutshell when run as a systemd service."}),"\n",(0,o.jsx)(t.h2,{id:"set-fees",children:"Set Fees"}),"\n",(0,o.jsx)(t.p,{children:"Solution 2: Fees (outlook)\nWe are currently working on an alternative and more sustainable solution to this problem which is to require users to pay a small fee for every ecash transaction they make. As we know from how Bitcoin was designed, this is the only solution that works for systems with privacy. At the time of this writing (May 2024), the Cashu protocol does not support fees yet. Once we do support fees, users won't be able to spend their ecash to themselves indefinitely and this denial of service attack won't be possible anymore."}),"\n",(0,o.jsx)(t.h2,{id:"set-up-authentication",children:"Set Up Authentication"}),"\n",(0,o.jsx)(t.p,{children:"Solution 3: Accounts (outlook)\nAs I've said before, accounts are terrible for privacy but they allow you to rate limit your users. The Cashu protocol will also support accounts at some point and we're currently working on the protocol specifications for that. This is a requirement many mint operators have expressed since they require to authenticate their users by law or due to other application-specific requirements. Accounts will make it very easy to rate limit requests per user and also ban users that misbehave. This is not ideal from a privacy perspective but it is something that people want, so we're going to build it soon."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>n,x:()=>r});var i=s(6540);const o={},a=i.createContext(o);function n(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);