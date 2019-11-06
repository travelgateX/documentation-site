+++
title = "Integration changelog example"
pagetitle = "Integration changelog example"
description = "Integration changelog, to keep it with the source code"
icon = "fa-file-code-o"
weight = 4
+++

# Integration changelog

Each integration needs a changelog to inform about releases, roll backs and so.

This changelog won't be at the documentation page, and will be kept with the source code repository on a **single file** called **_"Changelog.md"_**.

This file will be copied on the documentation changelog by generating **a folder per day** with a single file called **_"index.md"_**.

Thus on the public documentation site we'll have:

* ...\changelog\2000-01-31\index.md
* ...\changelog\2000-02-01\index.md
* ...\changelog\... as folders as needed

## Changelog.md structure

the file will have the following structure:

- **No header**
- **Grouped by release**: On each release the changelog is grouped under a title 2 with the date in format iso
- **Incremental notation**: Changes not applied yet on a release will be at the top of the file with no title, once published a date title will be written on the top.
- **Use containers with lists**: All the entrances are tretated as a list in a release note container 
- Remmeber that containers can be of type: 
  - `Added` for new features.
  - `Changed` for changes in existing functionality.
  - `Deprecated` for soon-to-be removed features.
  - `Removed` for now removed features.
  - `Fixed` for any bug fixes.
  - `Security` in case of vulnerabilities.
  - Consult more info on release-notes [here](/community/release-notes/)


## Example of Changelog.md file

```md
<!-- NO HEADER NEEDED -->

<!-- UNRELEASED STUFF -->
{{%/* release-notes-container type="a" */%}}
- Addition #3 not applied yet... 
- Addition #2 not applied yet...
- Addition #1 not applied yet...
- ...
{{%/* /release-notes-container */%}}

## 2000-02-01
{{%/* release-notes-container type="a" */%}}
- Addition explanation #3
- Addition explanation #2
- Addition explanation #1
- ...
{{%/* /release-notes-container */%}}

{{%/* release-notes-container type="d" */%}}
- Deprecation explanation #3
- Deprecation explanation #2
- Deprecation explanation #1
- ...
{{%/* /release-notes-container */%}}

## 2000-01-31
{{%/* release-notes-container type="a" */%}}
- Addition explanation #2
- Addition explanation #1
- ...
{{%/* /release-notes-container */%}}

{{%/* release-notes-container type="f" */%}}
- Fix explanation #3
- Fix explanation #2
- Fix explanation #1
- ...
{{%/* /release-notes-container */%}}

...

```
