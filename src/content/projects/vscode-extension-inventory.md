---
title: Extension Inventory for VS Code
tagline: A VS Code extension that exports every installed extension to Excel, CSV or a plain ID list, including details the built-in tools leave out.
repo: https://github.com/surajitbasak109/vscode-extension-inventory
tech: [TypeScript, VS Code API]
status: Active
year: 2026
featured: true
order: 4
---
<!-- DRAFT: written by Claude from the README and code. Rewrite "Why I built it" in your own words, then delete this comment. -->

## Why I built it

VS Code can list your extensions, but only as bare IDs. When you set up a new machine, audit what a team has installed, or check which extensions support Restricted Mode, you want more: who publishes it, whether it's enabled, whether it's verified, and how popular it is. I built this to get that full picture in a spreadsheet with one command.

## How it helps

- **One command:** run *Extension Inventory: Export Installed Extensions…*, pick a format and choose where to save.
- **Rich columns:** version, publisher, categories, Workspace Trust support, whether it's enabled or a pre-release, and when it was installed, plus Marketplace data: verified publisher, rating, installs and the latest version.
- **Three formats:** an Excel workbook for reading, CSV for scripts, and a `.txt` ID list for reinstalling on another machine.
- **Works offline:** you can turn off the Marketplace lookup and export local data only.

## Tech highlights

- Reads each extension's `package.json` and VS Code's install records, then fills in data from the Marketplace.
- The exporter also runs outside VS Code against `~/.vscode/extensions`, which makes it easy to test.
