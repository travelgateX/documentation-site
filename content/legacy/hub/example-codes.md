---
title: Example Code
keywords: example, codes
search: Hub - Example Code
sidebar: mydoc_sidebar
permalink: /docs/hub/example-codes
---

### Visual Basic .NET Example


~~~vb
Imports System.Net
Imports System.ServiceModel.Channels
Imports System.Security.Cryptography.X509Certificates
Imports System.Net.Security
Imports System.ServiceModel
Imports ClientWCF.ServiceReferenceHotelInsecure


Module ExampleConnectionVB

    Sub Main()
        HUB_Call()
    End Sub

    Public Sub HUB_Call()
        Dim timeout As Integer = 20000  'Runtime Setted
        Dim user As String = "xxx"  'Provided by XML Travelgate
        Dim pass As String = "xxx" 'Provided by XML Travelgate

        ''Conexin por HTTP
        Dim url As String = "http://hubhotelbatch.xmltravelgate.com/Service/Travel/v2/HotelBatch.svc"
        Dim binding As Binding
        binding = CreateBinding(timeout)

        ''Conexin por HTTPS
        'Dim url As String = "https://hubhotelbatch.xmltravelgate.com/Service/Travel/v2/HotelBatchSecure.svc"
        'Dim binding As Binding
        'binding = CreateBindingSecure(timeout)

        Dim epUri As New Uri(url)
        Dim endPoint As New EndpointAddress(epUri)

        'Ignoramos los certificados.
        ServicePointManager.ServerCertificateValidationCallback = New RemoteCertificateValidationCallback(AddressOf trustCertificatesCallback)

        Dim client As New ServiceReferenceHotelInsecure.ServiceHotelClient(binding, endPoint)

        'Credenciales
        client.ClientCredentials.UserName.UserName = user
        client.ClientCredentials.UserName.Password = pass

        Dim rs As New ServiceReferenceHotelInsecure.HotelListRS

                'Llamada de dispo
                Dim rq As New ServiceReferenceHotelInsecure.HotelListRQ

                rq.timeoutMilliseconds = timeout

                rq.providerRQ = New ProviderRQ()
                rq.providerRQ.id = "1"
                rq.providerRQ.code = "XXX"
                rq.providerRQ.rqXML = <HotelListRQ xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
                                          <timeoutMilliseconds>999999</timeoutMilliseconds>
                                          <source>
                                              <languageCode>es</languageCode>
                                          </source>
                                          <filterAuditData>
                                              <registerTransactions>false</registerTransactions>
                                          </filterAuditData>
                                          <Configuration>
                                              <User>xxx</User>
                                              <Password>xxx</Password>
                                              <UrlGeneric>xxx</UrlGeneric>
                                              <Parameters></Parameters>
                                          </Configuration>
                                      </HotelListRQ>

                rs = client.HotelList(rq)
    End Sub


    Private Function CreateBinding(ByVal timeoutMs As Integer) As System.ServiceModel.Channels.Binding
        Dim binding As New CustomBinding
        Dim sbe As SecurityBindingElement = SecurityBindingElement.CreateUserNameOverTransportBindingElement
        sbe.MessageSecurityVersion = MessageSecurityVersion.WSSecurity11WSTrustFebruary2005WSSecureConversationFebruary2005WSSecurityPolicy11BasicSecurityProfile10
        sbe.AllowInsecureTransport = True
        binding.Elements.Add(sbe)
        binding.Elements.Add(New TextMessageEncodingBindingElement(MessageVersion.Soap11, System.Text.Encoding.UTF8))
        Dim tr As New HttpTransportBindingElement()
        tr.MaxReceivedMessageSize = 999999999
        binding.Elements.Add(tr)
        Return binding
    End Function


    Private Function CreateBindingSecure(ByVal timeoutMs As Integer) As System.ServiceModel.Channels.Binding
        Dim binding As New BasicHttpBinding
        binding.Security.Mode = BasicHttpSecurityMode.TransportWithMessageCredential
        binding.Security.Message.ClientCredentialType = BasicHttpMessageCredentialType.UserName
        binding.MaxReceivedMessageSize = 65536 * 1000
        Return binding
    End Function


    Private Function trustCertificatesCallback(ByVal sender As Object, ByVal cert As X509Certificate, ByVal chain As X509Chain, ByVal errors As SslPolicyErrors) As Boolean
        Return True
    End Function

