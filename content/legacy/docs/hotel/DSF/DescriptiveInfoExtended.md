---
title: DescriptiveInfoExtended (In development)
keywords: hotel, data structure, descriptive, descriptive info, extended
search: Hotel - Data Structure - DescriptiveInfoExtended (In development)
sidebar: mydoc_sidebar
permalink: /docs/hotel/DSF/DescriptiveInfoExtended
---


### Method Goals


This method returns 100% of the hotel information provided by the supplier.

It allows you to map each hotel using your own criteria with the combination of contextItem_ plus data_ so you will have the
information (extracted from the supplier's documentation hierachy/fields descriptions) required to do so.


### Request Format


After entering the hotel code, you can set language filters. We recommend that the first call is done without filters in order to ascertain which languages are provided by the supplier. 

To define language filters set the LanguageCode element with one of the following values:

-  *Culture (xx_YY) :* Response will return *values* /
 *text* of the one specific language_culture requested

-  *No Culture (xx) :* Response will return *values* / *text*
 of all cultures available within the language requested.

For example, when en is entered in *No Culture*, then the response will return en _GB and en _US.


### Remarks


A maximum time of **180000** milliseconds is permitted before the connection is closed.


### DescriptiveInfoExtendedRQ Example


~~~xml
    <DescriptiveInfoExtendedRQ>
        <timeoutMilliseconds>180000</timeoutMilliseconds>
        <Hotel>
            <Code>343229</Code>
        </Hotel>
        <Filters>
            <LanguageCodes>
                <LanguageCode>es_ES</LanguageCode>
                <LanguageCode>en_US</LanguageCode>
            </LanguageCodes>
        </Filters>
    </DescriptiveInfoExtendedRQ>
~~~


### DescriptiveInfoExtendedRQ Description




| **Element**     			| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| DescriptiveInfoExtendedRQ 		| 1   		|	        | Root node.					|
| DescriptiveInfoExtendedRQ/Hotel	| 1 		| String	| Hotel requested. 				|
| DescriptiveInfoExtendedRQ/Filters 	| 0..1  	| Filters  	| Filters. 					|
| DescriptiveInfoExtendedRQ/Filters/LanguageCodes | 0..1| LanguageCodes | LanguageCodes.				|
| LanguageCodes/LanguageCode 		| 1..n  	| String	| LanguageCode. 				|



### DescriptiveInfoExtendedRS Example


~~~json

{
 "hotel" : {
        "codigo" : "343229",
        "codigosAlternativos" : [
        ],
        "nombre" : "Hotel Club Helios",
        "direccion" : "viale Lido",
        "poblacion" : "Noto",
        "codigoPostal" : "96107",
        "codigoPaisISO3166_1_alfa_2" : "IT",
        "destinoNivelMinimo" : {
            "codigo" : "IT#Noto",
            "nombre" : "Noto",
            "destinoHijo" : [
            ]
        },
        "destinoGeograficoMinimo" : {
            "codigo" : "IT#Noto",
            "nombre" : "Noto",
            "disponibilidad" : true,
            "destinoHijo" : [
            ]
        },
        "latitud" : "36.85142",
        "longitud" : "15.11054",
        "codigoCategoria" : "3.0",
        "numberOfRooms" : "130",
        "propertyType" : {
            "code" : "1",
            "text" : [
                {
                    "value" : "Hotel"
                }
            ]
        },
         "hotelAttributes" : [
            {
                "context" : [
                    {
                        "contextItem" : [
                            {
                                "id" : "HotelSummary",
                                "parentRefId" : "",
                                "Schema" : "Null",
                                "text" : [
                                    {
                                        "languageCode" : "en",
                                        "name" : "HotelSummary",
                                        "description" : "Summary elements for the property returned"
                                    },
                                    {
                                        "languageCode" : "pt",
                                        "name" : "HotelSummary",
                                        "description" : "Elementos de resumo do estabelecimento retornado"
                                    },
                                    {
                                        "languageCode" : "es",
                                        "name" : "HotelSummary",
                                        "description" : "Los elementos de resumen de la propiedad que se devuelve."
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "data" : {
                    "id" : "HotelSummary#highRate",
                    "type" : "eNumeric",
                    "value" : [
                        {
                            "value" : "626.7603"
                        }
                    ],
                    "text" : [
                        {
                            "languageCode" : "en",
                            "name" : "highRate",
                            "description" : "Highest rate returned by the hotel in recent queries. This is a statistical figure and not necessarily a rate for current availability."
                        },
                        {
                            "languageCode" : "pt",
                            "name" : "highRate",
                            "description" : "Maior tarifa retornada pelo hotel em consultas recentes. Trata-se de um número estatístico e não é necessariamente a tarifa da disponibilidade atual."
                        },
                        {
                            "languageCode" : "es",
                            "name" : "highRate",
                            "description" : "La tarifa más alta que devuelve el hotel en consultas recientes. Se trata de una cifra estadística y no necesariamente de la tarifa para la disponibilidad actual."
                        }
                    ]
                }
            }
],
 "hotelDescriptions" : {
        "description" : {
                "description" : [
                    {
                        "context" : [
                            {
                                "contextItem" : [
                                    {
                                        "id" : "HotelSummary#locationDescription",
                                        "parentRefId" : "t:EXP:HotelSummary",
                                        "Schema" : "Null",
                                        "text" : [
                                            {
                                                "languageCode" : "en",
                                                "name" : "locationDescription",
                                                "description" : "General location as entered by the property, e.g. \"Near Pike Place Market\""
                                            },
                                            {
                                                "languageCode" : "pt",
                                                "name" : "locationDescription",
                                                "description" : "Local geral inserido pelo estabelecimento (por exemplo, \"perto do mercado Pike Place\")"
                                            },
                                            {
                                                "languageCode" : "es",
                                                "name" : "locationDescription",
                                                "description" : "La propiedad introduce la ubicación general, por ejemplo, \"cerca del mercado Pike Place Market\"."
                                            }
                                        ]
                                    },
                                    {
                                        "id" : "HotelSummary",
                                        "parentRefId" : "",
                                        "Schema" : "Null",
                                        "text" : [
                                            {
                                                "languageCode" : "en",
                                                "name" : "HotelSummary",
                                                "description" : "Summary elements for the property returned"
                                            },
                                            {
                                                "languageCode" : "pt",
                                                "name" : "HotelSummary",
                                                "description" : "Elementos de resumo do estabelecimento retornado"
                                            },
                                            {
                                                "languageCode" : "es",
                                                "name" : "HotelSummary",
                                                "description" : "Los elementos de resumen de la propiedad que se devuelve."
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "text" : [
                            {
                                "languageCode" : "en_US",
                                "value" : "Near Eloro Beach"
                            },
                            {
                                "languageCode" : "es_ES",
                                "value" : "A poca distancia de Playa Eloro"
                            }
                        ]
                    },
                ]
            }
        },
        "roomTypes" : {
            "roomType" : [
                {
                    "code" : "486225",
                    "typeId" : "581778",
                    "name" : {
                        "text" : [
                            {
                                "languageCode" : "en_US",
                                "value" : "Standard Room"
                            },
                            {
                                "languageCode" : "es_ES",
                                "value" : "Habitación estándar"
                            }
                        ]
                    },
                    "descriptions" : {
                        "description" : [
                            {
                                "context" : [
                                    {
                                        "contextItem" : [
                                            {
                                                "id" : "RoomType#descriptionLong",
                                                "parentRefId" : "t:EXP:RoomType",
                                                "Schema" : "Null",
                                                "text" : [
                                                    {
                                                        "languageCode" : "en",
                                                        "name" : "descriptionLong",
                                                        "description" : "Longer room description, if available."
                                                    },
                                                    {
                                                        "languageCode" : "pt",
                                                        "name" : "descriptionLong",
                                                        "description" : "Descrição do quarto mais longa, se disponível."
                                                    },
                                                    {
                                                        "languageCode" : "es",
                                                        "name" : "descriptionLong",
                                                        "description" : "La descripción más larga de la habitación, si se encuentra disponible."
                                                    }
                                                ]
                                            },
                                            {
                                                "id" : "RoomType",
                                                "parentRefId" : "t:EXP:RoomTypes",
                                                "Schema" : "Null",
                                                "text" : [
                                                    {
                                                        "languageCode" : "en",
                                                        "name" : "RoomType",
                                                        "description" : "Contains information for a single room type. Has attributes roomTypeId and roomCode. roomCode corresponds with the roomTypeCode element returned in the room and list responses."
                                                    },
                                                    {
                                                        "languageCode" : "pt",
                                                        "name" : "RoomType",
                                                        "description" : "Contém informações sobre um único tipo de quarto. Tem atributos roomTypeId, e roomCode. roomCode corresponde ao elemento roomTypeCode retornado nas respostas da lista e do quarto."
                                                    },
                                                    {
                                                        "languageCode" : "es",
                                                        "name" : "RoomType",
                                                        "description" : "Contiene información de un solo tipo de habitación. Tiene los atributos roomTypeId y roomCode. roomCode se corresponde con el elemento roomTypeCode que se devolvió en las respuestas de lista y habitación."
                                                    }
                                                ]
                                            },
                                            {
                                                "id" : "RoomTypes",
                                                "parentRefId" : "",
                                                "Schema" : "Null",
                                                "text" : [
                                                    {
                                                        "languageCode" : "en",
                                                        "name" : "RoomTypes",
                                                        "description" : "Contains array of available room type at the property. Has the size attribute to indicate the number of results contained."
                                                    },
                                                    {
                                                        "languageCode" : "pt",
                                                        "name" : "RoomTypes",
                                                        "description" : "Contém matriz de tipo de quarto disponível no estabelecimento. Tem o atributo size para indicar o número de resultados contidos."
                                                    },
                                                    {
                                                        "languageCode" : "es",
                                                        "name" : "RoomTypes",
                                                        "description" : "Contiene la matriz del tipo de habitación disponible de la propiedad. Tiene el atributo size para indicar el número de resultados que se devuelven."
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ],
                                "text" : [
                                    {
                                        "languageCode" : "en_US",
                                        "value" : "&amp;lt;strong&amp;gt;1 double bed or 1 twin bed or 2 twin beds or 3 twin beds&amp;lt;/strong&amp;gt;&amp;lt;br /&amp;gt; &amp;lt;b&amp;gt;Food &amp;amp; Drink&amp;lt;/b&amp;gt; - Refrigerator&amp;lt;br /&amp;gt;&amp;lt;b&amp;gt;Bathroom&amp;lt;/b&amp;gt; - Private bathroom and free toiletries&amp;lt;br /&amp;gt;"
                                    },
                                    {
                                        "languageCode" : "es_ES",
                                        "value" : "&amp;lt;strong&amp;gt;1 cama doble o 1 cama individual o 2 camas individuales o 3 camas individuales&amp;lt;/strong&amp;gt;&amp;lt;br /&amp;gt; &amp;lt;b&amp;gt;Comida y bebida:&amp;lt;/b&amp;gt; frigorífico&amp;lt;br /&amp;gt;&amp;lt;b&amp;gt;Cuarto de baño:&amp;lt;/b&amp;gt; baño privado con artículos de higiene personal gratuitos&amp;lt;br /&amp;gt;"
                                    }
                                ]
                            }
                        ]
                    },
                    "valuableAttribute" : [
                        {
                            "context" : [
                                {
                                    "contextItem" : [
                                        {
                                            "id" : "RoomType#roomAmenities#RoomAmenity",
                                            "parentRefId" : "t:EXP:RoomType#roomAmenities",
                                            "Schema" : "Null",
                                            "text" : [
                                                {
                                                    "languageCode" : "en",
                                                    "name" : "RoomAmenity",
                                                    "description" : "Contains description element for a single amenity. Has attribute amenityId. Refer to the AttributeList file for mapping amenityId values."
                                                },
                                                {
                                                    "languageCode" : "pt",
                                                    "name" : "RoomAmenity",
                                                    "description" : "Contém elemento de descrição para uma única comodidade. Tem o atributo amenityId. Consulte o arquivo AttributeList para ver o mapeamento de valores amenityId."
                                                },
                                                {
                                                    "languageCode" : "es",
                                                    "name" : "RoomAmenity",
                                                    "description" : "Contiene el elemento de descripción para un solo servicio. Tiene el atributo amenityId. Consulte el archivo AttributeList para la asignación de valores de amenityId."
                                                }
                                            ]
                                        },
                                        {
                                            "id" : "RoomType#roomAmenities",
                                            "parentRefId" : "t:EXP:RoomType",
                                            "Schema" : "Null",
                                            "text" : [
                                                {
                                                    "languageCode" : "en",
                                                    "name" : "roomAmenities",
                                                    "description" : "Contains all provided amenities for the room. Has size attribute to indicate the number of results contained."
                                                },
                                                {
                                                    "languageCode" : "pt",
                                                    "name" : "roomAmenities",
                                                    "description" : "Contém todas as comodidades fornecidas para o quarto. Tem o atributo size para indicar o número de resultados contidos."
                                                },
                                                {
                                                    "languageCode" : "es",
                                                    "name" : "roomAmenities",
                                                    "description" : "Contiene todos los servicios que se proporcionan para la habitación. Tiene el atributo size para indicar el número de resultados que se devuelven."
                                                }
                                            ]
                                        },
                                        {
                                            "id" : "RoomType",
                                            "parentRefId" : "t:EXP:RoomTypes",
                                            "Schema" : "Null",
                                            "text" : [
                                                {
                                                    "languageCode" : "en",
                                                    "name" : "RoomType",
                                                    "description" : "Contains information for a single room type. Has attributes roomTypeId and roomCode. roomCode corresponds with the roomTypeCode element returned in the room and list responses."
                                                },
                                                {
                                                    "languageCode" : "pt",
                                                    "name" : "RoomType",
                                                    "description" : "Contém informações sobre um único tipo de quarto. Tem atributos roomTypeId, e roomCode. roomCode corresponde ao elemento roomTypeCode retornado nas respostas da lista e do quarto."
                                                },
                                                {
                                                    "languageCode" : "es",
                                                    "name" : "RoomType",
                                                    "description" : "Contiene información de un solo tipo de habitación. Tiene los atributos roomTypeId y roomCode. roomCode se corresponde con el elemento roomTypeCode que se devolvió en las respuestas de lista y habitación."
                                                }
                                            ]
                                        },
                                        {
                                            "id" : "RoomTypes",
                                            "parentRefId" : "",
                                            "Schema" : "Null",
                                            "text" : [
                                                {
                                                    "languageCode" : "en",
                                                    "name" : "RoomTypes",
                                                    "description" : "Contains array of available room type at the property. Has size attribute to indicate the number of results contained."
                                                },
                                                {
                                                    "languageCode" : "pt",
                                                    "name" : "RoomTypes",
                                                    "description" : "Contém matriz de tipo de quarto disponível no estabelecimento. Tem o atributo size para indicar o número de resultados contidos."
                                                },
                                                {
                                                    "languageCode" : "es",
                                                    "name" : "RoomTypes",
                                                    "description" : "Contiene la matriz del tipo de habitación disponible de la propiedad. Tiene el atributo size para indicar el número de resultados que se devuelven."
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "data" : {
                                "code" : "26",
                                "id" : "AttributeList#26",
                                "type" : "eBoolean",
                                "value" : [
                                    {
                                        "value" : "True"
                                    }
                                ],
                                "text" : [
                                    {
                                        "languageCode" : "en_US",
                                        "name" : "Television",
                                        "description" : ""
                                    },
                                    {
                                        "languageCode" : "es_ES",
                                        "name" : "Televisión",
                                        "description" : ""
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        "medias" : {
            "media" : [
                {
                    "id" : "5529023",
                    "context" : [
                        {
                            "contextItem" : [
                                {
                                    "code" : "0",
                                    "id" : "HotelImage#Category#0",
                                    "parentRefId" : "t:EXP:HotelImage",
                                    "Schema" : "Null",
                                    "text" : [
                                        {
                                            "languageCode" : "en",
                                            "name" : "Unknown"
                                        }
                                    ]
                                },
                                {
                                    "id" : "HotelImage",
                                    "parentRefId" : "t:EXP:HotelImages",
                                    "Schema" : "Null",
                                    "text" : [
                                        {
                                            "languageCode" : "en",
                                            "name" : "HotelImage",
                                            "description" : "Contains elements for the URL and reference values for a single image."
                                        },
                                        {
                                            "languageCode" : "pt",
                                            "name" : "HotelImage",
                                            "description" : "Contém elementos relativos ao URL e a valores de referência para uma única imagem."
                                        },
                                        {
                                            "languageCode" : "es",
                                            "name" : "HotelImage",
                                            "description" : "Contiene elementos de los valores de referencia y URL de una sola imagen."
                                        }
                                    ]
                                },
                                {
                                    "id" : "HotelImages",
                                    "parentRefId" : "",
                                    "Schema" : "Null",
                                    "text" : [
                                        {
                                            "languageCode" : "en",
                                            "name" : "HotelImages",
                                            "description" : "Contains all property images available. Does not contain room-level photos. Has size attribute to indicate the number of results contained. Review  image categorizations for more specific details about the data returned."
                                        },
                                        {
                                            "languageCode" : "pt",
                                            "name" : "HotelImages",
                                            "description" : "Contém todas as imagens do estabelecimento disponíveis. Não contém fotos dos quartos. Tem o atributo size para indicar o número de resultados contidos.Revise as  classificações de imagens para obter detalhes mais específicos sobre os dados retornados."
                                        },
                                        {
                                            "languageCode" : "es",
                                            "name" : "HotelImages",
                                            "description" : "Contiene todas las imágenes de propiedades disponibles. No contiene fotos de nivel de habitaciones. Tiene el atributo size para indicar el número de resultados que se devuelven.Consulte  las categorizaciones de imágenes para obtener más detalles específicos acerca de los datos que se devuelven."
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "contextItem" : [
                                {
                                    "code" : "0",
                                    "id" : "HotelImage#Type#0",
                                    "parentRefId" : "t:EXP:HotelImage",
                                    "Schema" : "Null",
                                    "text" : [
                                        {
                                            "languageCode" : "en",
                                            "name" : "Unknown"
                                        }
                                    ]
                                },
                                {
                                    "id" : "HotelImage",
                                    "parentRefId" : "t:EXP:HotelImages",
                                    "Schema" : "Null",
                                    "text" : [
                                        {
                                            "languageCode" : "en",
                                            "name" : "HotelImage",
                                            "description" : "Contains elements for the URL and reference values for a single image."
                                        },
                                        {
                                            "languageCode" : "pt",
                                            "name" : "HotelImage",
                                            "description" : "Contém elementos relativos ao URL e a valores de referência para uma única imagem."
                                        },
                                        {
                                            "languageCode" : "es",
                                            "name" : "HotelImage",
                                            "description" : "Contiene elementos de los valores de referencia y URL de una sola imagen."
                                        }
                                    ]
                                },
                                {
                                    "id" : "HotelImages",
                                    "parentRefId" : "",
                                    "Schema" : "Null",
                                    "text" : [
                                        {
                                            "languageCode" : "en",
                                            "name" : "HotelImages",
                                            "description" : "Contains all property images available. Does not contain room-level photos. Has size attribute to indicate the number of results contained. Review  image categorizations for more specific details about the data returned."
                                        },
                                        {
                                            "languageCode" : "pt",
                                            "name" : "HotelImages",
                                            "description" : "Contém todas as imagens do estabelecimento disponíveis. Não contém fotos dos quartos. Tem o atributo size para indicar o número de resultados contidos.Revise as  classificações de imagens para obter detalhes mais específicos sobre os dados retornados."
                                        },
                                        {
                                            "languageCode" : "es",
                                            "name" : "HotelImages",
                                            "description" : "Contiene todas las imágenes de propiedades disponibles. No contiene fotos de nivel de habitaciones. Tiene el atributo size para indicar el número de resultados que se devuelven.Consulte  las categorizaciones de imágenes para obtener más detalles específicos acerca de los datos que se devuelven."
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "valuableAttribute" : [
                        {
                            "context" : [
                                {
                                    "contextItem" : [
                                        {
                                            "id" : "HotelImage",
                                            "parentRefId" : "t:EXP:HotelImages",
                                            "Schema" : "Null",
                                            "text" : [
                                                {
                                                    "languageCode" : "en",
                                                    "name" : "HotelImage",
                                                    "description" : "Contains elements for the URL and reference values for a single image."
                                                },
                                                {
                                                    "languageCode" : "pt",
                                                    "name" : "HotelImage",
                                                    "description" : "Contém elementos relativos ao URL e a valores de referência para uma única imagem."
                                                },
                                                {
                                                    "languageCode" : "es",
                                                    "name" : "HotelImage",
                                                    "description" : "Contiene elementos de los valores de referencia y URL de una sola imagen."
                                                }
                                            ]
                                        },
                                        {
                                            "id" : "HotelImages",
                                            "parentRefId" : "",
                                            "Schema" : "Null",
                                            "text" : [
                                                {
                                                    "languageCode" : "en",
                                                    "name" : "HotelImages",
                                                    "description" : "Contains all property images available. Does not contain room-level photos. Has size attribute to indicate the number of results contained. Review  image categorizations for more specific details about the data returned."
                                                },
                                                {
                                                    "languageCode" : "pt",
                                                    "name" : "HotelImages",
                                                    "description" : "Contém todas as imagens do estabelecimento disponíveis. Não contém fotos dos quartos. Tem o atributo size para indicar o número de resultados contidos.Revise as  classificações de imagens para obter detalhes mais específicos sobre os dados retornados."
                                                },
                                                {
                                                    "languageCode" : "es",
                                                    "name" : "HotelImages",
                                                    "description" : "Contiene todas las imágenes de propiedades disponibles. No contiene fotos de nivel de habitaciones. Tiene el atributo size para indicar el número de resultados que se devuelven.Consulte  las categorizaciones de imágenes para obtener más detalles específicos acerca de los datos que se devuelven."
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "data" : {
                                "id" : "HotelImage#supplierId",
                                "type" : "eNumeric",
                                "value" : [
                                    {
                                        "value" : "13"
                                    }
                                ],
                                "text" : [
                                    {
                                        "languageCode" : "en",
                                        "name" : "supplierId",
                                        "description" : "Indicates the supplier of the image. Follows the same mapping as the Supplier element's ID attribute."
                                    },
                                    {
                                        "languageCode" : "pt",
                                        "name" : "supplierId",
                                        "description" : "Indica o fornecedor da imagem. Segue o mesmo mapeamento do atributo ID do elemento Supplier."
                                    },
                                    {
                                        "languageCode" : "es",
                                        "name" : "supplierId",
                                        "description" : "Indica el proveedor de la imagen. Sigue la misma asignación que la del atributo ID del elemento Supplier."
                                    }
                                ]
                            }
                        },
                        {
                            "context" : [
                                {
                                    "contextItem" : [
                                        {
                                            "id" : "HotelImage",
                                            "parentRefId" : "t:EXP:HotelImages",
                                            "Schema" : "Null",
                                            "text" : [
                                                {
                                                    "languageCode" : "en",
                                                    "name" : "HotelImage",
                                                    "description" : "Contains elements for the URL and reference values for a single image."
                                                },
                                                {
                                                    "languageCode" : "pt",
                                                    "name" : "HotelImage",
                                                    "description" : "Contém elementos relativos ao URL e a valores de referência para uma única imagem."
                                                },
                                                {
                                                    "languageCode" : "es",
                                                    "name" : "HotelImage",
                                                    "description" : "Contiene elementos de los valores de referencia y URL de una sola imagen."
                                                }
                                            ]
                                        },
                                        {
                                            "id" : "HotelImages",
                                            "parentRefId" : "",
                                            "Schema" : "Null",
                                            "text" : [
                                                {
                                                    "languageCode" : "en",
                                                    "name" : "HotelImages",
                                                    "description" : "Contains all property images available. Does not contain room-level photos. Has size attribute to indicate the number of results contained. Review  image categorizations for more specific details about the data returned."
                                                },
                                                {
                                                    "languageCode" : "pt",
                                                    "name" : "HotelImages",
                                                    "description" : "Contém todas as imagens do estabelecimento disponíveis. Não contém fotos dos quartos. Tem o atributo size para indicar o número de resultados contidos.Revise as  classificações de imagens para obter detalhes mais específicos sobre os dados retornados."
                                                },
                                                {
                                                    "languageCode" : "es",
                                                    "name" : "HotelImages",
                                                    "description" : "Contiene todas las imágenes de propiedades disponibles. No contiene fotos de nivel de habitaciones. Tiene el atributo size para indicar el número de resultados que se devuelven.Consulte  las categorizaciones de imágenes para obtener más detalles específicos acerca de los datos que se devuelven."
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "data" : {
                                "id" : "HotelImage#byteSize",
                                "type" : "eNumeric",
                                "value" : [
                                    {
                                        "value" : "0"
                                    }
                                ],
                                "text" : [
                                    {
                                        "languageCode" : "en",
                                        "name" : "byteSize",
                                        "description" : "Size of the image, if available."
                                    },
                                    {
                                        "languageCode" : "pt",
                                        "name" : "byteSize",
                                        "description" : "Tamanho da imagem, se disponível."
                                    },
                                    {
                                        "languageCode" : "es",
                                        "name" : "byteSize",
                                        "description" : "El tamaño de la imagen, si se encuentra disponible."
                                    }
                                ]
                            }
                        }
                    ],
                    "description" : {
                        "context" : [
                            {
                                "contextItem" : [
                                    {
                                        "id" : "HotelImage#caption",
                                        "parentRefId" : "t:EXP:HotelImage",
                                        "Schema" : "Null",
                                        "text" : [
                                            {
                                                "languageCode" : "en",
                                                "name" : "caption",
                                                "description" : "Description for the image"
                                            },
                                            {
                                                "languageCode" : "pt",
                                                "name" : "caption",
                                                "description" : "Descrição da imagem."
                                            },
                                            {
                                                "languageCode" : "es",
                                                "name" : "caption",
                                                "description" : "La descripción de la imagen."
                                            }
                                        ]
                                    },
                                    {
                                        "id" : "HotelImage",
                                        "parentRefId" : "t:EXP:HotelImages",
                                        "Schema" : "Null",
                                        "text" : [
                                            {
                                                "languageCode" : "en",
                                                "name" : "HotelImage",
                                                "description" : "Contains elements for the URL and reference values for a single image."
                                            },
                                            {
                                                "languageCode" : "pt",
                                                "name" : "HotelImage",
                                                "description" : "Contém elementos relativos ao URL e a valores de referência para uma única imagem."
                                            },
                                            {
                                                "languageCode" : "es",
                                                "name" : "HotelImage",
                                                "description" : "Contiene elementos de los valores de referencia y URL de una sola imagen."
                                            }
                                        ]
                                    },
                                    {
                                        "id" : "HotelImages",
                                        "parentRefId" : "",
                                        "Schema" : "Null",
                                        "text" : [
                                            {
                                                "languageCode" : "en",
                                                "name" : "HotelImages",
                                                "description" : "Contains all property images available. Does not contain room-level photos. Has size attribute to indicate the number of results contained. Review  image categorizations for more specific details about the data returned."
                                            },
                                            {
                                                "languageCode" : "pt",
                                                "name" : "HotelImages",
                                                "description" : "Contém todas as imagens do estabelecimento disponíveis. Não contém fotos dos quartos. Tem o atributo size para indicar o número de resultados contidos.Revise as  classificações de imagens para obter detalhes mais específicos sobre os dados retornados."
                                            },
                                            {
                                                "languageCode" : "es",
                                                "name" : "HotelImages",
                                                "description" : "Contiene todas las imágenes de propiedades disponibles. No contiene fotos de nivel de habitaciones. Tiene el atributo size para indicar el número de resultados que se devuelven.Consulte  las categorizaciones de imágenes para obtener más detalles específicos acerca de los datos que se devuelven."
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "text" : [
                            {
                                "languageCode" : "en_US",
                                "value" : "Aerial View"
                            },
                            {
                                "languageCode" : "es_ES",
                                "value" : "Aerial View"
                            }
                        ]
                    },
                    "photos" : {
                        "photo" : [
                            {
                                "witdh" : "350",
                                "height" : "350",
                                "thumbnail" : false,
                                "url" : "http://images.travelnow.com/hotels/4000000/3510000/3509600/3509541/3509541_21_b.jpg"
                            },
                            {
                                "thumbnail" : true,
                                "url" : "http://images.travelnow.com/hotels/4000000/3510000/3509600/3509541/3509541_21_t.jpg"
                            }
                        ]
                    }
                },

            ]
        }
    }
}
~~~



### DescriptiveInfoExtendedRS Description




| **Element**				| **Number**	| **Type**	| **Description**				|
| ------------------------------------- | ------------- | ------------- | --------------------------------------------- |
| DescriptiveInfoExtendedRS/Hotel 	| 0..n  	|         	| Root node. Hotel sheet.			|
| Code          			| 1     	| String  	| Specify the code for the hotel required.	                                        |
| Name          			| 1     	| String  	| Hotel Name                                         |
| Address       			| 1     	| String  	| Address                                      |
| Town          			| 1     	| String  	| Town                                        |
| ZipCode       			| 1     	| String  	| ZipCode                                      |
| CountryISOCode 			| 1     	| String  	| Country ISO code for Country-specific addresses                              |
| AvailDestination 			| 0..1  	|      	| Destination that can be searched in Availability|
| AvailDestination/code         			| 1     	| String  | Destination code e.g. LON                            |
| AvailDestination/name         			| 1     	| String 	| Destination name e.g. London                         |
| GeographicDestination 		| 1     	|    All destinations provided by the supplier not just in Availability                       |
| GeographicDestination/code         			| 1     	| String  	| Destination code.                             |
| GeographicDestination/name         			| 1     	| String  	| Destination name.                             |
| GeographicDestination/avail        			| 1     	| Boolean 	| Indicates if it can be requested in availability.|
| Latitude      			| 1     	| String  	| Latitude.                                     |
| Longitude     			| 1     	| String  	| Longitude.                                    |
| Contact       			| 0..1  	|         	|Hotel Contact.                                      |
| Contact/Email 			| 1     	| String  	| Email.                                        |
| Contact/Telephone 			| 1     	| String  	| Telephone.                                    |
| Contact/Fax   			| 1     	| String  	| Fax.                                          |
| CategoryCode  			| 1     	| String  	| CategoryCode.                                 |
| BookingContact 			| 0..1  	|         	| Booking Contact.                              |
| BookingContact/Email 			| 1     	| String  	| Email.                                        |
| BookingContact/Telephone 		| 1     	| String  	| Telephone.                                    |
| BookingContact/Fax 			| 1     	| String  	| Fax.                                          |
| propertyType  			|       	|         	|                                               |
| propertyType/code  			| 1     	| String  	| Poperty Code.                                 |
| propertyType/text  			| 1     	| Text    	| Property Text.                                |
| propertyType/text/languageCode | | | |
| propertyType/text/name | | | |
| Chains        			| 1     	|         	|                                               |
| Chains/Code  				| 1     	| String  	| Chain Code.                                   |
| Chains/Name  				| 1     	| String  	| Chain Name.                                   |
| Chains/Data  				| 1     	| Data    	| Chain Data (more info in Hotel Summary)     |
| Languages     			| 0..1  	|         	|                                               |
| Languages/language      		| 1..n  	| String  	| Languages spoken at the hotel.                |
| PaymentOptions/Cards 			| 1     	|         	| List of cards allowed.                        |
| PaymentOptions/Cards/Card 		| 1..n  	|         	| Type card allowed.                            |
| PaymentOptions/Cards/Card/code   				| 1     	| String  	| Code card (see in *Lists of Data* (VI,AX,BV,CA...)). |
| exclusiveDeal 			| 0..1  	| Boolean 	| Indicates that a Hotel is an Exclusive Deal.|
| numberOfRooms 			| 0..1  	| Integer 	| Total rooms of hotel.   	                |
| hotelAttributes 			| 0..1  	|         	|                                               |
| hotelAttributes/Object 		| 1..n  	|  Attribute	|                                               |
| hotelAttributes/Object/context 		| 1..n  	|  	|                                               |
| hotelAttributes/Object/context/Object 		| 1..n  	|  	|                                               |
| hotelAttributes/Object/context/Object/contextItem 		| 1  	|  	|                                               |
| hotelAttributes/Object/context/Object/contextItem/Object 		| 1  	|  	|                                               |
| hotelAttributes/Object/context/Object/contextItem/Object/code 		| 0..1  	|  	|                                               |
| hotelAttributes/Object/context/Object/contextItem/Object/id 		| 1  	|  	|                                               |
| hotelAttributes/Object/context/Object/contextItem/Object/parentRefId 		| 0..1  	|  	|                                          |
| hotelAttributes/Object/context/Object/contextItem/Object/schema 		| 0..1  	|  	|                                               |
| hotelAttributes/Object/context/Object/contextItem/Object/text 		| 0..1  	|  	|                                               |
| hotelAttributes/Object/context/Object/contextItem/Object/text/Object 		| 0..1  	|  	|                                         |
| hotelAttributes/Object/context/Object/contextItem/Object/text/Object/languageCode | | | |
| hotelAttributes/Object/context/Object/contextItem/Object/text/Object/name | | | |
| hotelAttributes/Object/context/Object/contextItem/Object/text/Object/description | | | |
| hotelAttributes/Object/context/Object/contextItem/Object/text/Object/value | | | |
| hotelAttributes/Object/data 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/id 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/type 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/understand 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/value 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/value/Object 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/value/Object/value 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/text 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/text/Object 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/text/Object/langaugeCode 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/text/Object/name 		| 1 	|  	|                                               |
| hotelAttributes/Object/data/text/Object/description 		| 1 	|  	|                                               |    
| hotelAttributes/Object/data/text/Object/value 		| 1 	|  	|                                               |  
| hotelAttributes/Object/data/analyzersSpecified		| 1 	|  	|                                               |
| hotelDescriptions 			| 0..1  	| Descriptions 	|                                               |
| hotelDescriptions/description/description 	| 0..1     	|         	|                                               |
| hotelDescriptions/description/description/Object 	| 1..n    	|         	|        Descriptions                            |
| hotelDescriptions/description/description/Object/context 		| 1..n  	|  	|                                               |
| hotelDescriptions/description/description/Object/context/Object 		| 1..n  	|  	|                                               |
| hotelDescriptions/description/description/Object/context/Object/contextItem 		| 1  	|  	|                                         |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object 		| 1..n  	|  	|                    |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object/code 		| 0..1  	|  	|               |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object/id 		| 1  	|  	|                    |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object/parentRefId 		| 0..1  	|  	|                   |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object/schema 		| 0..1  	|  	|                        |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object/text 		| 0..1  	|  	|                        |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object/text/Object 		| 0..1  	|  	|                |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object/text/Object/languageCode | 0..1| | |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object/text/Object/name | 0..1 | | |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object/text/Object/description | 0..1 | | |
| hotelDescriptions/description/description/Object/context/Object/contextItem/Object/text/Object/value | 0..1 | | |
| hotelDescriptions/description/description/Object/text 		| 1 	|  	|                                               |
| hotelDescriptions/description/description/Object/text/Object  		| 1 	|  	|                                               |
| hotelDescriptions/description/description/Object/text/Object/languageCode  		| 0..1 	|  	|                                      |
| hotelDescriptions/description/description/Object/text/Object/name  		| 0..1 	|  	|                                      |
| hotelDescriptions/description/description/Object/text/Object/description  		| 0..1 	|  	|                                      |
| hotelDescriptions/description/description/Object/text/Object/value  		| 0..1 	|  	|                                      |
| roomTypes     			| 0..1  	|        	|                     RoomTypes                          |
| roomTypes/roomType     		| 0..1 	|    RoomType     	|                                               |
| roomTypes/roomType/Object     		| 1..n 	|   RoomType  Detail    	|                                               |
| roomTypes/roomType/Object/code      			| 1     	| String  	| Room Code.                                    |
| roomTypes/roomType/Object/typeId       		| 0..1  	| String  	| Room Type Id.                                 |
| roomTypes/roomType/Object/name      			| 1     	|         	| Root Name.                                    |
| roomTypes/roomType/Object/name/text      			|   1  	|         	|      Root text                               |
| roomTypes/roomType/Object/name/text/Object      			|  1..n   	|         	|    Root text                                 |
| roomTypes/roomType/Object/name/text/Object/languageCode      			|   1  	|     String    	|     Language code |
| roomTypes/roomType/Object/name/text/Object/description      			|   0..1  	|      String   	|   RoomType Description |
| roomTypes/roomType/Object/name/text/Object/value      			|    0..1 	|     String    	|   Room name    |
| roomTypes/roomType/Object/quantity     		| 0..1  	| String  	|               Quantity of this RoomType            |
| roomTypes/roomType/Object/dimension       		| 0..1  	|  String 	|            Dimension                   |
| roomTypes/roomType/Object/descriptions   		| 0..1  	|   	| Room Descriptions same structure hotelDescriptions/description/description  |
| roomTypes/roomType/Object/medias       		| 0..1  	|   	|   Room Medias     same structure medias      |
| roomTypes/roomType/Object/valuableAttribute       		| 0..1  	|   	|   Room Attributes.  same structure hotelAttributes       |
| medias        			| 0..1  	| Medias   	|                                               |
| medias/media        			| 0..1  	| Media   	|                                               |
| medias/media/Object       			| 1..n  	| Media   	|                                               |
| medias/media/Object/context      			| 0..1  	| Media   	|                                               |
| medias/media/Object/context/Object 		| 1..n  	|  	|                                               |
| medias/media/Object/context/Object/contextItem 		| 1  	|  	|                                         |
| medias/media/Object/context/Object/contextItem/Object 		| 1..n  	|  	|                    |
| medias/media/Object/context/Object/contextItem/Object/code 		| 0..1  	|  	|               |
| medias/media/Object/context/Object/contextItem/Object/id 		| 1  	|  	|                    |
| medias/media/Object/context/Object/contextItem/Object/parentRefId 		| 0..1  	|  	|                   |
| medias/media/Object/context/Object/contextItem/Object/schema 		| 0..1  	|  	|                        |
| medias/media/Object/context/Object/contextItem/Object/text 		| 0..1  	|  	|                        |
| medias/media/Object/context/Object/contextItem/Object/text/Object 		| 0..1  	|  	|                |
| medias/media/Object/context/Object/contextItem/Object/text/Object/languageCode | 0..1| | |
| medias/media/Object/context/Object/contextItem/Object/text/Object/name | 0..1 | | |
| medias/media/Object/context/Object/contextItem/Object/text/Object/description | 0..1 | | |
| medias/media/Object/valuableAattribute      			| 0..1  	| Media   	|                                               |
| medias/media/Object/photos      			| 0..1  	| Photos   	|                                               |
| medias/media/Object/photos/photo      			| 0..1  	| Photo   	|                                               |
| medias/media/Object/photos/photo/Object     			| 1..n  	|    	|                                               |
| medias/media/Object/photos/photo/Object/witdh     			| 0..1  	|    	|                                               |
| medias/media/Object/photos/photo/Object/height    			| 0..1 	|    	|                                               |
| medias/media/Object/photos/photo/Object/thumbnail   			| 0..1 	|    	|                                               |
| medias/media/Object/photos/photo/Object/url    			| 0..1  	|    	|                                               |
| medias/media/Object/videos      			| 0..1  	| Photos   	|                                               |
| medias/media/Object/videos/video      			| 0..1  	| Photo   	|                                               |
| medias/media/Object/videos/video/Object     			| 1..n  	|    	|                                               |
| medias/media/Object/videos/video/Object/url    			| 0..1  	|    	|                                               |
| medias/media/Object/others      			| 0..1  	| Photos   	|                                               |
| medias/media/Object/others/other      			| 0..1  	| Photo   	|                                               |
| medias/media/Object/others/other/Object     			| 1..n  	|    	|                                               |
| medias/media/Object/others/other/Object/url    			| 0..1  	|    	|                                               |

### Response Format


The result retrieves the details for the hotel requested:

-   Hotel Summary (standard for all suppliers).
-   Hotel Attributes.
-   Hotel Descriptions.
-   Hotel Medias.
-   Room Summary (standard for all providers).
-   Room Attributes.
-   Room Descriptions.
-   Room Medias.



### Hotel Summary


Defines the hotel information received from the supplier.

**Property Type** :

 -  This item contains code and text_ from the hotel category provider. (
   i.e. Hotel, ApartHotel, ...).

 - In the DescriptiveInfoExtendedRS Example_.

 -  Hotel has category Hotel which in providers side is specified by code
   1 ( Notice that no language code is sent, that means that the provider
   don't specify it ).

**Chains**

- Contains the chains infromation from the provider, it could be
 returned in 2 ways:
 
   1.  By code And Name.
 
   2.  By data.
 
- You can find code in data code field and value as a
 multiLanguage Value in data value field.



### Room Summary


Typified room information from the provider.

Room Name is multiLanguage text_ field.

Name example:

~~~json
{
    "name" : {
        "text" : [
            {
                "languageCode" : "en_US",
                "value" : "Standard Room"
            },
            {
                "languageCode" : "es_ES",
                "value" : "Habitación estándar"
            }
        ]
    }
}
~~~



### Attributes




| **Element**	| **Number**	| **Type**	| **Description**	|
| ------------- | ------------- | ------------- | --------------------- |
| Attribute 	|        	|           	|                       |
| @Context 	| 1..n   	| Context 	| contextItem           |
| @Data    	| 1      	| Data    	| data                  |

Attribute is defined as every element returned in the provider response
which is not either *Descriptions* or *Medias*.

Example:

~~~json
{
    "hotelAttributes" : [
        {
            "context" : [
                {
                    "contextItem" : [
                        {
                            "id" : "HotelSummary",
                            "parentRefId" : "",
                            "Schema" : "Null",
                            "text" : [
                                {
                                    "languageCode" : "en",
                                    "name" : "HotelSummary",
                                    "description" : "Summary elements for the property returned"
                                },
                                {
                                    "languageCode" : "pt",
                                    "name" : "HotelSummary",
                                    "description" : "Elementos de resumo do estabelecimento retornado"
                                },
                                {
                                    "languageCode" : "es",
                                    "name" : "HotelSummary",
                                    "description" : "Los elementos de resumen de la propiedad que se devuelve."
                                }
                            ]
                        }
                    ]
                }
            ],
            "data" : {
                "id" : "HotelSummary#highRate",
                "type" : "eNumeric",
                "value" : [
                    {
                        "value" : "626.7603"
                    }
                ],
                "text" : [
                    {
                        "languageCode" : "en",
                        "name" : "highRate",
                        "description" : "Highest rate returned by the hotel in recent queries. This is a statistical figure and not necessarily a rate for current availability."
                    },
                    {
                        "languageCode" : "pt",
                        "name" : "highRate",
                        "description" : "Menor tarifa retornada pelo hotel em consultas recentes. Trata-se de um número estatístico e não é necessariamente uma tarifa para a disponibilidade atual."
                    },
                    {
                        "languageCode" : "es",
                        "name" : "highRate",
                        "description" : "La tarifa más alta que devuelve el hotel en consultas recientes. Se trata de una cifra estadística y no necesariamente de la tarifa para la disponibilidad actual."
                    }
                ]
            }
        }
    ]
}
~~~

-   Context explanation :

    There is 1 description with a contextItem child in HotelSummary (
    Summary elements for the property returned )

-   Data explanation (en) :

    Name "highRate" , description "Highest rate returned by the hotel
     in recent queries. This is a statistical figure and not
     necessarily a rate for current availability."
    
     Type: numeric
    
     Value: 626.7603



### Descriptions




| **Element**		| **Number**	| **Type**	| **Description**	|
| Description 		|        	|           	|                       |
| /Context 		| 1..n   	| Context 	| contextItem           |
| /Text    		| 1      	| Text    	| text                  |


Description is defined as every element returned in the provider
response which is a description (Hotel description, Room description,
Media description)

Example:

~~~json
{
    "description" : [
        {
            "context" : [
                {
                    "contextItem" : [
                        {
                            "id" : "HotelSummary#locationDescription",
                            "parentRefId" : "t:EXP:HotelSummary",
                            "Schema" : "Null",
                            "text" : [
                                {
                                    "languageCode" : "en",
                                    "name" : "locationDescription",
                                    "description" : "General location as entered by the property, e.g. \"Near Pike Place Market\""
                                },
                                {
                                    "languageCode" : "pt",
                                    "name" : "locationDescription",
                                    "description" : "Local geral inserido pelo estabelecimento (por exemplo, \"perto do mercado Pike Place\")"
                                },
                                {
                                    "languageCode" : "es",
                                    "name" : "locationDescription",
                                    "description" : "La propiedad introduce la ubicación general, por ejemplo, \"cerca del mercado Pike Place Market\"."
                                }
                            ]
                        },
                        {
                            "id" : "HotelSummary",
                            "parentRefId" : "",
                            "Schema" : "Null",
                            "text" : [
                                {
                                    "languageCode" : "en",
                                    "name" : "HotelSummary",
                                    "description" : "Summary elements for the property returned"
                                },
                                {
                                    "languageCode" : "pt",
                                    "name" : "HotelSummary",
                                    "description" : "Elementos de resumo do estabelecimento retornado"
                                },
                                {
                                    "languageCode" : "es",
                                    "name" : "HotelSummary",
                                    "description" : "Los elementos de resumen de la propiedad que se devuelve."
                                }
                            ]
                        }
                    ]
                }
            ],
            "text" : [
                {
                    "languageCode" : "en_US",
                    "value" : "Near Eloro Beach"
                },
                {
                    "languageCode" : "es_ES",
                    "value" : "A poca distancia de Playa Eloro"
                }
            ]
        }
    ]
}
~~~

-   Context explanation :

     There is 1 description with a contextItem child
     locationDescription and description : General location as entered
     by the property, e.g. "Near Pike Place Market" which it's parent
     is HotelSummary (Summary elements for the property returned)

-   Text explanation :

     The locationDescription has 2 text elements :
    
     en_US -\> Near Eloro Beach
    
     and
    
     es_ES -\> A poca distancia de Playa Eloro



### Medias




| **Element**			| **Number**	| **Type**	| **Description** 			|
| ----------------------------- | ------------- | ------------- | ------------------------------------- |
| Media       			|        	|          	|                                       |
| /id         			| 0..1   	| String 	| Media provider id                     |
| /Context    			| 1..n   	| Context 	| contextItem				|
| /ValuableAttribute 		| 0..n   	| Attributes 	| Attributes				|
| /Description 			| 0..1   	| Description 	| Descriptions                          |
| /Photos     			| 0..1   	|          	| Photos array                          |
| /Photos/photo 		| 1..n   	|          	|                                       |
| /Photo @width      		| 0..1   	| String 	| Photo width                           |
| /Photo @height     		| 0..1   	| String 	| Photo height                          |
| /Photo/Thumbnail 		| 1..n   	| Boolean 	| If true photo is specified as thumbnail |
| /Photos/Url 			| 1..n   	| String 	| Url                                   |
| /Videos     			| 0..1   	|          	| Videos array                          |
| /Videos/Video/Url 		| 1..n   	| String 	| Url                                   |
| /Others     			| 0..1   	|          	| Other Medias array                    |
| /Others/Other/Url 		| 1..n   	| String 	| Url                                   |



Example:

~~~json
{
    "medias" : {
        "media" : [
            {
                "id" : "5529023",
                "context" : [
                    {
                        "contextItem" : [
                            {
                                "code" : "0",
                                "id" : "HotelImage#Category#0",
                                "parentRefId" : "t:EXP:HotelImage",
                                "Schema" : "Null",
                                "text" : [
                                    {
                                        "languageCode" : "en",
                                        "name" : "Unknown"
                                    }
                                ]
                            },
                            {
                                "id" : "HotelImage",
                                "parentRefId" : "t:EXP:HotelImages",
                                "Schema" : "Null",
                                "text" : [
                                    {
                                        "languageCode" : "en",
                                        "name" : "HotelImage",
                                        "description" : "Contains elements for the URL and reference values for a single image."
                                    },
                                    {
                                        "languageCode" : "pt",
                                        "name" : "HotelImage",
                                        "description" : "Contém elementos relativos ao URL e a valores de referência para uma única imagem."
                                    },
                                    {
                                        "languageCode" : "es",
                                        "name" : "HotelImage",
                                        "description" : "Contiene elementos de los valores de referencia y URL de una sola imagen."
                                    }
                                ]
                            },
                            {
                                "id" : "HotelImages",
                                "parentRefId" : "",
                                "Schema" : "Null",
                                "text" : [
                                    {
                                        "languageCode" : "en",
                                        "name" : "HotelImages",
                                        "description" : "Contains all property images available. Does not contain room-level photos. Has size attribute to indicate the number of results contained. Review  image categorizations for more specific details about the data returned."
                                    },
                                    {
                                        "languageCode" : "pt",
                                        "name" : "HotelImages",
                                        "description" : "Contém todas as imagens do estabelecimento disponíveis. Não contém fotos dos quartos. Tem o atributo size para indicar o número de resultados contidos.Revise as  classificações de imagens para obter detalhes mais específicos sobre os dados retornados."
                                    },
                                    {
                                        "languageCode" : "es",
                                        "name" : "HotelImages",
                                        "description" : "Contiene todas las imágenes de propiedades disponibles. No contiene fotos de nivel de habitaciones. Tiene el atributo size para indicar el número de resultados que se devuelven.Consulte  las categorizaciones de imágenes para obtener más detalles específicos acerca de los datos que se devuelven."
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "contextItem" : [
                            {
                                "code" : "0",
                                "id" : "HotelImage#Type#0",
                                "parentRefId" : "t:EXP:HotelImage",
                                "Schema" : "Null",
                                "text" : [
                                    {
                                        "languageCode" : "en",
                                        "name" : "Unknown"
                                    }
                                ]
                            },
                            {
                                "id" : "HotelImage",
                                "parentRefId" : "t:EXP:HotelImages",
                                "Schema" : "Null",
                                "text" : [
                                    {
                                        "languageCode" : "en",
                                        "name" : "HotelImage",
                                        "description" : "Contains elements for the URL and reference values for a single image."
                                    },
                                    {
                                        "languageCode" : "pt",
                                        "name" : "HotelImage",
                                        "description" : "Contém elementos relativos ao URL e a valores de referência para uma única imagem."
                                    },
                                    {
                                        "languageCode" : "es",
                                        "name" : "HotelImage",
                                        "description" : "Contiene elementos de los valores de referencia y URL de una sola imagen."
                                    }
                                ]
                            },
                            {
                                "id" : "HotelImages",
                                "parentRefId" : "",
                                "Schema" : "Null",
                                "text" : [
                                    {
                                        "languageCode" : "en",
                                        "name" : "HotelImages",
                                        "description" : "Contains all property images available. Does not contain room-level photos. Has size attribute to indicate the number of results contained. Review  image categorizations for more specific details about the data returned."
                                    },
                                    {
                                        "languageCode" : "pt",
                                        "name" : "HotelImages",
                                        "description" : "Contém todas as imagens do estabelecimento disponíveis. Não contém fotos dos quartos. Tem o atributo size para indicar o número de resultados contidos.Revise as  classificações de imagens para obter detalhes mais específicos sobre os dados retornados."
                                    },
                                    {
                                        "languageCode" : "es",
                                        "name" : "HotelImages",
                                        "description" : "Contiene todas las imágenes de propiedades disponibles. No contiene fotos de nivel de habitaciones. Tiene el atributo size para indicar el número de resultados que se devuelven.Consulte  las categorizaciones de imágenes para obtener más detalles específicos acerca de los datos que se devuelven."
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "valuableAttribute" : [
                    {
                        "context" : [
                            {
                                "contextItem" : [
                                    {
                                        "id" : "HotelImage",
                                        "parentRefId" : "t:EXP:HotelImages",
                                        "Schema" : "Null",
                                        "text" : [
                                            {
                                                "languageCode" : "en",
                                                "name" : "HotelImage",
                                                "description" : "Contains elements for the URL and reference values for a single image."
                                            },
                                            {
                                                "languageCode" : "pt",
                                                "name" : "HotelImage",
                                                "description" : "Contém elementos relativos ao URL e a valores de referência para uma única imagem."
                                            },
                                            {
                                                "languageCode" : "es",
                                                "name" : "HotelImage",
                                                "description" : "Contiene elementos de los valores de referencia y URL de una sola imagen."
                                            }
                                        ]
                                    },
                                    {
                                        "id" : "HotelImages",
                                        "parentRefId" : "",
                                        "Schema" : "Null",
                                        "text" : [
                                            {
                                                "languageCode" : "en",
                                                "name" : "HotelImages",
                                                "description" : "Contains all property images available. Does not contain room-level photos. Has size attribute to indicate the number of results contained. Review  image categorizations for more specific details about the data returned."
                                            },
                                            {
                                                "languageCode" : "pt",
                                                "name" : "HotelImages",
                                                "description" : "Contém todas as imagens do estabelecimento disponíveis. Não contém fotos dos quartos. Tem o atributo size para indicar o número de resultados contidos.Revise as  classificações de imagens para obter detalhes mais específicos sobre os dados retornados."
                                            },
                                            {
                                                "languageCode" : "es",
                                                "name" : "HotelImages",
                                                "description" : "Contiene todas las imágenes de propiedades disponibles. No contiene fotos de nivel de habitaciones. Tiene el atributo size para indicar el número de resultados que se devuelven.Consulte  las categorizaciones de imágenes para obtener más detalles específicos acerca de los datos que se devuelven."
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        "data" : {
                            "id" : "HotelImage#supplierId",
                            "type" : "eNumeric",
                            "value" : [
                                {
                                    "value" : "13"
                                }
                            ],
                            "text" : [
                                {
                                    "languageCode" : "en",
                                    "name" : "supplierId",
                                    "description" : "Indicates the supplier of the image. Follows the same mapping as the Supplier element's ID attribute."
                                },
                                {
                                    "languageCode" : "pt",
                                    "name" : "supplierId",
                                    "description" : "Indica o fornecedor da imagem. Segue o mesmo mapeamento do atributo ID do elemento Supplier."
                                },
                                {
                                    "languageCode" : "es",
                                    "name" : "supplierId",
                                    "description" : "Indica el proveedor de la imagen. Sigue la misma asignación que la del atributo ID del elemento Supplier."
                                }
                            ]
                        }
                    }
                ],
                "description" : {
                    "context" : [
                        {
                            "contextItem" : [
                                {
                                    "id" : "HotelImage#caption",
                                    "parentRefId" : "t:EXP:HotelImage",
                                    "Schema" : "Null",
                                    "text" : [
                                        {
                                            "languageCode" : "en",
                                            "name" : "caption",
                                            "description" : "Description for the image"
                                        },
                                        {
                                            "languageCode" : "pt",
                                            "name" : "caption",
                                            "description" : "Descrição da imagem."
                                        },
                                        {
                                            "languageCode" : "es",
                                            "name" : "caption",
                                            "description" : "La descripción de la imagen."
                                        }
                                    ]
                                },
                                {
                                    "id" : "HotelImage",
                                    "parentRefId" : "t:EXP:HotelImages",
                                    "Schema" : "Null",
                                    "text" : [
                                        {
                                            "languageCode" : "en",
                                            "name" : "HotelImage",
                                            "description" : "Contains elements for the URL and reference values for a single image."
                                        },
                                        {
                                            "languageCode" : "pt",
                                            "name" : "HotelImage",
                                            "description" : "Contém elementos relativos ao URL e a valores de referência para uma única imagem."
                                        },
                                        {
                                            "languageCode" : "es",
                                            "name" : "HotelImage",
                                            "description" : "Contiene elementos de los valores de referencia y URL de una sola imagen."
                                        }
                                    ]
                                },
                                {
                                    "id" : "HotelImages",
                                    "parentRefId" : "",
                                    "Schema" : "Null",
                                    "text" : [
                                        {
                                            "languageCode" : "en",
                                            "name" : "HotelImages",
                                            "description" : "Contains all property images available. Does not contain room-level photos. Has size attribute to indicate the number of results contained. Review  image categorizations for more specific details about the data returned."
                                        },
                                        {
                                            "languageCode" : "pt",
                                            "name" : "HotelImages",
                                            "description" : "Contém todas as imagens do estabelecimento disponíveis. Não contém fotos dos quartos. Tem o atributo size para indicar o número de resultados contidos.Revise as  classificações de imagens para obter detalhes mais específicos sobre os dados retornados."
                                        },
                                        {
                                            "languageCode" : "es",
                                            "name" : "HotelImages",
                                            "description" : "Contiene todas las imágenes de propiedades disponibles. No contiene fotos de nivel de habitaciones. Tiene el atributo size para indicar el número de resultados que se devuelven.Consulte  las categorizaciones de imágenes para obtener más detalles específicos acerca de los datos que se devuelven."
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "text" : [
                        {
                            "languageCode" : "en_US",
                            "value" : "Aerial View"
                        },
                        {
                            "languageCode" : "es_ES",
                            "value" : "Aerial View"
                        }
                    ]
                },
                "photos" : {
                    "photo" : [
                        {
                            "witdh" : "350",
                            "height" : "350",
                            "thumbnail" : false,
                            "url" : "http://images.travelnow.com/hotels/4000000/3510000/3509600/3509541/3509541_21_b.jpg"
                        },
                        {
                            "thumbnail" : true,
                            "url" : "http://images.travelnow.com/hotels/4000000/3510000/3509600/3509541/3509541_21_t.jpg"
                        }
                    ]
                }
            }
        ]
    }
}
~~~

**Contains 1 element media :**

- **Child contextItems id:**

HotelImage#Category#0 (Unknown) , HotelImage#Type#0 (Unknown)

- **Context hierarchy:**

 HotelImage#Category#0 -\> HotelImage -\> HotelImages

 HotelImage#Type#0 -\> HotelImage -\> HotelImages

- **Attribute :**

HotelImage#supplierId = 13

- **Description:**

"Aerial View"

- **Item Photos :**

2 photos ( thumbnail and not thumbnail )



### ContextItem




| **Element**		| **Number**	| **Type** 	| **Description**	                         |
| --------------------- | ------------- | ------------- | ---------------------------------------------- |
| Context      		|       	| Context 	|                                                |
| /Context/contextItem 	| 1..n  	|         	|                                                |
| contextItem  		|       	|         	|                                                |
| /code        		| 0..1  	| String 	| Provider code	                                 |
| /id          		| 1     	| String 	| Unique id identifier                           |
| /parentRefId 		| 0..1  	| String  	| If this field is not null, exist in this context a contextItem with id = parentRefId. This field is used to build a context hierachy. |
| /Schema      		| 0..1  	|         	|                                                |
| /text        		| 1..n  	| Text  	| text: Providers explanation of the context.    |



ContextItem provide context information to each data / text and
Medias ( Attributes, Descriptions and Medias).

It can represent both provider typified data type (i.e. Media type
Exterior, Facility type bar/lounge...) and depth level of the provider
response (i.e. Attribute refers to a Property Amenity, Description -\>
text is the Hotel Long Description...).

Each context item is typified by:

*id*

parentRefId ( if parentRefId is not null, means that exist a contextItem
which is in a low depth and match it's Id with parentRefId that provide
more context information to the child element)

*text*

It can contain N child elements, child element is a contextItem that
it's id is not contained in other contexItem's -\> parentRefId (in the
same context)



### Data




| **Element**		| **Number**	| **Type**	| **Description**					|
| --------------------- | ------------- | ------------- | ----------------------------------------------------- |
| Data         		| 1     	| Data  	|	                                                |
| @type        		| 1     	| String 	| Available types : string, numeric, boolean, xml (for complex types). |
| /Code        		| 1     	| String 	| Providers Code  	                                |
| /Id          		| 1     	| String 	| Unique Id         	                                |
| /Value       		| 1     	| Value 	|  	                                                |
| /Value @languageCode  | 1     	| String 	| Value's language (if not returned, it fills in all langagues read below). |
| /Value/value 		| 1     	| String 	| Value of the element.     	                        |
| /Text        		| 1     	| Text  	| text 		                                        |



Data element is used to return the value of an item which is in the
context specified by the contextItem_ element.

**Different types:**

-   Boolean
-   Numeric
-   String
-   xml

*xml is only returned when we cannot parse a provider response element.
When xml is returned in type field, value element will be the raw xml
value of the provider.*

**Multilanguage value :**

There will be a value element for each language available for each element, languageCode is specified as attribute for each value

**Language not provided will be returned as default :**

There will be only 1 value element with languageCode set as "" or not being returned.



### Text




| **Element**		| **Number**	| **Type**	| **Description**					|
| --------------------- | ------------- | ------------- | ----------------------------------------------------- |
| Text         		|       	| Text  	|                                                       |
| @languageCode 	| 0..1 		| Text  	| languaceCode format: language_culture, culture could not be provided. |
| name         		| 1   		| Text  	| Text Name                                       	|
| description  		| 0..1 		| Text  	| Provider explanation of the context specyfied   	|
| value        		| 0..1 		| Text  	| This field is returned in the Descriptions text field. It refers to the description value. |



Description field is filled with the provider documentation or response
from the provider. It will be empty if the provider documentation /
response doesn't provide explanation of the element.

It is returned by each language Code available. If and contains name and
description of the element refered to.

See data section regarding Languages.


