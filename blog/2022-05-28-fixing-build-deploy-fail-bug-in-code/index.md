---
slug: build-fail-bug-fix
title: Bug Fix 1 - Build Fail, Broken Link
authors:
  - name: Asia Lakay
    title: Content Creator / Software Engineer
    url: https://asialakay.net
    image_url: https://avatars.githubusercontent.com/u/66960776?v=4

tags: [bug fix, deployment, ci/cd]
---


![Build Failed Status](./build-failed.jpeg)

![Build Fail](./build-fail.jpeg)

![Bug Details](./bug-details.jpeg)

Found the bug!

![Bug Found](./bug-found.jpeg)

Issues are 1) there is a hashtag symbol where there should be a forward slash, 2) front matter slug has been changed, but mainly 3) the **url is pointing to the old relative url slug that is shipped with the docusaurus default dev environment**.

Bug is not fixed by pointing to resolved 
![Incorrect Link Address](./incorrect-link-address.jpeg)

Here's how the bug was fixed. The link was changed to a point to info about Front Matter within the docusaurus developer reference documentation.
![Correct Link Address](./correct-link-address.jpg)

Gitub Deployment Status
![Github Deployment Status](./github-active.jpg)

Vercel Production Build Status (Ready = SUCCESS)
![Vercel Production Status](./vercel-build.jpg)



