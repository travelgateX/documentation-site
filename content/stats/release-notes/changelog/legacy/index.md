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

## 2019-08-02
{{% release-notes-container type="a"%}}
- Added a hard limit when an API's response lasts more than 60 seconds. When application hard limit is surpassed, microservice will response with a graceful response (http_status code = 403).
{{% /release-notes-container %}}

## 2019-07-22
{{% release-notes-container type="a"%}}
- Added new input object `timeRange` that improves the time filters providing both a relative time filter and an absolute time filter.
{{% /release-notes-container %}}

## 2019-06-12
{{% release-notes-container type="f"%}}
- Fix an error that was causing to have empty `operations` in the response.
{{% /release-notes-container %}}

## 2019-06-03
{{% release-notes-container type="a"%}}
- New scalar type Int64 has been created. `hits` in `StatsData`, `totalHits` in `OperationDetailed` and `hits` in `StatsInfo` have changed its type to this new scalar.
{{% /release-notes-container %}}

## 2019-05-30
{{% release-notes-container type="f"%}}
- Now `adviceMessage`'s from others TravelgateX products are returned as `external` in owns `adviceMessage`'s.
{{% /release-notes-container %}}

## 2019-05-23
{{% release-notes-container type="f"%}}
- Now `type` of `StatsInfo`returns the correct value.
{{% /release-notes-container %}}

## 2019-05-22
{{% release-notes-container type="a"%}}
- Now stats are available from 01/01/2018. Requests by `accessCode` are available only from 15/05/2019.
{{% /release-notes-container %}}

## 2019-05-14
{{% release-notes-container type="f"%}}
- Fix an error that was causing `accessCode` not being stored successfully.
- Fix an error to show 100 assets per `errorCode` and per `operation`.
{{% /release-notes-container %}}

## 2019-05-03
{{% release-notes-container type="f"%}}
- Fix an error that was causing that assets of HUB error types were NULL.
{{% /release-notes-container %}}

## 2019-05-02

{{% release-notes-container type="f"%}}
- Input field `retrieveAssets` made optional. `false` by default.
{{% /release-notes-container %}}

## 2019-04-30

{{% release-notes-container type="a"%}}
- New required input field `retrieveAssets` added to indicate if assets are needed.
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Assets returned limited to 100 to avoid too big responses. This limitation makes sense since the main objective is not to access all the asset nodes.
{{% /release-notes-container %}}

## 2019-04-23
{{% release-notes-container type="f"%}}
- Fix an error building internal queries when Quote/Booking and Other are requested.
{{% /release-notes-container %}}

## 2019-04-11
{{% release-notes-container type="f"%}}
- New input field `owner` added to allow filter by organization.
{{% /release-notes-container %}}

## 2019-04-08
{{% release-notes-container type="a"%}}
- `label` in `OperationData` added. Reason: Share the operation code in English.
- `hits` in `StatsData` added. Reason: Share a summary of hits at `StatsData` level.
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- Internal queries to Stats DB optimized.
{{% /release-notes-container %}}

## 2019-04-03
{{% release-notes-container type="a"%}}
- `trafficType` in `OperationDetailed` added. Reason: To differentiate existent traffic types: BASIC, SPEED, OPTIMIZED.
{{% /release-notes-container %}}

## 2019-03-14

{{% release-notes-container type="a"%}}
* Stats [product documentation](https://docs.travelgatex.com/stats/)
{{% /release-notes-container %}}