End Module
~~~



### C# Example


~~~csharp
using Microsoft.VisualBasic;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Net;
using System.ServiceModel.Channels;
using System.Security.Cryptography.X509Certificates;
using System.Net.Security;
using System.ServiceModel;
using ClientC.ServiceReferenceHotelInsecure;
using System.Xml.Linq;

namespace ClientC
{

    static class ExampleConnectionC
    {

        public static void Main()
        {
            HUB_Call();
        }

        public static void HUB_Call()
        {
            int timeout = 240000;
            string user = "xxx";
            string pass = "xxx";

            //Conexin por HTTP

            string url = "http://hubhotelbatch.xmltravelgate.com/Service/Travel/v2/HotelBatch.svc";
            Binding binding = default(Binding);
            binding = CreateBinding(timeout);

            //Conexin por HTTPS
            //Dim url As String = "https://hubhotelbatch.xmltravelgate.com/Service/Travel/v2/HotelBatchSecure.svc"
            //Dim binding As Binding
            //binding = CreateBindingSecure(timeout)

            Uri epUri = new Uri(url);
            EndpointAddress endPoint = new EndpointAddress(epUri);

            //Ignoramos los certificados.
            ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(trustCertificatesCallback);

            ServiceReferenceHotelInsecure.ServiceHotelClient client = new ServiceReferenceHotelInsecure.ServiceHotelClient(binding, endPoint);

            //Credenciales
            client.ClientCredentials.UserName.UserName = user;
            client.ClientCredentials.UserName.Password = pass;

            ServiceReferenceHotelInsecure.HotelListRS rs = new ServiceReferenceHotelInsecure.HotelListRS();

                    ServiceReferenceHotelInsecure.HotelListRQ rq = new ServiceReferenceHotelInsecure.HotelListRQ();

                    rq.timeoutMilliseconds = timeout;

                    rq.providerRQ = new ProviderRQ();
                    rq.providerRQ.id = "1";
                    rq.providerRQ.code = "XXX";
                    rq.providerRQ.rqXML = new XElement("HotelListRQ", new XElement("timeoutMilliseconds", "999999"), new XElement("source", new XElement("languageCode", "es")), new XElement("filterAuditData", new XElement("registerTransactions", "false")), new XElement("Configuration", new XElement("User", "xxx"), new XElement("Password", "xxx"), new XElement("UrlGeneric", "xxx"), new XElement("Parameters")));

                    rs = client.HotelList(rq);


        }

        private static System.ServiceModel.Channels.Binding CreateBinding(int timeoutMs)
        {
            CustomBinding binding = new CustomBinding();
            SecurityBindingElement sbe = SecurityBindingElement.CreateUserNameOverTransportBindingElement();
            sbe.MessageSecurityVersion = MessageSecurityVersion.WSSecurity11WSTrustFebruary2005WSSecureConversationFebruary2005WSSecurityPolicy11BasicSecurityProfile10;
            sbe.AllowInsecureTransport = true;
            binding.Elements.Add(sbe);
            binding.Elements.Add(new TextMessageEncodingBindingElement(MessageVersion.Soap11, System.Text.Encoding.UTF8));
            HttpTransportBindingElement tr = new HttpTransportBindingElement();
            tr.MaxReceivedMessageSize = 999999999;
            binding.Elements.Add(tr);
            return binding;
        }


        private static System.ServiceModel.Channels.Binding CreateBindingSecure(int timeoutMs)
        {
            BasicHttpBinding binding = new BasicHttpBinding();
            binding.Security.Mode = BasicHttpSecurityMode.TransportWithMessageCredential;
            binding.Security.Message.ClientCredentialType = BasicHttpMessageCredentialType.UserName;
            binding.MaxReceivedMessageSize = 65536 * 1000;
            return binding;
        }


