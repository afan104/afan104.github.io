---
layout: page
title: Pantry Search
description: Go + Gin backend for tracking pantry inventory and searching what you can cook
importance: 3
category: backend
---

A Go + Gin REST API (SQLite storage) for tracking a home pantry: ingredients, quantities, units, and expiry dates. Supports searching the pantry against an ingredient list or a recipe URL to see what's on hand, deducting quantities when a recipe is cooked, and flagging items that are expiring soon or already expired. Includes a unit conversion layer so quantities entered in different units can be compared on a common scale.

**Status:** backend in progress; frontend not yet built.

**Stack:** Go, Gin, SQLite

**Code:** [github.com/afan104/pantry-search](https://github.com/afan104/pantry-search)
