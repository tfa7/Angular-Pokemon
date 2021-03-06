# Angular Pokémon Demo

This is a basic Angular v9 project, demonstrating a few of the many powerful features Angular has to offer. 

## Project Requirments
Connect an app to <a href="https://pokeapi.co/" target="_blank">Poke Api</a>, and make the app desktop and mobile friendly.

## Live Demo

A live demo is available <a href="https://appdemo1.com" target="_blank">https://appdemo1.com</a>

## Screenshots

Available in the screenshots folder for both desktop and mobile.

## Why Angular

1. it is easy to work with
2. very little code needed to get the end result
3. has a large community for support 
4. comes with a good testing framework - jasmine and karma
5. good mobile ui/ux tools - Angular Material and Angular Flex Layout (see below)
6. developers have only to manage one application going forward

## Run Locally

To run this project locally:
1. download the repo
2. open command prompt (or any terminal) and change to the src directory 
3. in command prompt run "npm i" to install required packages 
4. after npm finishes run "ng serve"

The web application should then be available locally on http://localhost:4200/

## Project Details

This project was generated with <a href="https://github.com/angular/angular-cli" target="_blank">Angular CLI</a> version 9.

This project uses <a href="https://material.angular.io/" target="_blank">Angular-Material</a> and <a href="https://github.com/angular/flex-layout#readme" target="_blank">Angular Flex Layout</a>

## Development Details

### This project consists of 3 main components (in the components folder) 
1. pokemon-header: contains the mat-toolbar used for filtering
2. pokemon-detail: displays the Pokemon cards
3. pokemon-detail-modal: displays the selected Pokemon

One could keep the header and detail on one page but adhering to separation of concerns and single responsibility principle, both were placed in separate components. This makes it easier to manage and test. The observer behavioral design pattern was implemented for sharing the filtering service, this ensures the respective components are in sync by allowing components to subscribe to the 'PokemonFilterService'.

### The services folder contains the following
1. api: contains the api calls to Poke Api plus, using Facade design pattern a resolver service caches the pokemon types from the api call
2. behaviour-services: used to keep track of the Pokemon filters, and to sync this data between the pokemon-header and pokemon-detail components
3. guards: currently only used for changing the page title but these are more commonly used for security


### The pipes folder contains the filters for 
1. search text 
2. types

Pipes allow code to be reused

### The data-models contains 
1. the models to match the api requests

### The styles folders contains 
Several scss pages that are imported in to the main "styles.scss" file
1. custom.scss: global css styling
2. loading-ball.scss: a nice UI/UX component, displayed while waiting for an api response
3. material-custom.scss: changes to angular material base styling. This is usefuly if one decides to upgrade the project.
4. var.scss: colour variables for the global core theme styling

## Testing
No tests were created for this project.
