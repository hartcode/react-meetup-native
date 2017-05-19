[![Build Status](https://travis-ci.org/hartcode/react-meetup-native.svg?branch=master)](https://travis-ci.org/hartcode/react-meetup-native)
[![Code Climate](https://codeclimate.com/github/hartcode/react-meetup-native/badges/gpa.svg)](https://codeclimate.com/github/hartcode/react-meetup-native)
[![Test Coverage](https://codeclimate.com/github/hartcode/react-meetup-native/badges/coverage.svg)](https://codeclimate.com/github/hartcode/react-meetup-native/coverage)
![Dependencies](https://david-dm.org/hartcode/react-meetup-native.net.svg)
# react-meetup-native 
Basic example of taking a react/redux app and moving it to the andriod platform

#### Structure
There are two independent projects in this example.  
- A React Web application
  - We started out building a simple React web application to pull data using Etsy's APIs. 
- A React Native Android application
  - Here we've moved the React web application we built into an Android specific project running React Native


#### Etsy API
This is our API that retrieves data from Etsy.
```
> cd etsy-api
> npm install
> npm run build
> npm start
```
http://localhost:4090

=================
#### Etsy Search
This is the React Web application that displays the data from our Etsy API
```
> cd etsy-search
> npm install
> npm run build
> npm start
```
http://localhost:4080

=================
#### Native Android Example Application
```
> cd native
> npm install
> native-react run-android    # builds and deploys the android APK
> native-react start          # starts the react native bundler
```