        private static bool trustCertificatesCallback(object sender, X509Certificate cert, X509Chain chain, SslPolicyErrors errors)
        {
            return true;
        }

    }
}
~~~



### Java


~~~java

import com.xmltravelgate.schemas.hub._2012._06.*;
import javax.xml.ws.*;
import com.sun.xml.ws.client.BindingProviderProperties;
import java.io.StringReader;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import javax.xml.parsers.*;
import org.xml.sax.*;

public class ExampleConnectionJava {

    public static final int requestTimeoutMs = 60000;
    public static final int connectTimeouttMs = 5000;
    public static final String hubUser = "myHubUser";  //Provided by XML Travelgate
    public static final String hubPassword = "myHubPwd"; //Provided by XML Travelgate

    public static final String providerCode = "XXX";
    public static final String providerAgencyCode = "myAgency";
    public static final String providerUser = "myProviderUser";
    public static final String providerPassword = "myProviderPwd";
    public static final String providerUrlGeneric = "http://www.myurl.com/bookingservices.asmx";
    public static final String providerParamValueUrlEstaticos ="http://www.myurl.com/syncroservices.asmx";
    public static final String providerParamValueUrlInfoHoteles ="http://www.myurl.com/wshoteles/Service.asmx";

    public static final String url = "http://hubhotelbatch.xmltravelgate.com/Service/Travel/v2/HotelBatch.svc"; 

//wsimport http://hubhotelbatch.xmltravelgate.com/Service/Travel/v2/HotelBatch.svc?wsdl -keep
    public static void main(String[] args) throws Exception {

        String xmlRQStr = "<HotelListRQ xmlns:xsi = \"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd = \"http://www.w3.org/2001/XMLSchema\">" 
                                          + "<timeoutMilliseconds>" + String.valueOf( requestTimeoutMs-1000) + "</timeoutMilliseconds>"
                                          + "<source>"
                                          + " <agencyCode>" + providerAgencyCode + "</agencyCode>"
                                          + "<languageCode>es</languageCode>"
                                          + "</source>"
                                          + "<filterAuditData>"
                                          + "<registerTransactions>false</registerTransactions>"
                                          + "</filterAuditData>"
                                          + "<Configuration>"
                                          + "<User>" + providerUser + "</User>"
                                          + "<Password>" + providerPassword + "</Password>"
                                          + "<UrlGeneric>"+ providerUrlGeneric +"</UrlGeneric>"
                                          + "<Parameters>"
                                          + "<Parameter key=\"urlEstaticos\" value=\"" + providerParamValueUrlEstaticos + "\"/>"
                                          + "<Parameter key=\"urlInfoHoteles\" value=\"" + providerParamValueUrlInfoHoteles + "\"/>"
                                          + "</Parameters>"
                                          + "</Configuration>"
                                          + "</HotelListRQ>";

        HotelBatch service = new HotelBatch();

        //Customize user/password in SoapHeader using handler
        service.setHandlerResolver(new HotelServiceHandlerResolver());
        IServiceHotelBatch port = service.getInsecureHttpPort();
        BindingProvider bindingProvider = (BindingProvider) port;

        //Customize timeouts and url
        bindingProvider.getRequestContext().put(BindingProviderProperties.REQUEST_TIMEOUT,requestTimeoutMs);
        bindingProvider.getRequestContext().put(BindingProviderProperties.CONNECT_TIMEOUT,connectTimeouttMs);
        bindingProvider.getRequestContext().put(BindingProvider.ENDPOINT_ADDRESS_PROPERTY,url);

        HotelListRQ rq = new HotelListRQ();
        rq.setTimeoutMilliseconds(requestTimeoutMs - 500);

        ProviderRQ providerRQ = new ProviderRQ();
        providerRQ.setId("1");
        providerRQ.setCode( providerCode );
        ProviderRQ.RqXML rqXML = new ProviderRQ.RqXML();

        rqXML.setAny(parseXMLFromString( xmlRQStr ).getDocumentElement());

        providerRQ.setRqXML( rqXML);
        rq.setProviderRQ(providerRQ);
        HotelListRS rs =  port.hotelList(rq);
       System.out.println(rs.getProviderRS().getRs().getValue());
    }


