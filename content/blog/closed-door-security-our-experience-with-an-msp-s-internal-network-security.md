---
title: "Closed Door Security: Our Experience with an MSP’s Internal Network Security"
description: "At Closed Door Security, we were previously hired by an MSP to conduct an internal assessment of their network. The audit was carried out from an assumed breach..."
publishedAt: "undefined"
author: "Closed Door Security"
category: "cybersecurity"
tags: ["Uncategorised"]
featured: true
image: "/images/blog/closed-door-security-our-experience-with-an-msp-s-internal-network-security-featured.jpg"
---

At Closed Door Security, we were previously hired by an MSP to conduct an internal assessment of their network. The audit was carried out from an assumed breach standpoint where a malicious device was attached to the internal network by an 'employee'.

Our testing led to the discovery that the network was vulnerable, and our tester was able to gain complete control over the domain controllers within 3 hours. The failure in internal security configurations allowed our tester to take advantage of this vulnerability.

This example illustrates the importance of internal security and highlights how it is just as important as securing the perimeter or external parts of the network. Here are some details of how the attack was carried out:

The start of the testing began with some simple enumeration and discovery of services, mainly identifying common services such as SMB and SNMP. We discovered around 10-15 SMB shares, some with Anonymous access allowed, which allowed us to further understand the current network traffic.

We used Responder, a known tool for poisoning LLMNR requests sent around the network. An attacker on the internal network can use this tool to discover NTLM hashes being used to authenticate to services, and can store them for offline cracking. However, the hashes being used in this particular network were NTLMv2. Cracking NTLMv2 is very time-consuming and would waste precious time that could be spent elsewhere.

We used ntlmrelayx to gain access to other servers and services across the network. NTLM relaying allowed attackers to poison requests to services on the network and let the attacker's machine process the authentication for the victim. This process enables an attacker to piggyback off these sessions to gain further access to other servers. If one of the victims of the NTLM relay was an administrator on the server, the attacker could use that level of access to dump credentials from the machine using impacket’s secretsdump module, which reveals credentials that were recently used to access the server. Sometimes these are in plain text, but they also reveal the NTLMv1 version of the password.

We used other tools such as WMIexec or crackmapexec to gain further access to other servers and discover servers the user has administrator access to.

At this point, it is important to note that these attacks could have been prevented by simply enabling and configuring SMB Signing and disabling LLMNR broadcasts for the network. This would make it so that NTLM authentication could only take place on a trusted machine rather than accepting the poisoned request, preventing us from being able to attempt NTLM relaying or sniffing for credentials.

After discovering a number of servers where we had administrator access and further dumping of credentials, we eventually found multiple test accounts that had domain administrator access that were previously used for setting up services on the network. Coupled with the fact that the domain controllers also had Remote Desktop Protocols (RDP) running, we now had complete control over the domain.

At this point, we were able to dump credentials for all users, allowing targeting of third-party companies. We could also install our own CA Certs to decrypt data sent over TLS/SSL, and furthermore, it would be possible to access the infrastructure of clients of the MSP.

In conclusion, it is important not to just think about external network hardening. A WAF and IDS may save you from the outside, but as seen with social engineering attacks over the past years, there’s always someone to click a link, or even worse, someone already inside. Proper internal network security is crucial in ensuring the safety and protection of your organization's assets.
