+++
title= "DescriptiveInfo"
keywords= "hotel, data structure, descriptive, descriptive info, info"
search= "Hotel - Data Structure - DescriptiveInfo"
sidebar= "mydoc_sidebar"
permalink= "/docs/hotel/DSF/DescriptiveInfo"
weight = 8
icon = "fa-object-ungroup"
+++



### Method Goals


This method returns the details of a hotel (pictures, descriptions ...)
in a given language.



### Request Format


The request just requires the hotel code and language code (ISO-639-1) - this is specified within the *source*--\>*languageCode*).



### Response Format


The result returns the details of that hotel.



### Remarks


The maximum time permitted in our system before the connection is closed
is **180000** milliseconds.



### DescriptiveInfoRQ Example

In the request for this call it is necessary to use the object: "HotelBaseRQ". You can find the information in the section '[Common elements](/connectiontypessellers/hotelpullsellers/methods/common-elements/)'.

~~~xml
    <DescriptiveInfoRQ>
        <Hotel>
            <Code>524AC</Code>
        </Hotel>
    </DescriptiveInfoRQ>
~~~



**Important information about Number (Cardinal):**

Go to [Common-Elements](/connectiontypessellers/hotelpullsellers/methods/common-elements/#Important) for more information.



### DescriptiveInfoRQ Description


| **Element**				    | **Number**	| **Type**	 | **Description**				|
| ----------------------------- | ------------- | ---------- | -----------------------------|
| DescriptiveInfoRQ			    | 1             |		     | Root node.					|
| DescriptiveInfoRQ/ Hotel/     | 1    		    | String	 | Hotel requested.				|
| DescriptiveInfoRQ/ Hotel/Code	| 1    	        | String	 | Code.						|



### DescriptiveInfoRS Example

~~~xml
    <DescriptiveInfoRS>
    <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>
    <Hotel>
        <Code>70</Code>
        <Name>Nice Stay</Name>
        <Address>Avenue Doctor Brown S/N</Address>
        <Airports>
            <Airport>
                <IATACode>LON</IATACode>
            </Airport>
        </Airports>
        <Town>London</Town>
        <ZipCode>21449</ZipCode>
        <CountryISOCode>UK</CountryISOCode>
        <AvailDestination code = "2" name = "London"/>
        <GeographicDestination code = "2" name = "London" avail = "true"/>
        <Contact>
            <Email>emailhotel@xxx.com</Email>
            <Telephone>91547892</Telephone>
            <Fax></Fax>
        </Contact>
        <BookingContact>
            <Email>bookinghotel@xxx.com</Email>
            <Telephone>91547880</Telephone>
            <Fax>910200200</Fax>
        </BookingContact>
        <CategoryCode>4 Stars</CategoryCode>    
        <ShortDescription>the hotel.....</ShortDescription>
        <LongDescription>the hotel....</LongDescription>
        <HowToGet></HowToGet>
        <Rooms>
            <Room code = "201232338" size = "0" viewCode = "Others" classificationCode = "Others" occupancy = "0">
                <Beds>
                    <Bed numberOfBeds = "1" type = "QueenBed"/>
                </Beds>
                <Attributes>                      
                    <Attribute>
                        <Code>2403</Code>
                        <Classification>HAB</Classification>
                        <Description>Free WiFi</Description>
                    </Attribute>
                    <Attribute>
                        <Code>2399</Code>
                        <Classification>HAB</Classification>
                        <Description>Flat-panel TV</Description>
                    </Attribute>
                    <Attribute>
                        <Code>2398</Code>
                        <Classification>HAB</Classification>
                        <Description>Cable TV service</Description>
                    </Attribute>
                    <Attribute>
                        <Code>4951</Code>
                        <Classification>HAB</Classification>
                        <Description>Free cribs/infant beds</Description>
                    </Attribute>
                    <Attribute>
                        <Code>318</Code>
                        <Classification>HAB</Classification>
                        <Description>Balcony</Description>
                    </Attribute>
                </Attributes>
                <Images>
                    <Picture>
                        <URL>https://i.travelapi.com/hotels/8000000/7770000/7769600/7769581/72588f9a_z.jpg</URL>
                        <Classification>HAB</Classification>
                        <UpgradeUTCDate>0001-01-01T00:00:00</UpgradeUTCDate>
                    </Picture>
                    <Picture>
                        <URL>https://i.travelapi.com/hotels/8000000/7770000/7769600/7769581/bd3da76f_z.jpg</URL>
                        <Classification>HAB</Classification>
                        <UpgradeUTCDate>0001-01-01T00:00:00</UpgradeUTCDate>
                    </Picture>
                </Images>
                <Description>Small Double Room with Balcony</Description>
                <Views>
                    <View>
                        <Code>4219</Code>
                        <Name>Mountain view</Name>
                    </View>
                </Views>
            </Room>    
        </Rooms>
        <SituationDescription>....</SituationDescription>
        <Attributes>
            <Attribute>
                <Code>10</Code>
                <Classification>GRAL</Classification>
                <Description>City center: 3000</Description>
            </Attribute>
            <Attribute>
                <Code>21</Code>
                <Classification>GRAL</Classification>
                <Description>Bus stop: 70000</Description>
            </Attribute>
            <Attribute>
                <Code>32</Code>
                <Classification>HAB</Classification>
                <Description>Bathroom</Description>
            </Attribute>
            <Attribute>
                <Code>43</Code>
                <Classification>HAB</Classification>
                <Description>Minibar</Description>
            </Attribute>
            <Attribute>
                <Code>54</Code>
                <Classification>HAB</Classification>
                <Description>Jacuzzi</Description>
            </Attribute>
            <Attribute>
                <Code>65</Code>
                <Classification>HAB</Classification>
                <Description>Radio</Description>
            </Attribute>
            <Attribute>
                <Code>76</Code>
                <Classification>HAB</Classification>
                <Description>Safe</Description>
            </Attribute>
            <Attribute>
                <Code>87</Code>
                <Classification>HOT</Classification>
                <Description>Playground</Description>
            </Attribute>
            <Attribute>
                <Code>98</Code>
                <Classification>SER</Classification>
                <Description>Internet</Description>
            </Attribute>
            <Attribute>
                <Code>90</Code>
                <Classification>GRAL</Classification>
                <Description>Restaurant</Description>
            </Attribute>
            <Attribute>
                <Code>01</Code>
                <Classification>HAB</Classification>
                <Description>TV</Description>
            </Attribute>
            <Attribute>
                <Code>31</Code>
                <Classification>HOT</Classification>
                <Description>Pool</Description>
            </Attribute>
        </Attributes>
        <Images>
            <Picture>
                <URL>http://www.images.net/infor/work/imagen/hotel_07/mapa.jpg</URL>
                <Classification>GRAL</Classification>
                <Description>Map view</Description>
                <Ordered>1</Ordered>
                <Code>50</Code>
                <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>
            </Picture>
            <Picture>
                <URL>http://www.images.net/infor/work/imagen/hotel_02/M.jpg</URL>
                <Classification>GRAL</Classification>
                <Description>External view</Description>
                <Ordered>2</Ordered>
                <Code>100</Code>
                <UpgradeUTCDate>2016-10-18T13:18:03+02:00</UpgradeUTCDate>
            </Picture>
        </Images>
        <LocationType>City</LocationType>
        <PaymentOptions cash="false" bankAcct="false">
            <Cards>
                <Card code="VI"/>
                <Card code="AX"/>
                <Card code="CA"/>
            </Cards>
        </PaymentOptions>
        <ExclusiveDeal>true</ExclusiveDeal>
        <PropertyCategory>
             <Code>1</Code>
             <Name>Hotel</Name>
        </PropertyCategory>
    </Hotel>
    </DescriptiveInfoRS>
~~~



### DescriptiveInfoRS Description


| **Element**				                | **Number**   | **Type**	 | **Description**						                                |
| ------------------------------------------| ------------ | ----------- | -------------------------------------------------------------------- |
| DescriptiveInfoRS/ UpgradeUTCDate	        | 1       	   | DateTime    | Indicates the update date of the information in UTC format.	        |
| DescriptiveInfoRS/ Hotel	                | 0..n         |		     | Root node. Hotel sheet.					                            |
| Code       				                | 1    		   | String	     | Code.								                                |
| Name       				                | 1    		   | String	     | Name.								                                |
| Address    				                | 1    		   | String	     | Address.							                                    |
| Airports/			    	                | 0..1         |		     | List of airports.							                        |
| Airports/ Airport			                | 1..n         |		     | Specific airport near the hotel.	                                    |
| Airports/ Airport/ IATACode	            | 1    		   | String	     | IATA airport Code.								                    |
| Town       				                | 1    		   | String	     | Town.    							                                |
| ZipCode    				                | 1    		   | String	     | ZipCode.							                                    |
| CountryISOCode			                | 1    		   | String	     | Country ISOCode.						                                |
| AvailDestination			                | 0..1     	   |		     | Avail destination (will only be returned if requested in Avail, and the type is CTY). |
| @code      				                | 1    		   | String	     | Destination code.						                            |
| @name      				                | 1    		   | String	     | Destination name. 						                            |
| GeographicDestination		                | 1        	   |		     | Geographic destination.					                            |
| @code      				                | 1    		   | String	     | Destination code.						                            |
| @name      				                | 1    		   | String	     | Destination name.						                            |
| @avail     				                | 1    		   | Boolean	 | Indicates if the code can be used in Avail.		                    |
| Latitude   				                | 0..1  	   | String	     | Latitude.							                                |
| Longitude  				                | 0..1  	   | String	     | Longitude.							                                |
| Contact/   				                | 0..1     	   |		     | Hotel contact information.							                |
| Contact/ Email			                | 1    		   | String	     | Email.							                                    |
| Contact/ Telephone		                | 1    		   | String	     | Telephone.							                                |
| Contact/ Fax				                | 1    		   | String	     | Fax.								                                    |
| CategoryCode				                | 1    		   | String	     | Category code.							                            |
| BookingContact/			                | 0..1     	   |		     | Booking dept contact.						                        |
| BookingContact/ Email		                | 1    		   | String	     | Email.							                                    |
| BookingContact/ Telephone	                | 1    		   | String	     | Telephone. 							                                |
| BookingContact/ Fax		                | 1    		   | String	     | Fax.   							                                    |
| Chaincode  				                | 0..1 		   | String	     | Hotel chain code.							                        |
| ShortDescription			                | 0..1 		   | String	     | A brief description of the hotel.   						            |
| LongDescription			                | 0..1 		   | String	     | An extended description that can include remarks, observations and other relevant information about the hotel. |
| HowToGet  			                    | 0..1 		   | String	     | Directions to the hotel.					                            |
| Rooms/		                            | 0..1 		   |   	         | Rooms.   						                                    |
| Rooms/ Room			                    | 1..n 		   |   	         | Room.   						                                        |
| @code			                            | 1 		   | String 	 | Room Code.   						                                |
| @size			                            | 1 		   | Integer 	 | Size of the room.						                            |
| @viewCode			                        | 1 		   | String 	 | Main view of the room. See the full list of card codes at [Lists of Data](/connectiontypessellers/hotelpullsellers/listsdata/#view-codes). |
| @classificationCode		                | 1 		   | String 	 | Room classification code. See the full list of card codes at [Lists of Data](/connectiontypessellers/hotelpullsellers/listsdata/#room-classifications). |
| @occupancy			                    | 1 		   | Integer 	 | Number of rooms availables at the hotel. 						    |
| Rooms/ Room/ Description	                | 1 		   | String 	 | Room Description.   						                            |
| Rooms/ Room/ Beds/		                | 0..1 	       |   	         | Room bedding.				                                        |
| @sharedBed			                    | 1 		   | Boolean	 | Indicates if it's a shared bed.				                        |
| Rooms/ Room/ Beds/ Bed	                | 1..n 	       |   	         | Number of beds allocated in the room.					            |
| @numberOfBeds			                    | 1 		   | String	     | Number of beds allocated in the room.				                |
| @type			                            | 1 		   | String	     | Type of bed. (Queen Bed, Single...)				                    |
| Rooms/ Room/ RoomOccupancy/	            | 1 		   |   	         | Room ocuppancy.						                                |
| Rooms/ Room/ RoomOccupancy/ Adults/	    | 1 		   |   	         | Indicates ocuppancy for adults.						                |
| Rooms/ Room/ RoomOccupancy/ Adults/ Min	| 1 		   | Integer 	 | Indicates minimum number of adults.					                |
| Rooms/ Room/ RoomOccupancy/ Adults/ Max	| 1 		   | Integer 	 | Indicates maximum number of adults.					                |
| Rooms/ Room/ RoomOccupancy/ Children/	    | 1 		   |   	         | Indicates ocuppancy for children. 						            |
| Rooms/ Room/ RoomOccupancy/ Children/ Min	| 1 		   | Integer 	 | Indicates minimum number of children.					            |
| Rooms/ Room/ RoomOccupancy/ Children/ Max	| 1 		   | Integer 	 | Indicates maximum number of children.					            |
| Rooms/ Room/ RoomOccupancy/ Infants/	    | 1 		   |   	         | Indicates ocuppancy for infants. 						            |
| Rooms/ Room/ RoomOccupancy/ Infants/ Min  | 1 		   | Integer 	 | Indicates minimum number of infants.					                |
| Rooms/ Room/ RoomOccupancy/ Infants/ Max  | 1 		   | Integer 	 | Indicates maximum number of infants.					                |
| Rooms/ Room/ RoomOccupancy/ Total/	    | 1 		   |   	         | Indicates total room ocuppancy without breakout per pax.			    |
| Rooms/ Room/ RoomOccupancy/ Total/ Min    | 1 		   | Integer 	 | Indicates minimum number of paxes.					                |
| Rooms/ Room/ RoomOccupancy/ Total/ Max    | 1 		   | Integer 	 | Indicates maximum number of paxes.					                |
| Rooms/ Room/ Views/		                | 0..1 		   |   	         | Views of the room.					                                |
| Rooms/ Room/ Views/ View	                | 1..n 		   |   	         | List of views.					                                    |
| Rooms/ Room/ Views/ View/ Code	        | 1..n 		   | String 	 | View code.				                                            |
| Rooms/ Room/ Views/ View/ Name	        | 1..n 		   | String 	 | Name of the View.					                                |
| Rooms/ Room/ Attributes	                | 1 		   |          	 | Room Attributes. (Follows same structure as Hotel Attributes)	    |
| Rooms/ Room/ Images		                | 1 		   |   	         | Room Images.	(Follows same structure as Hotel Images)			    |
| SituationDescription		                | 0..1 		   | String	     | Area description.					                                |
| RestaurantsDescription	                | 0..1 		   | String	     | Restaurants description.					                            |
| PoolsDescription			                | 0..1 		   | String	     | Pools description.    					                            |
| ActivitiesDescription		                | 0..1 		   | String	     | Activities description.					                            |
| ServicesDescription		                | 0..1 		   | String	     | Services description.						                        |
| AdditionalDetails			                | 0..1 		   | String	     | Additional details.						                            |
| Attributes/				                | 0..1         |		     | Attributes.							                                |
| Attributes/ Attribute/	                | 1..n         |		     | Specific attributes of the hotel, such as wi-fi.	                    |
| Attributes/ Attribute/ Code               | 1    		   | String	     | Code.								                                |
| Attributes/ Attribute/ Value	            | 1    		   | String	     | Value.							                                    |
| Attributes/ Attribute/ Classification	    | 1    		   | String	     | Classification ( HOT=hotel, HAB=room, SER=service and GRAL=generic). |
| Attributes/ Attribute/ Description	    | 0..1         | String	     | Description.							                                |
| Images/    				                | 0..1         |		     | Images.							                                    |
| Images/ Picture/			                | 1..n         |		     | Picture.     							                            |
| Images/ Picture/ Url		                | 1    		   | String	     | Url.								                                    |
| Images/ Picture/ Classification	        | 1    		   | String	     | Classification (HOT=hotel, HAB=room, SER=service and GRAL=generic).  |
| Images/ Picture/ Ordered	                | 0..1 		   | String	     | Images should be ordered from 1 onward. 1 is top.		            |
| Images/ Picture/ Description	            | 0..1  	   | String	     | Description.							                                |
| Images/ Picture/ Code		                | 0..1    	   | String	     | Code.								                                |
| Images/ Picture/ UpgradeUTCDate	        | 0..1    	   | DateTime	 | Indicates the upgrade date of the picture in UTC format.	            |
| LocationType				                | 0..1 		   | String	     | Location code.							                            |
| PaymentOptions/			                | 0..1 		   | String	     | Type of cards allowed by the supplier. This tag is only mandatory if payment type is different than *MerchantPay*. |
| PaymentOptions/ Cards/	                | 1            |		     | List of cards allowed.					                            |
| PaymentOptions/ Cards/ Card	            | 1..n         |		     | Type of card allowed. 						                        |
| @code 				                    | 1    		   | String	     | Code of card. See the full list of card codes at [Lists of Data](/connectiontypessellers/hotelpullsellers/listsdata/#credit-cards). |
| ExclusiveDeal				                | 0..1 		   | Boolean 	 | Indicates that a Hotel is an Exlusive Deal.	                        |
| PropertyCategory/			                | 0..1         |		     | Hotels property type. Similar to Type tag, but on supplier's side.   |
| PropertyCategory/ Code	                | 1    		   | String	     | Supplier property code.					                            |
| PropertyCategory/ Name	                | 1    		   | String	     | Supplier property name.					                            |