    private static Document parseXMLFromString(String xml) throws Exception
    {
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        InputSource is = new InputSource(new StringReader(xml));
        return builder.parse(is);
    }
}
~~~



~~~java

import java.util.ArrayList;
import java.util.List;
import javax.xml.ws.handler.Handler;
import javax.xml.ws.handler.HandlerResolver;
import javax.xml.ws.handler.PortInfo;

public class HotelServiceHandlerResolver implements HandlerResolver {

    public List<Handler> getHandlerChain(PortInfo portInfo) {
          List<Handler> handlerChain = new ArrayList<Handler>();
          HotelServiceSOAPSecurityHandler hh = new HotelServiceSOAPSecurityHandler();
          handlerChain.add(hh);
          return handlerChain;
       }
    }


}
~~~



~~~java

import java.util.*;
import javax.xml.ws.handler.soap.*; 
import javax.xml.bind.annotation.XmlAnyElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.namespace.QName;
import javax.xml.ws.handler.MessageContext;
import javax.xml.soap.*; 

public class HotelServiceSOAPSecurityHandler implements SOAPHandler<SOAPMessageContext> { 


    public void close(MessageContext messagecontext) {
    }


    public boolean handleFault(SOAPMessageContext messagecontext) {
        return true;
    }

    public Set<QName> getHeaders() {
        final QName securityHeader = new QName(  
                "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd",  
                "Security", "wsse");  

        final HashSet headers = new HashSet();  
        headers.add(securityHeader);  

        return headers;  
    }

      public boolean handleMessage(SOAPMessageContext context){
            String prefixUri = "http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-";
            String uri = prefixUri + "wssecurity-secext-1.0.xsd";
            Boolean outboundProperty = (Boolean) context.get(MessageContext.MESSAGE_OUTBOUND_PROPERTY);
            if (outboundProperty.booleanValue()) {
                try {
                    SOAPEnvelope envelope = context.getMessage().getSOAPPart().getEnvelope();
                    SOAPFactory factory = SOAPFactory.newInstance();
                    String prefix = "wsse";
                    SOAPElement securityElem = factory.createElement("Security",prefix,uri);
                    SOAPElement tokenElem = factory.createElement("UsernameToken",prefix,uri);
                    SOAPElement userElem = factory.createElement("Username",prefix,uri);
                    userElem.addTextNode(ExampleConnectionJava.hubUser);
                    SOAPElement pwdElem = factory.createElement("Password",prefix,uri);
                    pwdElem.addTextNode(ExampleConnectionJava.hubPassword);
                    tokenElem.addChildElement(userElem);
                    tokenElem.addChildElement(pwdElem);
                    securityElem.addChildElement(tokenElem);

                    SOAPHeader header;
                    header = envelope.getHeader();
                    if (header == null){
                        header = envelope.addHeader();
                    }

                    header.addChildElement(securityElem);

                } catch (Exception e) {
                     e.printStackTrace();
                }
            }

            return outboundProperty;
        }
}
~~~



### PHP


### Hotel - Service HotelBatch - HotelList Method

~~~php

<?php 
//php.ini must include soap extension:  extension=php_soap.dll
$requestTimeoutMs = 60000; 
$connectTimeouttMs = 5000;
$hubUser = "myHubUser";  //Provided by XML Travelgate
$hubPassword = "myHubPwd"; //Provided by XML Travelgate
$providerCode = "XXX"; //Provided by XML Travelgate
$providerAgencyCode = "myAgency";  //Provided by XML Travelgate
$providerUser = "myProviderUser"; //Provided by Provider
$providerPassword = "myProviderPwd"; //Provided by Provider
$providerUrlGeneric = "http://www.myurl.com/bookingservices.asmx"; //Provided by Provider
$providerParamValueUrlEstaticos ="http://www.myurl.com/syncroservices.asmx"; //Provided by Provider
$providerParamValueUrlInfoHoteles = "http://www.myurl.com/wshoteles/Service.asmx"; //Provided by Provider

$url   = "http://hubhotelbatch.xmltravelgate.com/Service/Travel/v2/HotelBatch.svc";

