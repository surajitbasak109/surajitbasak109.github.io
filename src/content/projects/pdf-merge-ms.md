---
title: PDF Merge Microservice
tagline: A small Node.js service that merges uploaded PDF files into one, ready to plug into any app behind an HTTP call.
repo: https://github.com/surajitbasak109/pdf-merge-ms
tech: [Node.js, Express, Multer, pdf-lib]
status: Stable
year: 2026
order: 5
---
<!-- DRAFT: written by Claude from the README and code. Rewrite "Why I built it" in your own words, then delete this comment. -->

## Why I built it

Merging PDFs is a common need, for invoices, reports or documents users upload, but it doesn't belong inside every application. Running it as a separate microservice keeps the main app light, lets the merge work scale on its own, and means any app in any language can use it over HTTP.

## How it helps

- **`POST /merge`** with two or more PDF files returns a single `merged.pdf`.
- **`GET /health`** gives a simple health check for load balancers and container platforms.
- **Sensible limits:** up to 20 files of 25 MB each, so one large request can't overwhelm the service.

## Tech highlights

- Pure JavaScript PDF handling with pdf-lib, so there's no native dependency or Ghostscript to install.
- Uploaded files are always cleaned up afterwards, even when a merge fails, so temporary files don't pile up on disk.
