---
title: Aksharkhop (অক্ষরখোপ)
tagline: A Bengali crossword (শব্দছক) builder and solver, with one akshara per cell, auto-fill, word suggestions and shareable puzzles.
repo: https://github.com/surajitbasak109/aksharkhop
demo: https://aksharkhop.vercel.app/
tech: [TypeScript, React, Vite, Vitest, Python]
status: Active
year: 2026
featured: true
order: 1
---
<!-- DRAFT: written by Claude from the README and code. Rewrite "Why I built it" in your own words, then delete this comment. -->

## Why I built it

Crossword tools are built around the Latin alphabet: one letter, one square. Bengali doesn't work that way. A single akshara such as ক্ষ or ম্প is several Unicode characters, so ordinary crossword makers split words in the wrong places. I wanted a tool that understands Bengali script properly, so people can make শব্দছক puzzles as naturally as they would on paper.

## How it helps

- **Puzzle makers** (teachers, magazine editors, hobbyists) can build a grid, write clues and print it, or export it to the Pataparbon app.
- **Solvers** can open a shared link, or the built-in sample, and play in the browser with nothing to install.
- **Word suggestions and auto-fill** come from a large Bengali word list ranked by how common each word is, so filling a grid takes minutes instead of hours.
- **Phonetic typing** lets you type Bengali with a Latin keyboard.

## Tech highlights

- An akshara segmenter ported from Pataparbon's splitter and tested against Pataparbon's own cases, so a word like ক্ষমা splits correctly into ক্ষ | মা.
- A Python pipeline that builds and ranks the word list from several openly licensed sources, keeping track of each source's licence.
- Share links that carry the whole puzzle in the URL, so no server or database is needed.
- A static React and Vite app deployed on Vercel, with deep links handled client-side.
