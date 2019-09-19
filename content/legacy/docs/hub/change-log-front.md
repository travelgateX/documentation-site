
+++
title = "Changelog"
pagetitle = "Hub-Front changelog"
description = "Contains an accurated, chronologically-ordered list of notable changes"
weight = 2
icon="fa-exchange"
alwaysopen = false
hidden = false
tags = ["hub-changelog"]
outputs = [ "HTML", "RSS"]
+++
​
## 2019-09-12
​
{{% release-notes-container type="a"%}}
* Added log system to detect clients that not use Gzip.
* Added code to send requests to the new serviceIntegration.
* Added stats to check the requests of the clients.
* Added header TGX-Audit when audit is enabled by database.
* Added key in consul to set an environment as down. Usefull for deploys.
{{% /release-notes-container %}}

{{% release-notes-container type="c"%}}
* Improve the cache of authorization permisions. This reduces the response time when caché is expired and must be reloaded.
* TGX Headers are bypassed in lowerCase
{{% /release-notes-container %}}