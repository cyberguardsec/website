---
title: "Browsers"
date: 2021-07-17T13:46:14+05:30
author: Sameet Burde
description : "The window into the web."
image_webp: images/blog/browsers.webp
image: images/blog/browsers.jpg
---

The Internet has risen from its humble beginnings to get ensconced into our lives and surroundings, especially its most directly used subset, the Web.

This was possible due to the tools and technologies built to make it simple and easily accessible. These include the Web Server, the HTTP protocol, and the Browser.

> The greatest inventions are those that become oblivious to their consumers, a habit, whose importance is realised only in its absence, even if for a brief period of time. The World Wide Web and its tools and protocols including the Browser are one of these. 

The Browser is our window into the web, the first tool we start as soon as we log into our computers. Its core function is a simple one, to display data in a neatly formatted manner from a location hosted anywhere in the world. This might sound simple however even the most naive and basic browser implementations are complex beasts.

Early browsers such as the very first browser also called WorldWideWeb, along with Lynx and others were text based browsers. The introduction of the `<img>` tag by the developers of Mosaic (which was later renamed to Netscape) added support for inline images to web pages. This began a rapid explosion of website development and web design grew as a practice and profession as web page aesthetics gained importance. The story of the `<img>` tag, which began with an email, is a brief but interesting one linked [here](https://thenextweb.com/news/found-the-email-thread-marc-andreessen-proposed-img-html-tag).

> The power and applicability of technology is dependent on the ease of use and accessibility of the tools used to harness it. The light bulb, the car, the television, these envelope extremely complex tech and simplify it to a point where we now take them for granted. The Browser is another such tool.

The browser is made up of a large number of components, each complex enough to potentially stand on its own as an independent tool, and it goes through a rigorous workflow to eventually display a single web page.

It is made up of parsers for the various formatting languages including HTML and CSS, a JavaScript engine, image, video and audio decoders and players, network communication modules, rendering libraries and so on. (I'll probably do a deeper dive into the data and rendering pipeline in a future article).

A browser inherently is a platform that executes code to display content, and like any good platform it is bound to follow the instructions defined in the code as-is. This turns the browser into an attack surface for unintentional exploits through bugs in code ([XSS attacks](https://owasp.org/www-community/attacks/xss/) for example), or for malicious actors to introduce malware through web pages.

The [Chromium](https://www.chromium.org/) open source project powers a large number of popular browsers including Chrome, Edge, Opera and [so on](https://en.wikipedia.org/wiki/Chromium_%28web_browser%29#Browsers_based_on_Chromium) on desktop and mobile platforms, and forms the WebView which is used to run various hybrid mobile apps based on React Native, Flutter, ionic and Progressive Web Apps (PWA). Chromium is also the engine for [Electron](https://www.electronjs.org/apps) based apps. It isn't limited to frontend applications. [PageSpeed module](https://developers.google.com/speed/pagespeed/module) also based on Chromium, can be plugged into web servers and proxies to optimise web page content for speed.

> Web technologies are everywhere. Chromium is everywhere.

Chromium introduced a multi-process sandboxed design and had great success in minimising the attack surface by minimising the privileges of the code executed when rendering web pages.

To explain briefly, Chromium runs as a multi-process application. At the root is the Browser Process which has the maximum privileges to access all hardware and data resources on a machine. The rendering engine, script engine, image decoders and so on run within the Render Process, which has the least privileges. Every different origin frame is spun off into its own process Render Process thereby preventing web pages from accessing other domain user data also. There are other process like the GPU Process for rendering content to screen and so on.

Even with a complex architecture built for security, like any other software Chromium too can have bugs which can be [exploited](https://blog.theori.io/research/escaping-chrome-sandbox/).

Web development is one of the most widely adopted technology streams and web applications are extremely popular and used across the board. We could use a desktop or mobile application, watch a movie on a streaming platform and we will most probably be using a Web View. 

With this growth and reach the attack surface has grown exponentially. However, the technology to defend against such attacks like DLP, EDR and RBI tools and platforms have also gained in prominence and sophistication and are ready to fight the good fight to secure users and their data.