$xmlRQStr = "<HotelListRQ xmlns:xsi = \"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd = \"http://www.w3.org/2001/XMLSchema\">" 
                                          ."<timeoutMilliseconds>".($requestTimeoutMs-1000)."</timeoutMilliseconds>"
                                          ."<source>"
                                          ." <agencyCode>".$providerAgencyCode."</agencyCode>"
                                          ."<languageCode>es</languageCode>"
                                          ."</source>"
                                          ."<filterAuditData>"
                                          ."<registerTransactions>false</registerTransactions>"
                                          ."</filterAuditData>"
                                          ."<Configuration>"
                                          ."<User>".$providerUser."</User>"
                                          ."<Password>".$providerPassword."</Password>"
                                          ."<UrlGeneric>".$providerUrlGeneric."</UrlGeneric>"
                                          ."<Parameters>"
                                          ."<Parameter key=\"urlEstaticos\" value=\"".$providerParamValueUrlEstaticos."\"/>"
                                          ."<Parameter key=\"urlInfoHoteles\" value=\"".$providerParamValueUrlInfoHoteles."\"/>"
                                          ."</Parameters>"
                                          ."</Configuration>"
                                          ."</HotelListRQ>";
//echo print_r($xmlRQStr, true); 
// Create the Security header 
$ns_s = 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd';
$node1 = new SoapVar($hubUser, XSD_STRING, null, null, 'Username', $ns_s);
$node2 = new SoapVar($hubPassword, XSD_STRING, null, null, 'Password', $ns_s);
$token = new SoapVar(array($node1,$node2), SOAP_ENC_OBJECT, null, null, 'UsernameToken', $ns_s);
$security = new SoapVar(array($token), SOAP_ENC_OBJECT, null, null, 'Security', $ns_s);
$header[] = new SOAPHeader($ns_s, 'Security', $security, false);

//Create SOAP Body Request
$ns_xtg = "http://schemas.xmltravelgate.com/hub/2012/06";
$nodeTimeoutMilliseconds = new SoapVar($requestTimeoutMs, XSD_STRING, null, null,"timeoutMilliseconds", $ns_xtg);
$nodeVersion = new SoapVar(1, XSD_STRING, null, null,"version", $ns_xtg);
$nodeCode = new SoapVar($providerCode, XSD_STRING, null, null,"code", $ns_xtg);
$nodeId = new SoapVar(1, XSD_STRING, null, null,"id", $ns_xtg);
$rqXMLSOAP = new SoapVar($xmlRQStr, XSD_ANYXML);
$nodeRqXML = new SoapVar(array($rqXMLSOAP), SOAP_ENC_OBJECT, null, null,"rqXML", $ns_xtg);
$nodeProviderRQ = new SoapVar(array($nodeCode,$nodeId,$nodeRqXML), SOAP_ENC_OBJECT, XSD_STRING, null, "providerRQ", $ns_xtg);
$hotelListRQ[] = new SoapVar(array($nodeTimeoutMilliseconds,$nodeVersion,$nodeProviderRQ), SOAP_ENC_OBJECT, null, null, "hotelListRQ", $ns_xtg);

// Create the SoapClient instance
$client     = new SoapClient(null, array("trace" => true,
                      "exception" => 0,
                       "location" => $url,
                       'compression' => SOAP_COMPRESSION_ACCEPT | SOAP_COMPRESSION_GZIP | SOAP_COMPRESSION_DEFLATE,
                       "connection_timeout" => $requestTimeoutMs,
                       "uri" =>  $ns_xtg,
                        'use' => SOAP_LITERAL));
// Call 
$result = $client->__soapCall("HotelList", $hotelListRQ, 
                        array("soapaction" => "http://schemas.xmltravelgate.com/hub/2012/06/IServiceHotelBatch/HotelList"),                                             $header); 

//Print the result
echo print_r($result, true);
?>
~~~



### Car - Availability Call 1..n providers in Request - Service Car - VehAvailRate Method


