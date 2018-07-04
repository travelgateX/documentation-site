+++
title = "Writting release notes"
pagetitle = ""
description = "Release notes, document with the changelog"
icon = "fa-info-circle"
weight = 1
+++


This document assists on write release notes with the changelog of products. 

- [General Principles](#general-principles)
    - [What is a release note?](#what-is-a-release-note)
    - [Why keep a release note?](#why-keep-a-release-note)
    - [Who needs a release note?](#who-needs-a-release-note)
- [How do I make a good release note?](#how-do-i-make-a-good-release-note)
    - [Guiding Principles](#guiding-principles)
    - [Types of changes](#types-of-changes)
- [How can I reduce the effort required to maintain a release notes document?](#how-can-i-reduce-the-effort-required-to-maintain-a-release-notes-document)
- [Can release notes be bad?](#can-release-notes-be-bad)
    - [Do not document commit log diffs](#do-not-document-commit-log-diffs)
    - [Do not ignore deprecations](#do-not-ignore-deprecations)
    - [Avoid confusing dates](#avoid-confusing-dates)
- [Release notes example](#release-notes-example)
- [Writing resources](#writing-resources)


## General Principles

### What is a release note?
A release note is a file which contains a curated, chronologically ordered list of notable changes for each version of a project.

### Why keep a release note?
To make it easier for users and contributors to see precisely what notable changes have been made on the project.

### Who needs a release note?
People do. Whether consumers or developers, the end users of software are human beings who care about what's in the software. When the software changes, people want to know why and how.


## How do I make a good release note?
### Guiding Principles
- Release notes are for humans, not machines.
- The same types of changes should be grouped.
- Versions and sections should be linkable.
- The latest changes comes first.
- The release date of each is displayed.

### Types of changes
- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

## How can I reduce the effort required to maintain a release notes document?
Keep an Unreleased section at the top to track upcoming changes.

This serves two purposes:
- People can see what changes they might expect in upcoming releases
- At release time, you can move the Unreleased section changes into a new release version section.

## Can release notes be bad?
Yes. Here are a few ways they can be less than useful.

### Do not document commit log diffs
Using commit log diffs as release notes is a bad idea: they're full of noise. Things like merge commits, commits with obscure titles, documentation changes, etc.

The purpose of a commit is to document a step in the evolution of the source code. Some projects clean up commits, some don't.

The purpose of a release note entry is to document the noteworthy difference, often across multiple commits, to communicate them clearly to end users.

### Do not ignore deprecations
When people upgrade from one version to another, it should be painfully clear when something will break. It should be possible to upgrade to a version that lists deprecations, remove what's deprecated, then upgrade to the version where the deprecations become removals.

If you do nothing else, list deprecations, removals, and any breaking changes in your release note.

### Avoid confusing dates
Regional date formats vary throughout the world and it's often difficult to find a human-friendly date format that feels intuitive to everyone. The advantage of dates formatted like `2017-07-17` is that they follow the order of largest to smallest units: year, month, and day. This format also doesn't overlap in ambiguous ways with other date formats, unlike some regional formats that switch the position of month and day numbers. These reasons, and the fact this date format is an [ISO standard](https://www.iso.org/iso-8601-date-and-time-format.html), are why it is the recommended date format for changelog entries.


## Release notes example

```markdown
# release note
All notable changes to this project will be documented in this file.

## [Unreleased]

## 2017-06-20
### Added
- New visual identity by @tylerfortune8.
- Version navigation.
- Links to latest released version in previous versions.
- "Why keep a release note?" section.
- "How do I make a release note?" section.

### Changed
- Start versioning based on the current English version at 0.3.0 to help
translation authors keep things up-to-date.
- Rewrite "What makes unicorns cry?" section.

### Removed
- Section about "release note" vs "release note".

## 2015-12-03
### Added
- RU translation.
- pt-BR translation.
- es-ES translation.

## 2015-10-06
### Added
- Answer "Should you ever rewrite a change log?".

### Changed
- Improve argument against commit logs.
- Start following [SemVer](http://semver.org) properly.
```

## Writing resources

Learn more about changelogs and release notes.

* [Keep a changelog](https://keepachangelog.com/en/1.0.0/)