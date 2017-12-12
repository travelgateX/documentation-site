+++
title = "Uploading Strategies"
pagetitle = "Getting the data there"
description = "How to Upload data"
weight = 1
alwaysopen = false
+++

## Introduction

There are two ways of uploading data to the platform:

* Secure File Transfer Protocol (SFTP)
* GraphQL `mutation`

### Secure File Transfer Protocol (SFTP)

SFTP, or Secure File Transfer Protocol, is a network protocol that provides completely secure access, transfer, and management of data files programmatically. This protocol is used by the largest organizations in Finance, Technology, and Consulting to transfer data such as Personally Identifiable Information (PII) to ensure it remains 100% secure.

#### Security

To ensure the security of your data, we adhere to the highest standards in data security. The advanced security measures we take include:

* **Password-based** authentication.
* **IP Whitelisting**: We whitelist the IP Addresses you will be accessing your SFTP server from to ensure you, and only you, have access.
* **Anomaly Detection**: To ensure no loss of data, we detect anomalies in your uploads to the SFTP server and warn you when an upload would significantly change your account.
* **Encryption**: Data is encrypted, keeping your information safe and private.

### Setup

To get your FTP Credential Details raise a _customer care request_ in [Jira Service Desk](/getting-started/quickstart/#jira-service-desk).

### Naming Conventions

It's imperative that the file is loaded using a specific name depending on the data being uploaded. **Always** overwrite the last file, only the last file is loaded into the platform. But don't worry, we keep the old files in case we need to revert to an old version. For each file name please see the specific file documentation on this section.

## GraphQL Mutation

{{% alert theme="warning" %}}Coming soon{{% /alert %}}


