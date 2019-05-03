+++
title = "Changelog"
pagetitle = "Stats-X changelog"
description = "Accurated, chronologically-ordered list of notable changes"
weight = 2
icon="fa-exchange"
svgicon="https://media.graphcms.com/kDcxZmKCQx2oLNNfGvSz"
alwaysopen = false
hidden = false
tags = ["products-changelog"]
+++

Easily accessible log of notable changes to Stats-X


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
- `trafficType` in `OperationDetailed` added. Reason: To differentiate existents traffic types: BASIC, SPEED, OPTIMIZED.
{{% /release-notes-container %}}

## 2019-03-14

{{% release-notes-container type="a"%}}
* Stats-X [product documentation](https://docs.travelgatex.com/stats-x/)
{{% /release-notes-container %}}
