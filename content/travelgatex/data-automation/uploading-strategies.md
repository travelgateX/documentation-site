+++
title = "Uploading Strategies"
pagetitle = ""
description = "How to Upload data"
icon = "fa-upload"
weight = 1
alwaysopen = false
+++

## How to upload data to the platform

There are two ways of uploading data to the platform:

* Secure File Transfer Protocol (SFTP)
* GraphQL `mutation`

{{% alert theme="info" %}}We **recommend** continuing to use SFTP at present while we build out more GraphQL resources. 

While you can make your updates via a `mutation`, we have not yet written up resources to show you how to do that. 

If you require these resources immediately, please contact us via <a href="https://knowledge.travelgatex.com//">help center</a> 

### Secure File Transfer Protocol (SFTP)

SFTP, or Secure File Transfer Protocol, is a network protocol that provides secure access, transfer, and management of data files programmatically. This protocol is used by the largest organizations in finance, technology, and consulting to transfer data such as Personally Identifiable Information (PII) to ensure it remains 100% secure.

### Security

To ensure the security of your data, we adhere to the highest standards in data security. Some of the advanced security measures we take include:

* **Password-based** authentication.
* **IP Whitelisting**: We whitelist the IP Addresses from where you'll be accessing your SFTP server to ensure you are the only one allowed to access your account.
* **Anomaly Detection**: To ensure no loss of data, we detect anomalies in your uploads to the SFTP server and immediatly warn you when an upload is about to significantly change your account.
* **Encryption**: Data is encrypted, keeping your information safe and private.

### Setup

To get your FTP Credential Details raise a _customer care request_ in [Helo Center]https://knowledge.travelgatex.com/).

### Naming Conventions

Keep in mind that the file is loaded using a specific name, depending on the data being uploaded. For the appropriate file name, please see the specific file documentation in each API product section.
 
{{% alert theme="warning" %}}**Remember to always** overwrite the last file, because only the last file will be loaded into the platform. 

If in some case you need to revert to an old version, don't worry because we keep a copy of the old files.{{% /alert %}}


## GraphQL Mutation

{{% alert theme="info" %}}Resources to help you upload your data via GraphQL `mutation` are coming soon. 
Please submit an issue to <a href="https://github.com/travelgateX/Issue-tracker">our issue tracker</a> if you require these resources immediately.{{% /alert %}}

