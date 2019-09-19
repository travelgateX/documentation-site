+++
title = "Legacy changelog"
pagetitle = "Legacy changelog"
description = "Contains an accurated, chronologically-ordered list of notable changes before 19/09/2019"
weight = 2
icon="fa-exchange"
svgicon="https://media.graphcms.com/kDcxZmKCQx2oLNNfGvSz"
alwaysopen = false
hidden = true
date = 2019-09-19
tags = ["products-changelog"]
+++

## 2019-08-30
{{% release-notes-container type="c"%}}
- Now quotes requested by Speed have the same sessionID that quotes requested by the client in order to identify them.
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- Now `reference` filters are arrays in order to be able to request multiple references at once.
{{% /release-notes-container %}}

## 2019-08-22
{{% release-notes-container type="a"%}}
- Added the field `hotel` in the input object `reference` from which bookings can be searched by the hotel's reference.
{{% /release-notes-container %}}

## 2019-08-21
{{% release-notes-container type="a"%}}
- Added new input object `timeRange` that improves the time filters providing both a relative time filter and an absolute time filter.
{{% /release-notes-container %}}

## 2019-08-02
{{% release-notes-container type="a"%}}
- Added a hard limit when an API's response lasts more than 60 seconds. When application hard limit is surpassed, microservice will response with a graceful response (http_status code = 403).
{{% /release-notes-container %}}

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