~~~php
<?php 
//php.ini must include soap extension:  extension=php_soap.dll
$requestTimeoutMs = 20000; 
$connectTimeouttMs = 2000;
$hubUser = "myHubUser";  //Provided by XML Travelgate
$hubPassword = "myHubPwd"; //Provided by XML Travelgate
$providerCode = "XXX"; //Provided by XML Travelgate
$providerAgencyCode = "myAgency";  //Provided by XML Travelgate
$providerUser = "myProviderUser"; //Provided by Provider
$providerPassword = "myProviderPwd"; //Provided by Provider
$providerUrlGeneric = "http://www.myurl.com/bookingservices.asmx"; //Provided by Provider
$providerParamValueGenericUrl ="http://www.myurl.com/syncroservices.asmx"; //Provided by Provider


$url   = "http://hubpublic.xmltravelgate.com/Service/Travel/v2/Car.svc";

$xmlRQStr = "<OTA_VehAvailRateRQ xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\">"
                ."<timeoutMilliseconds>".($requestTimeoutMs-1000)."</timeoutMilliseconds>"
                ."<filterAuditData>"
                ."  <registerTransactions>false</registerTransactions>"
                ."</filterAuditData>"
                ."<Configuration>"
                ."  <Credentials user = \"".$providerUser."\" password = ".$providerPassword.">"
                ."      <genericURL>".$providerUrlGeneric."</genericURL>"
                ."  </Credentials>"
                ."  <Attributes>"
                ."  </Attributes>"
                ."</Configuration>"
                ."<ClientConfiguration agency = ".$providerUser." SellCurrency = \"EUR\"/>"
                ."  <POS>"
                ."      <Source ISOCountry = \"ESP\">"
                ."          <RequestorID Type = \"LAN\" ID = \"es\"/>"
                ."      </Source>"
                ."  </POS>"
                ."  <VehAvailRQCore>"
                ."      <VehRentalCore PickUpDateTime = \"2014-05-29T09:30:00\" ReturnDateTime = \"2014-05-31T17:00:00\">"
                ."          <PickUpLocation LocationCode = \"4239\" CodeContext = \"IATA\"/>"
                ."          <ReturnLocation LocationCode = \"4239\" CodeContext = \"IATA\"/>"
                ."      </VehRentalCore>"
                ."      <DriverType Age = \"30\"/>"
                ."  </VehAvailRQCore>"
                ."  <VehAvailRQInfo>"
                ."      <Customer>"
                ."          <Primary>"
                ."              <CitizenCountryName Code = \"ES\"/>"
                ."          </Primary>"
                ."      </Customer>"
                ."  </VehAvailRQInfo>"
                ."</OTA_VehAvailRateRQ>";

// Create the Security header 
$ns_s = 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd';
$node1 = new SoapVar($hubUser, XSD_STRING, null, null, 'Username', $ns_s);
$node2 = new SoapVar($hubPassword, XSD_STRING, null, null, 'Password', $ns_s);
$token = new SoapVar(array($node1,$node2), SOAP_ENC_OBJECT, null, null, 'UsernameToken', $ns_s);
$security = new SoapVar(array($token), SOAP_ENC_OBJECT, null, null, 'Security', $ns_s);
$header[] = new SOAPHeader($ns_s, 'Security', $security, false);

//Create SOAP Body Request
$ns_xtg = "http://schemas.xmltravelgate.com/hub/2012/06";
$nodeTimeoutMilliseconds = new SoapVar($requestTimeoutMs, XSD_STRING, null, null,"timeoutMilliseconds", $ns_xtg);
$nodeVersion = new SoapVar(1, XSD_STRING, null, null,"version", $ns_xtg);
$nodeCode = new SoapVar($providerCode, XSD_STRING, null, null,"code", $ns_xtg);
$nodeId = new SoapVar(1, XSD_STRING, null, null,"id", $ns_xtg);
$rqXMLSOAP = new SoapVar($xmlRQStr, XSD_ANYXML);
$nodeRqXML = new SoapVar(array($rqXMLSOAP), SOAP_ENC_OBJECT, null, null,"rqXML", $ns_xtg);
$nodeProviderRQ = new SoapVar(array($nodeCode,$nodeId,$nodeRqXML), SOAP_ENC_OBJECT, XSD_STRING, null, "ProviderRQ", $ns_xtg);
$nodeProviderRQs = new SoapVar(array($nodeCode,$nodeId,$nodeProviderRQ), SOAP_ENC_OBJECT, XSD_STRING, null, "providerRQs", $ns_xtg);
$VehAvailRateRQ[] = new SoapVar(array($nodeTimeoutMilliseconds,$nodeVersion,$nodeProviderRQs), SOAP_ENC_OBJECT, null, null, "vehAvailRateRQ", $ns_xtg);

