+++
title = "Ranking"
pagetitle = "Rank hotels"
description = "Learn about how to rank hotels"
icon = "fa-sort-amount-asc"
weight = 6
alwaysopen = false
+++

On this page you will learn how to rank hotels.

## Overview

Hotel Content operations allow changes to be made to static methods on HotelX. A system where hotels can be divided into different rankings or priorities in order to facilitate the mapping process.

The main goal of this process is to create a hotel ranking and divide the whole portfolio so the hotel list is more manageable. Each classification or sub-list responds to specific commercial criteria, such as, the hotels directly contracted, the best offers, the best sales hotels, etc.

Once the hotel ranking file(s) have been uploaded, the static hotel list method can filter hotels according to this ranking. To set up hotel ranking lists you must upload a file in csv format using a specific name to identify the ranking in your organisation’s FTP.

### File Names (mandatory)

Each file can have different meanings. It’s up to the file creator to give it a meaning according to his/her business needs. In order to process files correctly, they must be named according to the following naming convention:

|File Nane| Description|
|---------|------------|
|rank1.csv | Rank 1, for example direct contracts |
|rank2.csv | Rank 2, for example best deals |
|rank3.csv | Rank 3, for example top sales |
|rank4.csv | Rank 4, for example competitive hotels |
|rankN.csv | Rank N, any type of information.|

### Header fields (mandatory)

In order to be correctly processed, the header fields must have the following format:

| Field Name | Data Type |
|-------------|----------|
| provider_id | string |
| hotel_code | string |
| rank | boolean [1,0] |

### Example:

| provider_id | hotel_code |rank |
|-------------|------------|-----|
| travelgatex | 2018 | 1 |
| travelgatey | 2017 | 1 |

### Process file

To process the file, it must be uploaded to your organization’s FTP folder in the TravelgateX Platform. More info on how to upload files please refer to the [data automation section](/travelgatex/data-automation/).

### Template File

For your convinience you can [download a template CSV file](/content/rank1.csv).