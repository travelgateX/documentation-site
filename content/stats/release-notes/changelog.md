+++
title = "Changelog"
pagetitle = "Stats-X changelog"
description = "Contains an accurated, chronologically-ordered list of notable changes"
weight = 2
icon="fa-exchange"
svgicon="https://media.graphcms.com/kDcxZmKCQx2oLNNfGvSz"
alwaysopen = false
hidden = false
tags = ["products-changelog"]
+++

Easily accessible log of notable changes to Stats-X


## 2019-04-30

{{% release-notes-container type="a"%}}
- Added new required input field `retrieveAssets` to indicate if assets are needed.
{{% /release-notes-container %}}

{{% release-notes-container type="f"%}}
- Assets returned limited to 100 to avoid too big responses. This limitation makes sense since the main objective is not to access to all the asset nodes.
{{% /release-notes-container %}}

## 2019-04-23
{{% release-notes-container type="f"%}}
- Fix an error building internal queries when Quote/Booking and Other are requested.
{{% /release-notes-container %}}

## 2019-04-11
{{% release-notes-container type="f"%}}
- Added new input field `owner` to allow filter by organization.
{{% /release-notes-container %}}

## 2019-04-08
{{% release-notes-container type="a"%}}
- Added `label` in `OperationData`. Reason: Share the operation code in English.
- Added `hits` in `StatsData`. Reason: Share a summary of hits at `StatsData` level.
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
- Internal queries to Stats DB optimized.
{{% /release-notes-container %}}

## 2019-04-03
{{% release-notes-container type="a"%}}
- Added `trafficType` in `OperationDetailed`. Reason: Differentiate existents traffic types: BASIC, SPEED, OPTIMIZED.
{{% /release-notes-container %}}

## 2019-03-14

{{% release-notes-container type="a"%}}
* Stats-X [product documentation](https://docs.travelgatex.com/stats-x/)
{{% /release-notes-container %}}