// Create the SoapClient instance
$client     = new SoapClient(null, array("trace" => true,
                      "exception" => 0,
                       "location" => $url,
                       'compression' => SOAP_COMPRESSION_ACCEPT | SOAP_COMPRESSION_GZIP | SOAP_COMPRESSION_DEFLATE,
                       "connection_timeout" => $requestTimeoutMs,
                       "uri" =>  $ns_xtg,
                        'use' => SOAP_LITERAL));

// Call 
$result = $client->__soapCall("OTA_VehAvailRate", $VehAvailRateRQ,  
                        array("soapaction" => "http://schemas.xmltravelgate.com/hub/2012/06/IServiceCar/OTA_VehAvailRate"),$header); 

?>
~~~



### Car - Common Call 1 provider in Request - Service Car - VehRateRule Method

~~~php
<?php 
//php.ini must include soap extension:  extension=php_soap.dll

//Values configured by client, tipically runtime calculated
$requestTimeoutMs = 15000;
$connectTimeouttMs = 2000; 

//Values provided by XMLTravelgate
$xtgHubUrl   = "http://hubpublic.xmltravelgate.com/Service/Travel/v2/Car.svc";
$hubUser = "your_hubuser";
$hubPassword = "your_hubpassword"; 
$providerCode = "XXX"; 
$providerAgencyCode = "your_agencyCode"; 


//Values provided by Provider (Supplier)
$providerUser = "your_providerUser"; 
$providerPassword = "your_providerPassword"; 
$providerUrlGeneric = "your_providerGenericUrl"; 
$agency = "your_providerAgency";

//Parameters depending provider to use
$attribute1Value = "your_attribute_1_value";
$attribute2Value = "your_attribute_2_value";
$attribute3Value = "your_attribute_3_value";
$attribute4Value = "your_attribute_4_value";


//Values regarding XMLTravelgate WebService SOAP method to use
$soapOperation = "OTA_VehRateRule";
$soapMessage = "vehRateRuleRQ";
$soapAction ="http://schemas.xmltravelgate.com/hub/2012/06/IServiceCar/OTA_VehRateRule";


