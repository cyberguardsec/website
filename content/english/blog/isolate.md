---
title: "Isolate"
date: 2021-07-03T17:31:07+05:30
author: Sameet Burde
description : "Cybersecurity through isolation."
image_webp: images/blog/isolate.webp
image: images/blog/isolate.jpg
draft: true
---

Human instinct toward security is to isolate. Malicious actors are imprisoned away from society, prized possessions are isolated away into secure vaults. The degree of isolation and security of the vault is directly proportional to the value of the asset and the intensity of the threat to it.

Museums display expensive art however the visitors have to maintain a distance and the asset is constantly monitored. The more expensive the art, the more sophisticated the surveillance technology.

> For an organisation, its most prized possession is the data it stores on its networks. Enterprises, especially the ones who deal with sensitive data, employ dedicated Security Operations Centers (SOC) whose primary task amongst other things is Data Loss Prevention (DLP).

In the mid 90s our school administration wisened up to the fact that computers were the future and students needed to learn how to work them. To this end they invested in a computer lab, the only air-conditioned room in the entire school. It had a LAN with around a dozen i386 / i486 machines that ran DOS and BASIC, and a bunch of wide-eyed geeks, myself included, buzzing just outside its door during lunch breaks.

The lab was run by a middle aged, enthusiastic person by the name of Eric. He loved teaching and indulging his students, walking us through the BASIC programs he had written and allowing us to understand, recreate and improve upon the code. He would greet us during classes with an ever present smile which would remain throughout the session except for one brief moment at the beginning of each session when his face would turn grim.

The lab had a limited number of computers which were shared between students. Hence to prevent loss of work and continuity, each student had to carry her own floppy disk and copy their work on to it at the end of each session. Since the floppy disks were carried outside the lab by the students there was always the threat of them using it on other machines and carrying back viruses into the lab machines. To prevent this, Eric had a single machine not connected to the LAN, with the sole purpose of scanning each disk for viruses before allowing them onto the network. This is the only time he would sit gazing grimly at the monitor looking at the virus scan progress, hoping to not see a positive detection.

The anti-virus program was a detection and remediation solution and could have been installed on every computer in the lab, however for additional safety and better control, Eric used isolation with an air-gapped computer to achieve the result - and this worked wonderfully. He maintained a near perfect record of just a single breach in the entire year.

The breach occured when the antivirus solution could not detect a virus on one of the disks which ended up infecting all the computers on the network. The lab was closed for two days after that and all the machines were formatted and set up again. This was our introduction to the zero-day attack. Since then zero-day exploits have grown in notoriety and isolation technology has also grown in sophistication as a counterpoint to it.

> Isolation technology is mainly aimed at mitigating large attack surfaces.

Any machines or software that accesses the Internet are isolated in the DMZ with Data Centers (DC) placed in a protected environment with limited to no access to the outside world. Any access to machines housing sensitive data is monitored and policy controlled using Privileged Identity / Access Management (PIM / PAM) tools.

Another large attack surface is the browser. All or most endpoints in an organisation have access to the Web through browsers installed on local machines and nearly 80% of the attacks originate from malicious websites loaded into these browsers. Remote Browser Isolation (RBI) tools mitigate such attacks by moving the browser into ephemeral instances on the DMZ, with the endpoints within the local network completely protected from malware.

RBI solutions have evolved over the years with increasingly superior security architecture and a near native browsing experience and has been a mandatory compliance in several countries and regions around the world, and with distributed workplaces becoming the norm, isolation, monitoring and access control solutions will become the core tools in a CISO's arsenal.
