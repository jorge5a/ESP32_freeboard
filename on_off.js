/*
 *  Simple HTTP dweet/freeboard example 
 instructions on https://docs.google.com/a/booqreaders.com/document/d/1Lw9ZT_4zGxO8Oz2h0YwKSW-yZHPHMfT2yfHDDs0oHj8/edit?usp=sharing
 */
#include <WiFiClient.h>
#include <ESP8266WiFi.h>


//your Wifi configuration
const char* ssid     = "ciclope1";  //you must change
const char* password = "secretxxx"; //you must change


// Your freeboard Switch my_thing_name
char* host="dweet.io";
String latest_path="/get/latest/dweet/for/";
String my_thing_name="jorge5a";//cambialo por tu THING NAME. Te dije que lo recodaras ;)


int pin;
WiFiClient client;
const int httpPort = 80;





void setup() {
  Serial.begin(115200);
  delay(100);

  // We start by connecting to a WiFi network

  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  
 startWifi();

  Serial.println("");
  Serial.println("WiFi connected");  
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());




    
  
}



void loop() {

 //Establece el valor del pin5 y del pin13 cada 10000 ms
 
putPinToState(5);
putPinToState(13);

delay(10000);
  
   
   }


uint8_t httpGET( int pin){
 String line="";

  if (!client.connect(host, 80)) {
    Serial.println("connection failed");
    startWifi();
    
  }
  
 
  
  // This will send the request to the server
  client.print(String("GET ") + latest_path + my_thing_name + "-"+ pin+ " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: close\r\n\r\n");
  delay(500);
  
  // Read all the lines of the reply from server 
  while(client.available()){
   line = client.readStringUntil('\r');

  }



 if (line.indexOf("off")>=0){ 
   Serial.print(" Pin "); Serial.print(pin) ; Serial.print (" established to "); Serial.println("Off");    
   return 0;
    }
    else {
      Serial.print("  Pin "); Serial.print(pin) ; Serial.print (" established to "); Serial.println("On");
      return 1;}
   
   
  
}

void putPinToState(int pin){

pinMode(pin,OUTPUT);
digitalWrite(pin,httpGET(pin));
}

void startWifi(){
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  }

 WiFiClient client;
const int httpPort = 80;





void setup() {
  Serial.begin(115200);
  delay(100);

  // We start by connecting to a WiFi network

  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  
 startWifi();

  Serial.println("");
  Serial.println("WiFi connected");  
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());




    
  
}



void loop() {

 char result[70];
  //We know index of gpio_0 and gpio_2 values
  //httpGET(host,readedValues).toCharArray(result,70);
//12 is index of gpio_0 value and 25 for gpio_2


putPinToState(2);
putPinToState(13);
  delay(5000);
  
   
   }


uint8_t httpGET( int pin){
 String line="";

  if (!client.connect(host, 80)) {
    Serial.println("connection failed");
    startWifi();
    
  }
  
 
  
  // This will send the request to the server
  client.print(String("GET ") + latest_path + my_thing_name + "-"+ pin+ " HTTP/1.1\r\n" +
               "Host: " + host + "\r\n" + 
               "Connection: close\r\n\r\n");
  delay(500);
  
  // Read all the lines of the reply from server 
  while(client.available()){
   line = client.readStringUntil('\r');

  }



 if (line.indexOf("off")>=0){ 
   Serial.print(" Pin "); Serial.print(pin) ; Serial.print (" established to "); Serial.println("Off");    
   return 0;
    }
    else {
      Serial.print("  Pin "); Serial.print(pin) ; Serial.print (" established to "); Serial.println("On");
      return 1;}
   
   
  
}

void putPinToState(int pin){

pinMode(pin,OUTPUT);
digitalWrite(pin,httpGET(pin));
}

void startWifi(){
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  }
