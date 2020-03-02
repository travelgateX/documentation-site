+++
title = "Writting release notes"
pagetitle = "Writting release notes"
description = "Release notes, document with the changelog"
icon = "fa-info-circle"
weight = 2
+++

This document assists on write release notes with the changelog of products.

- [Release Notes Organization](#release-notes-organization)
- [How to keep a good changelog](#how-to-keep-a-good-changelog)
  - [General Principles](#general-principles)
    - [What is a changelog?](#what-is-a-changelog)
    - [Why keep a changelog?](#why-keep-a-changelog)
    - [Who needs a changelog?](#who-needs-a-changelog)
- [How do I make a good changelog?](#how-do-i-make-a-good-changelog)
  - [Guiding Principles](#guiding-principles)
  - [Types of changes](#types-of-changes)
- [How can I reduce the effort required to maintain a changelogs document?](#how-can-i-reduce-the-effort-required-to-maintain-a-changelogs-document)
- [Can changelogs be bad?](#can-changelogs-be-bad)
  - [Do not document commit log diffs](#do-not-document-commit-log-diffs)
  - [Do not ignore deprecations](#do-not-ignore-deprecations)
  - [Avoid confusing dates](#avoid-confusing-dates)
- [Changelog example](#changelog-example)
- [Reference table](#reference-table)
- [Writing resources](#writing-resources)

## Release Notes Organization
Release notes includes:

- `Roadmap`: GIT repository where we publish future functionalities and term planned for being released.
- `Changelogs`: Documents containing a chronologically ordered list of notable changes. We have:
    - A general platform changelog with common changes
    - Product specific changelogs hosted at TravelgateX/Release Notes or directly at the Product Space/Release Notes (if exists) for example: https://docs.travelgatex.com/hotel-x/release-notes/changelog/
    - You can find an specific instructions to fill the changelog on this document.
- `GraphQL Schema Changes`: Is a list of recent and upcoming changes to our GraphQL API schema.
- `Deprecated Schema Changes`: Specific list of changes that can break existing queries to the GraphQL API.
- `Deleted Schema Changes`: Contains a changes history of deprecated notes previously announced.

## How to keep a good changelog
### General Principles

#### What is a changelog?
A changelog is a file which contains a curated, chronologically ordered list of notable changes for each version of a project.

#### Why keep a changelog?
To make it easier for users and contributors to see precisely what notable changes have been made on the project.

#### Who needs a changelog?
People do. Whether consumers or developers, the end users of software are human beings who care about what's in the software. When the software changes, people want to know why and how.


## How do I make a good changelog?
### Guiding Principles
- changelogs are for humans, not machines.
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

## How can I reduce the effort required to maintain a changelogs document?
Keep an Unreleased section at the top to track upcoming changes.

This serves two purposes:
- People can see what changes they might expect in upcoming releases
- At release time, you can move the Unreleased section changes into a new release version section.

## Can changelogs be bad?
Yes. Here are a few ways they can be less than useful.

### Do not document commit log diffs
Using commit log diffs as changelogs is a bad idea: they're full of noise. Things like merge commits, commits with obscure titles, documentation changes, etc.

The purpose of a commit is to document a step in the evolution of the source code. Some projects clean up commits, some don't.

The purpose of a changelog entry is to document the noteworthy difference, often across multiple commits, to communicate them clearly to end users.

### Do not ignore deprecations
When people upgrade from one version to another, it should be painfully clear when something will break. It should be possible to upgrade to a version that lists deprecations, remove what's deprecated, then upgrade to the version where the deprecations become removals.

If you do nothing else, list deprecations, removals, and any breaking changes in your changelog.

### Avoid confusing dates
Regional date formats vary throughout the world and it's often difficult to find a human-friendly date format that feels intuitive to everyone. The advantage of dates formatted like `2017-07-17` is that they follow the order of largest to smallest units: year, month, and day. This format also doesn't overlap in ambiguous ways with other date formats, unlike some regional formats that switch the position of month and day numbers. These reasons, and the fact this date format is an [ISO standard](https://www.iso.org/iso-8601-date-and-time-format.html), are why it is the recommended date format for changelog entries.


## Changelog example

```Markdown

# Changelog
All notable changes to this project will be documented in this file.

{{%/* release-notes-container type="u" */%}}
- "How do I make a changelog?" section.
{{%/* /release-notes-container */%}}


## 2017-06-20
{{%/* release-notes-container type="a" */%}}
- New visual identity by @tylerfortune8.
- Version navigation.
- Links to latest released version in previous versions.
- "Why keep a changelog?" section.
{{%/* /release-notes-container */%}}

{{%/* release-notes-container type="c" */%}}
- Start versioning based on the current English version at 0.3.0 to help
translation authors keep things up-to-date.
- Rewrite "What makes unicorns cry?" section.
{{%/* /release-notes-container */%}}


{{%/* release-notes-container type="r" */%}}
- Section about "changelog" vs "change log".
{{%/* /release-notes-container */%}}

## 2015-12-03
{{%/* release-notes-container type="a" */%}}
- RU translation.
- pt-BR translation.
- es-ES translation.
{{%/* /release-notes-container */%}}


## 2015-10-06
{{%/* release-notes-container type="a" */%}}
- Answer "Should you ever rewrite a change log?".
{{%/* /release-notes-container */%}}

{{%/* release-notes-container type="c" */%}}
- Improve argument against commit logs.
- Start following [SemVer](http://semver.org) properly.
{{%/* /release-notes-container */%}}

```
[View an example](https://docs.travelgatex.com/travelgatex/release-notes/breaking-changes/)


## Reference table
| Types of changes | Level | Code |
|-----------|-----|---------------------------------------|
| Added | H3 | {{%/* release-notes-container type="a" */%}} LIST {{%/* / release-notes-container */%}}|
| Changed | H3 | {{%/* release-notes-container type="c" */%}} LIST {{%/* / release-notes-container */%}} |   
| Deprecated | H3 | {{%/* release-notes-container type="d" */%}} LIST {{%/* / release-notes-container */%}} |
| Removed | H3 | {{%/* release-notes-container type="r" */%}} LIST {{%/* / release-notes-container */%}} |   
| Fixed | H3 | {{%/* release-notes-container type="f" */%}} LIST {{%/* / release-notes-container */%}} |   
| Security | H3 | {{%/* release-notes-container type="s" */%}} LIST {{%/* / release-notes-container */%}} |   
| Unreleased |  H2 | {{%/* release-notes-container type="u" */%}} LIST {{%/* / release-notes-container */%}} |   

## Writing resources

Learn more about changelogs and release notes.

* [Keep a changelog](https://keepachangelog.com/en/1.0.0/)
