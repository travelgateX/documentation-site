+++
title = "Hotel Content"
pagetitle = "& Static Content"
description = "Learn about how manage content data to manage in your site. Hotel, Boards, Categories..."
weight = 5
alwaysopen = false
+++

On this page you will learn how to manage content data in your site such as hotel, boards, categories, etc. Hotel Content operations allow changes to be made to static methods on HotelX. A system where hotels can be divided into different rankings or priorities in order to facilitate the mapping process.

## Hotels Ranking

The main goal of this process is to create a hotel ranking and divide the whole portfolio so the hotel list is more manageable. Each classification or sub-list responds to specific commercial criteria, such as, the hotels directly contracted, the best offers, the best sales hotels, etc.

Once the hotel ranking file(s) have been uploaded, the static hotel list method can filter hotels according to this ranking. To set up hotel ranking listsm you will need to upload a file in csv format with a specific name to your organisation's FTP.

### File Names (mandatory)

Each file has a different function depending on whether the name has one sense or another from a commercial point of view. To process files correctly, they must be named according to the following nameing convention:

|File Nane| Description|
|---------|------------|
|rank1.csv | Rank 1, for example direct contracts |
|rank2.csv | Rank 2, for example best deals |
|rank3.csv | Rank 3, for example top sales |
|rank4.csv | Rank 4, for example competitive hotels |

### Header fields (mandatory)

In order to be correctly processed, the header fields must have the following format:

| Field Name | Data Type |
|-------------|----------|
| provider_id | string |
| hotel_code | string |
| rank | boolean [1,0] |

Example file format (rank1.csv):

| provider_id | hotel_code |rank |
|-------------|------------|-----|
| travelgatex | 2018 | 1 |
| travelgatey | 2017 | 1 |
 
### Process file

To process the file, it must be uploaded to your organization's FTP folder in the TravelgateX Platform.

### Template File

You can [download a template CSV file](/content/rank1.csv).
