+++
title = "Changelog"
pagetitle = "Logging changelog"
description = "Accurated, chronologically-ordered list of notable changes"
weight = 2
icon="fa-exchange"
svgicon="https://media.graphcms.com/kDcxZmKCQx2oLNNfGvSz"
alwaysopen = false
hidden = false
tags = ["products-changelog"]
+++

Easily accessible log of notable changes to Logging


## 2019-07-17
{{% release-notes-container type="a"%}}
- Added a new input object `reference` with two fields `client` and `supplier` from which bookings can be searched.
{{% /release-notes-container %}}

## 2019-07-11
{{% release-notes-container type="a"%}}
- Added a new field `statusType` in `LoggingLegacyData` to retrieve the final status of the transacction.
{{% /release-notes-container %}}

{{% release-notes-container type="a"%}}
- Added a new input field `first` in `LoggingLegacyFilterInput` to be able to change the size of the response. By default up to 100 results will be returned.
{{% /release-notes-container %}}

## 2019-07-10
{{% release-notes-container type="f"%}}
- Fix an error that was causing to download files with empty content. [Issue-49](https://github.com/travelgateX/Issue-tracker/issues/49)
{{% /release-notes-container %}}

## 2019-07-09
{{% release-notes-container type="a"%}}
- Start-up of the Logging service in production
{{% /release-notes-container %}}