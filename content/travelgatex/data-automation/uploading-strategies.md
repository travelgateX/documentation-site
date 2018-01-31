+++
title = "Uploading Strategies"
pagetitle = ""
description = "How to Upload data"
weight = 1
alwaysopen = false
+++

## How to upload data to the platform

There are two ways of uploading data to the platform:

* Secure File Transfer Protocol (SFTP)
* GraphQL `mutation`

### Secure File Transfer Protocol (SFTP)

SFTP, or Secure File Transfer Protocol, is a network protocol that provides a secure access, transfer, and management of data files programmatically. This protocol is used by the largest organizations in finance, technology, and consulting to transfer data such as Personally Identifiable Information (PII) to ensure it remains 100% secure.

#### Security

To ensure the security of your data, we adhere to the highest standards in data security. Some of the advanced security measures we take include:

* **Password-based** authentication.
* **IP Whitelisting**: we whitelist the IP Addresses from where you'll be accessing your SFTP server to ensure you are the only one allowed.
* **Anomaly Detection**: to ensure no loss of data, we detect anomalies in your uploads to the SFTP server and immediatly warn you when an upload is about to significantly change your account.
* **Encryption**: data is encrypted, keeping your information safe and private.

### Setup

To get your FTP Credential Details raise a _customer care request_ in [Jira Service Desk](/getting-started/quickstart/#jira-service-desk).

### Naming Conventions

Keep in mind that the file is loaded using a specific name depending on the data being uploaded. **Remember to always** overwrite the last file, because only the last file will be loaded into the platform. If in some case you need to revert to an old version, don't worry because we keep a copy of the old files. For each file name please see the specific file documentation in each product's section.

## GraphQL Mutation

{{% alert theme="warning" %}}Coming soon{{% /alert %}}


