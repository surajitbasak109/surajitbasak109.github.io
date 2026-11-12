---
title: Loopline
tagline: An embeddable feedback widget and changelog for SaaS products. One script tag lets your users suggest ideas, vote on them and read what's new.
repo: https://github.com/surajitbasak109/loopline
demo: https://loopline-khaki.vercel.app
tech: [TypeScript, Next.js, React, Prisma, MariaDB, Auth.js, Tailwind CSS]
status: Active
year: 2026
featured: true
order: 2
---
<!-- DRAFT: written by Claude from the README and code. Rewrite "Why I built it" in your own words, then delete this comment. -->

## Why I built it

Small product teams need to know what their users want, but feedback ends up scattered across emails, support chats and spreadsheets. Hosted feedback tools are often expensive, heavy, or force users to leave the product to post an idea. I wanted something that drops into any website with a single line of HTML and closes the loop: collect ideas, show progress, and announce when something ships.

## How it helps

- **One script tag:** paste a line of HTML into any site. The widget loads asynchronously and doesn't slow the page down.
- **Feedback and voting:** users submit ideas and upvote existing ones, so the most-wanted features rise to the top.
- **Changelog:** draft, preview and publish updates from the dashboard, and users can read them without leaving your page.
- **Dashboard:** manage each request's status and see your stats in one place.

## Tech highlights

- **Multi-tenant by design:** public API keys for the widget and session auth for the dashboard are separate trust contexts, and one organisation's data never reaches another.
- **Vote deduplication** is enforced at the database level, so nobody can vote twice.
- **Rate limiting** by IP and cookie protects the public endpoints from spam.
- **Full auth flow:** sign-up, email verification and password reset, using Auth.js with email delivery.
- Next.js App Router, Prisma 7 on MariaDB, Tailwind v4, strict TypeScript, and CI on GitHub Actions.