$xmlRQStr = "<OTA_VehRateRuleRQ xmlns:xsi = \"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd = \"http://www.w3.org/2001/XMLSchema\">" 
                                          ."<timeoutMilliseconds>".($requestTimeoutMs-1000)."</timeoutMilliseconds>"
                                          ."<filterAuditData>"
                                          ."  <registerTransactions>false</registerTransactions>"
                                          ."</filterAuditData>"
                                          ."<Configuration>"
                                          ."  <Credentials user=\"".$providerUser."\" password=\"".$providerPassword."\">"
                                          ."          <genericURL>".$providerUrlGeneric."</genericURL>"
                                          ."          <identificationURL></identificationURL>"
                                          ."          <availRateURL></availRateURL>"
                                          ."          <vehResURL></vehResURL>"
                                          ."          <rateRuleURL></rateRuleURL>"
                                          ."   </Credentials>"      
                                          ."   <Attributes>"
                                          ."       <Attribute key=\"CorpDiscountNmbr\" value=\"".$attribute1Value."\"/>"
                                          ."       <Attribute key=\"UserAutentication\" value=\"".$attribute2Value."\"/>"
                                          ."       <Attribute key=\"PassAutentication\" value=\"".$attribute3Value."\"/>"
                                          ."       <Attribute key=\"AgencyCode\" value=\"".$attribute4Value."\"/>"
                                          ."    </Attributes>"
                                          ."</Configuration>"
                                          ."  <ClientConfiguration agency=\"".$agency."\" SellCurrency=\"EUR\" />"
                                          ." <POS>"
                                          ."   <Source ISOCountry = \"ESP\">"
                                          ."      <RequestorID Type = \"LAN\" ID = \"es\"/>"
                                          ."    </Source>"
                                          ." </POS>"
                                          ." <RentalInfo Status = \"Available\">"
                                          ."    <VehRentalCore  PickUpDateTime = \"2014-05-15T09:30:00\" ReturnDateTime = \"2014-05-17T10:00:00\">"
                                          ."       <PickUpLocation LocationCode = \"7412\" CodeContext = \"OFFICE\"/>"
                                          ."       <ReturnLocation LocationCode = \"7412\" CodeContext = \"OFFICE\"/>"
                                          ." </VehRentalCore>"
                                          ." <VehicleInfo AirConditionInd=\"false\" TransmissionType=\"MANUAL\" VendorCarType=\"GB91M000@1@MCMN\">"
                                          ."   <VehType VehicleCategory = \"\" doorCount=\"3\"/>"
                                          ."   <VehMakeModel Name= \" - Renault Twingo\" Code=\"MCMN\"/>"
                                          ."</VehicleInfo>"
                                          ."<RateQualifier RateQualifier=\"GB91M000\"/>"
                                          ." <TPA_Extensions>"
                                          ."   <Attributes>"
                                          ."       <Attribute key=\"AvailabilityRow\" value=\"".$parameter1Value."\"/>"
                                          ."    </Attributes>"
                                          ." </TPA_Extensions>"
                                          ."</RentalInfo>"
                                          ."</OTA_VehRateRuleRQ>";

// Create the Security header 
$ns_s = 'http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd';
$node1 = new SoapVar($hubUser, XSD_STRING, null, null, 'Username', $ns_s);
$node2 = new SoapVar($hubPassword, XSD_STRING, null, null, 'Password', $ns_s);
$token = new SoapVar(array($node1,$node2), SOAP_ENC_OBJECT, null, null, 'UsernameToken', $ns_s);
$security = new SoapVar(array($token), SOAP_ENC_OBJECT, null, null, 'Security', $ns_s);
$header[] = new SOAPHeader($ns_s, 'Security', $security, false);

//Create SOAP Body Request
$ns_xtg = "http://schemas.xmltravelgate.com/hub/2012/06";
$nodeTimeoutMilliseconds = new SoapVar($requestTimeoutMs, XSD_STRING, null, null,"timeoutMilliseconds", $ns_xtg);
$nodeVersion = new SoapVar(1, XSD_STRING, null, null,"version", $ns_xtg);
$nodeCode = new SoapVar($providerCode, XSD_STRING, null, null,"code", $ns_xtg);
$nodeId = new SoapVar(1, XSD_STRING, null, null,"id", $ns_xtg);
$rqXMLSOAP = new SoapVar($xmlRQStr, XSD_ANYXML);
$nodeRqXML = new SoapVar(array($rqXMLSOAP), SOAP_ENC_OBJECT, null, null,"rqXML", $ns_xtg);
$nodeProviderRQ = new SoapVar(array($nodeCode,$nodeId,$nodeRqXML), SOAP_ENC_OBJECT, XSD_STRING, null, "providerRQ", $ns_xtg);
$rq[] = new SoapVar(array($nodeTimeoutMilliseconds,$nodeVersion,$nodeProviderRQ), SOAP_ENC_OBJECT, null, null, $soapMessage, $ns_xtg);

// Create the SoapClient instance
$client     = new SoapClient(null, array("trace" => true,
                       "exception" => 0,
                       "location" => $xtgHubUrl,
                       "compression" => SOAP_COMPRESSION_ACCEPT | SOAP_COMPRESSION_GZIP | SOAP_COMPRESSION_DEFLATE,
                       "connection_timeout" => $requestTimeoutMs,
                       "uri" =>  $ns_xtg,
                       "use" => SOAP_LITERAL));
// Call 
$result = $client->__soapCall($soapOperation, $rq, 
                        array("soapaction" => $soapAction),                                             
                        $header); 

//Print the result
echo print_r($result, true);
?>
~~~


