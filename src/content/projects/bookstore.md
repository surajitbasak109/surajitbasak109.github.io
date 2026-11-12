---
title: Bookstore
tagline: A bookstore web app built with Laravel 9 and Vue, with fast full-text book search powered by Elasticsearch.
repo: https://github.com/surajitbasak109/bookstore
tech: [PHP, Laravel 9, Vue, Elasticsearch, MySQL]
status: Archived
year: 2023
order: 6
---
<!-- DRAFT: written by Claude from the README and code. Rewrite "Why I built it" in your own words, then delete this comment. -->

## Why I built it

Searching a catalogue with SQL `LIKE` queries gets slow and gives poor results once you have a lot of books: no relevance ranking and no tolerance for typos. I built this project to learn how to add Elasticsearch to a Laravel application properly, from installing and securing the search server to keeping the index in sync with the database.

## How it helps

- **Catalogue management:** manage authors and books behind login.
- **Fast, relevant search** across the catalogue, served by Elasticsearch instead of the database.
- **Step-by-step guide:** the repository walks through setting up Laravel, Vue auth scaffolding and Elasticsearch 8 (including its security settings), so it works as a reference for anyone doing the same.

## Tech highlights

- Laravel 9 with `laravel/ui` Vue authentication scaffolding.
- Elasticsearch 8 running alongside MySQL, used for searching the catalogue.
