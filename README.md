## REACT TRAINING LIBRARY

This project contains resources to assist in the creation of a sample Internet banking app with some basic features

* view and basic interaction with a users bank accounts
* rudimentary messaging system

### Components

#### Fixtures

The fixtures are a basic data model that represents objects in the sample internet banking contect.
They randomly generate according to the model every time they are loaded

> `npm run build` builds the fixtures into the dist folder  

#### Stub server

The stub server is a basic express server that serves the same fixtures but from a RESTful JSON api.

> `npm run serve:stub` serves the stub api using the assets from the dist folder

> `npm run test:stub` runs the api tests against the stub api 
