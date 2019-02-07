+++
title = "Types of Datasets"
pagetitle = "Types of Datasets"
description = "Insights-X Publication formats"
icon = "fa-list-alt"
weight = 1
alwaysopen = false
+++

# Types of Datasets

This page describes the way Insights-X share data with customers.

As a customer you can access Insights-X data via [BigQuery Dataset](https://cloud.google.com/bigquery/docs/dataset-metadata) or as [Exported Table Data to Cloud Storage](https://cloud.google.com/storage/docs/)

# BigQuery

BigQuery is a “big data” SQL store invented by Google. Many massive datasets, like all the code in GitHub and the complete history of the Bitcoin blockchain, are available publically through the Google BigQuery Datasets initiative.

BigQuery Datasets are multi-terabyte datasets hosted on Google’s servers. You interact with the dataset by writing SQL fetch queries within either the [web UI](https://cloud.google.com/bigquery/docs/quickstarts/quickstart-web-ui),  [Command-line tool](https://cloud.google.com/bigquery/docs/bq-command-line-tool) or any [client library](https://cloud.google.com/bigquery/docs/quickstarts/quickstart-client-libraries). 

Some resources for understanding how to use BigQuery:

- [BigQuery overview](https://cloud.google.com/bigquery/) 

To get started using a BigQuery dataset, Insights-X will allow permission to your own project so you can start querying datasets. If you intend to go beyond the included quotas you must also enable billing.

# Exported Data to Cloud Storage

Up to 1 GB of table data can be exported into a single file.

When exported data is in JSON format, INT64 (integer) data types are encoded as JSON strings to preserve 64-bit precision when the data is read by other systems.


## CSVs

The simplest file type available on Insights-X is the “Comma-Separated List”, or CSV, for tabular data. A CSV representation of a booking list with a header row, for example, looks like this:

| client\_id | provider\_id | check\_in | 
| :--------- | :----------- | :-------- | 
| clientA | providerX |  2019-01-13 00:00:00 UTC |
| clientB | providerX |  2019-01-15 00:00:00 UTC |

CSV format does not support nested and repeated data.


## JSON

While CSV is the most common file format for “flat” data, JSON is the most common file format for “tree-like” data that potentially has multiple layers, like the branches on a tree:

```json
{
    "bookings": [
      {
            "client_id": "clientA",
            "provider_id": "providerX",
            "check_in": "2019-01-13 00:00:00 UTC"
       },
       {
            "client_id": "clientB",
            "provider_id": "providerX",
            "check_in": "2019-01-15 00:00:00 UTC"
       }
       ]
}
```
  
JSON format supports nested and repeated data.

## AVRO

Avro™ is an open source project that provides data serialization and data exchange services for Apache™ Hadoop®. ... Avro stores the data definition in JSON format making it easy to read and interpret, the data itself is stored in binary format making it compact and efficient.

AVRO format supports nested and repeated data.
