+++
title = "Public changelog example"
pagetitle = "Public changelog example"
description = "Public changelog, to be published at documentation site"
icon = "fa-book"
weight = 3
+++

# Public changelog

On the documentation an Integrations section will be maintained with the respectives changelogs as can be seen [here](/integrations/), all integrations will have his own changelog, integrations will be grouped by lines (hotel, flights, payment).

Changelogs will have a folder per day containing the releases done on that date. Inside an unique index.md will contain all the changes made.

Thus on the public documentation site we'll have (example for guestincomming at hotel line):

* \integrations\hotel\gue\changelog\2000-01-31\index.md
* \integrations\hotel\gue\changelog\2000-02-01\index.md
* \integrations\hotel\gue\changelog\... as folders as needed

This files will be the copies of the content at the Changelog.md that is hosted on the code repository. There will be a single file with the content grouped by date of release as explained [here](/community/integrations-changelog/integration-changelog/).


## index.md structure for a release

the file will have the following structure (this process is planned to be done automatically but a this moment must be handmade):

- **Header**: As shown at the example, only the dates must be updated (date is used 3 times at the header -title, pagetitle and date- plus another time at the body at the title 2)
- **Single release by file**: On each release an index.md file must be created on a folder named as the date of release in iso format, at the file will found a single title 2 with the date so in format iso.
- **Use containers with lists**: Copy all the content related to the release from the Changelog.md keeping the container structure.

## Example of index.md file

```md
+++
title = "2000-01-31"
pagetitle = "2000-01-31"
description = "Contains a chronologically ordered list of notable changes at our website"
weight = 1
icon = "fa-cube"
svgicon = "https://media.graphcms.com/TZIRsCAGSD6uCfBeDhc9"
alwaysopen = false
date = 2000-01-31
hidden = true
tags = ["integration-changelog"]
+++


## 2000-01-31
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

{{%/* release-notes-container type="f" */%}}
- Fix explanation #3
- Fix explanation #2
- Fix explanation #1
- ...
{{%/* /release-notes-container */%}}

```

## Auxiliary index.md at the integration level and at the changelog level

At the previous example:
- \integrations\hotel\gue\changelog\

All the folders need a generic "_index.md" file (with the underscore), so when we create the folder structure for a new integration, we'll need to create two files named "_index.md" with the following structure:


## _index.md at \integrations\line\dll\

```md
+++
title = "dll_name"
pagetitle = "dll_name"
description = "dll_name"
weight = 1
alwaysopen = false
isDirectory = false
icon = "fa-info"
<!-- Optional: you can upload an svg to show the company logo in format svg, you must upload it to the folder \integrations\line\dll\images\ an use the following configuration line: -->
svgicon="/images/custom.svg"
+++

{{%/* custom-children */%}}

```

## _index.md at \integrations\line\dll\changelog\

```md
+++
title = "dll_name changelog"
icon = "fa-exchange"
+++

# DLL Name Changelog
Easily accessible log of notable changes to DLL integration

{{%/* changelog-entry */%}}

```