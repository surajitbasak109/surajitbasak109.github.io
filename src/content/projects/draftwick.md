---
title: Draftwick
tagline: A small, fast desktop editor for quick Markdown and text drafts. Open it, type, and it's saved.
repo: https://github.com/surajitbasak109/draftwick
download: https://github.com/surajitbasak109/draftwick/releases
tech: [Rust, Tauri 2, TypeScript, CodeMirror 6]
status: Active
year: 2026
featured: true
order: 3
cover: /images/projects/draftwick.png
coverAlt: Draftwick showing a Markdown draft, with the draft list on the left and the status bar below
---
<!-- DRAFT: written by Claude from the README and code. Rewrite "Why I built it" in your own words, then delete this comment. -->

## Why I built it

Meeting notes, snippets copied from a chat, a half-written idea: they need a home *right now*, not after picking a file name and a folder. Full editors and notes apps are too heavy for that, and plain text editors forget to save. Draftwick does one job: you open it, type, and your draft is already safe.

## How it helps

- **Type first, name later:** a new draft becomes a file named by date and time the moment you start typing.
- **Autosave:** it saves a few seconds after you stop typing, and again when you switch drafts or close the window.
- **Find things fast:** a sidebar lists your drafts newest first, and `Ctrl+P` jumps to any draft by name.
- **Markdown done well:** code blocks are highlighted in about a hundred languages, you can preview the formatted text, and you can export a draft as a self-contained HTML page.
- **Safe by design:** line endings are kept exactly, deleted drafts go to the system trash, and an emptied draft never overwrites a file that has text.

## Tech highlights

- A Tauri 2 app with a Rust backend for files, settings and menus, and a vanilla TypeScript and CodeMirror 6 frontend. It starts in a moment and the installers are small.
- Settings live in a plain JSON file, and mistakes are underlined as you type.
- Packaged as a `.deb`, an AppImage and a Windows installer, with tests on both the Rust and the TypeScript side.
