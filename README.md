
# EThing JavaScript library

This JS library can talk to the EThing API. 


## Usage

### Node

If you have [node](http://nodejs.org/), you can install it with [npm](http://npmjs.org):

```
npm install ething-js
```

### Browser
Download the latest [ething.js for browser](https://raw.githubusercontent.com/e-thing/ething-js/master/dist/ething.js).

Or build your own version :

```
npm run build
```

## Documentation

See the [API](https://github.com/e-thing/ething-js/blob/master/api.md).

## Examples

```javascript
var EThing = require('ething-js');

// set your EThing server url here :
EThing.config.serverUrl = 'http://localhost:8000';

// using the default credentials
EThing.auth.setBasicAuth('ething', 'admin');

// list all your resources (Files, Devices, Tables ...)
EThing.list().done(function(resources){
	console.log('you have got '+resources.length+' resources');
}).fail(function(err){
	console.log(err);
});

```



## Dev

To generate the API documentation:
```
npm run docs
```



