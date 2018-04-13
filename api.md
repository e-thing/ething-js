## Members

<dl>
<dt><a href="#EThing">EThing</a></dt>
<dd><p>EThing - javascript API of the EThing project</p></dd>
</dl>

## Objects

<dl>
<dt><a href="#EThing">EThing</a> : <code>object</code></dt>
<dd><p>Contains all eThing API classes and functions.</p></dd>
</dl>

<a name="EThing"></a>

## EThing
<p>EThing - javascript API of the EThing project</p>

**Kind**: global variable  
**Version**: v0.1.0  

* [EThing](#EThing)
    * [.App](#EThing.App) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new App(json)](#new_EThing.App_new)
        * _instance_
            * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * _static_
            * [.App#size()](#EThing.App.App+size) ⇒ <code>number</code>
            * [.App#iconLink([auth])](#EThing.App.App+iconLink) ⇒ <code>string</code> \| <code>null</code>
            * [.App#getContentUrl([auth])](#EThing.App.App+getContentUrl) ⇒ <code>string</code>
            * [.App#contentModifiedDate()](#EThing.App.App+contentModifiedDate) ⇒ <code>Date</code>
            * [.App#scope()](#EThing.App.App+scope) ⇒ <code>string</code>
            * [.App#version()](#EThing.App.App+version) ⇒ <code>string</code>
            * [.App#read([callback])](#EThing.App.App+read) ⇒ [<code>App</code>](#EThing.App)
            * [.App#write(data, [callback])](#EThing.App.App+write) ⇒ [<code>App</code>](#EThing.App)
            * [.create(attributes, [callback])](#EThing.App.create) ⇒ <code>Deferred</code>
    * [.Folder](#EThing.Folder) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new EThing.Folder(json)](#new_EThing.Folder_new)
        * [.ls](#EThing.Folder+ls) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.remove([callback])](#EThing.Folder+remove) ⇒ [<code>Folder</code>](#EThing.Folder)
        * [.children([filter])](#EThing.Folder+children) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.find([filter])](#EThing.Folder+find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.findOne([filter])](#EThing.Folder+findOne) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
        * [.length()](#EThing.Folder+length) ⇒ <code>number</code>
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * [.File](#EThing.File) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new File(json)](#new_EThing.File_new)
        * _instance_
            * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * _static_
            * [.File#size()](#EThing.File.File+size) ⇒ <code>number</code>
            * [.File#expireAfter()](#EThing.File.File+expireAfter) ⇒ <code>number</code> \| <code>null</code>
            * [.File#mime()](#EThing.File.File+mime) ⇒ <code>string</code>
            * [.File#contentModifiedDate()](#EThing.File.File+contentModifiedDate) ⇒ <code>Date</code>
            * [.File#thumbnailLink([auth])](#EThing.File.File+thumbnailLink) ⇒ <code>string</code> \| <code>null</code>
            * [.File#getContentUrl([auth])](#EThing.File.File+getContentUrl) ⇒ <code>string</code>
            * [.File#isText()](#EThing.File.File+isText) ⇒ <code>boolean</code>
            * [.File#isScript()](#EThing.File.File+isScript) ⇒ <code>boolean</code>
            * [.File#execute([arguments], [callback])](#EThing.File.File+execute) ⇒ [<code>File</code>](#EThing.File)
            * [.File#read([binary], [callback])](#EThing.File.File+read) ⇒ [<code>File</code>](#EThing.File)
            * [.File#write(data, [callback])](#EThing.File.File+write) ⇒ [<code>File</code>](#EThing.File)
            * [.create(attributes, [callback])](#EThing.File.create) ⇒ <code>Deferred</code>
    * [.Resource](#EThing.Resource)
        * [new Resource(json)](#new_EThing.Resource_new)
        * _instance_
            * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * _static_
            * [.Resource#json()](#EThing.Resource.Resource+json) ⇒ <code>object</code>
            * [.Resource#isTypeof(type)](#EThing.Resource.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.Resource#name()](#EThing.Resource.Resource+name) ⇒ <code>string</code>
            * [.Resource#dirname()](#EThing.Resource.Resource+dirname) ⇒ <code>string</code>
            * [.Resource#basename()](#EThing.Resource.Resource+basename) ⇒ <code>string</code>
            * [.Resource#extension()](#EThing.Resource.Resource+extension) ⇒ <code>string</code>
            * [.Resource#id()](#EThing.Resource.Resource+id) ⇒ <code>string</code>
            * [.Resource#createdBy()](#EThing.Resource.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.Resource#type()](#EThing.Resource.Resource+type) ⇒ <code>string</code>
            * [.Resource#types()](#EThing.Resource.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.Resource#baseType()](#EThing.Resource.Resource+baseType) ⇒ <code>string</code>
            * [.Resource#createdDate()](#EThing.Resource.Resource+createdDate) ⇒ <code>Date</code>
            * [.Resource#modifiedDate()](#EThing.Resource.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.Resource#public()](#EThing.Resource.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.Resource#data([name], [defaultValue])](#EThing.Resource.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.Resource#attr([name])](#EThing.Resource.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.Resource#hasAttr(name)](#EThing.Resource.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.Resource#description()](#EThing.Resource.Resource+description) ⇒ <code>string</code>
            * [.Resource#remove([removeChildren], [callback])](#EThing.Resource.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.Resource#set(properties, [callback])](#EThing.Resource.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.Resource#setData(data, [callback])](#EThing.Resource.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * [.Rule](#EThing.Rule) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new Rule(json)](#new_EThing.Rule_new)
        * _instance_
            * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * _static_
            * [.Rule#enabled()](#EThing.Rule.Rule+enabled) ⇒ <code>boolean</code>
            * [.Resource#script()](#EThing.Rule.Resource+script) ⇒ <code>string</code>
            * [.Resource#event()](#EThing.Rule.Resource+event) ⇒ <code>object</code>
            * [.Rule#scriptReturnCode()](#EThing.Rule.Rule+scriptReturnCode) ⇒ <code>number</code>
            * [.Rule#scriptExecutionCount()](#EThing.Rule.Rule+scriptExecutionCount) ⇒ <code>number</code>
            * [.Rule#scriptExecutionDate()](#EThing.Rule.Rule+scriptExecutionDate) ⇒ <code>Date</code>
            * [.Rule#execute([callback])](#EThing.Rule.Rule+execute) ⇒ [<code>Rule</code>](#EThing.Rule)
            * [.create(attributes, [callback])](#EThing.Rule.create) ⇒ <code>Deferred</code>
    * [.Table](#EThing.Table) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new Table(json)](#new_EThing.Table_new)
        * _instance_
            * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * _static_
            * [.Table#length()](#EThing.Table.Table+length) ⇒ <code>number</code>
            * [.Table#maxLength()](#EThing.Table.Table+maxLength) ⇒ <code>number</code> \| <code>null</code>
            * [.Table#expireAfter()](#EThing.Table.Table+expireAfter) ⇒ <code>number</code>
            * [.Table#keys()](#EThing.Table.Table+keys) ⇒ <code>Array.&lt;string&gt;</code>
            * [.Table#contentModifiedDate()](#EThing.Table.Table+contentModifiedDate) ⇒ <code>Date</code>
            * [.Table#select([options], [callback])](#EThing.Table.Table+select) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#computeStatistics(key, [query], [callback])](#EThing.Table.Table+computeStatistics) ⇒ <code>Object</code>
            * [.Table#removeRow(id, [callback])](#EThing.Table.Table+removeRow) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#replaceRow(data, [callback])](#EThing.Table.Table+replaceRow) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#findOneAndReplace(query, data, [upsert], [callback])](#EThing.Table.Table+findOneAndReplace) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#insert(data, [invalid_field], [callback])](#EThing.Table.Table+insert) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#import(data, [invalid_field], [skip_error], [callback])](#EThing.Table.Table+import) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#getContentUrl([auth])](#EThing.Table.Table+getContentUrl) ⇒ <code>string</code>
            * [.create(attributes, [callback])](#EThing.Table.create) ⇒ <code>Deferred</code>
    * [.on](#EThing.on)
    * [.off](#EThing.off)
    * [.one](#EThing.one)
    * [.trigger](#EThing.trigger)
    * [.arbo](#EThing.arbo) : <code>object</code>
        * [.load([callback], [force])](#EThing.arbo.load) ⇒ <code>Deferred</code>
        * [.findOneById(id)](#EThing.arbo.findOneById) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * [.find([filter])](#EThing.arbo.find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.findOne([filter])](#EThing.arbo.findOne) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
        * [.list()](#EThing.arbo.list) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.isLoaded()](#EThing.arbo.isLoaded) ⇒ <code>boolean</code>
        * [.root()](#EThing.arbo.root) ⇒ [<code>Folder</code>](#EThing.Folder) \| <code>null</code>
    * [.auth](#EThing.auth) : <code>object</code>
        * [.isAuthenticated()](#EThing.auth.isAuthenticated) ⇒ <code>boolean</code>
        * [.getApp()](#EThing.auth.getApp) ⇒ [<code>App</code>](#EThing.App)
        * [.getDevice()](#EThing.auth.getDevice) ⇒ <code>EThing.Device</code>
        * [.getResource()](#EThing.auth.getResource) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.getScope()](#EThing.auth.getScope) ⇒ <code>string</code>
        * [.reset()](#EThing.auth.reset)
    * [.request(options, [callback])](#EThing.request) ⇒ <code>Deferred</code>
    * [.apiRequestPrefilter()](#EThing.apiRequestPrefilter)
    * [.ajaxSend(handler)](#EThing.ajaxSend)
    * [.ajaxComplete(handler)](#EThing.ajaxComplete)
    * [.ajaxSuccess(handler)](#EThing.ajaxSuccess)
    * [.ajaxError(handler)](#EThing.ajaxError)
    * [.list([query], [callback])](#EThing.list) ⇒ <code>Deferred</code>
    * [.get(resourceIdentifier, [callback])](#EThing.get) ⇒ <code>Deferred</code>
    * [.usage([callback])](#EThing.usage) ⇒ <code>Deferred</code>
    * [.initialize(options, [errorFn])](#EThing.initialize) ⇒ <code>Deferred</code>
    * [.authenticated(callback)](#EThing.authenticated)
    * [.notify([subject], message, [callback])](#EThing.notify) ⇒ <code>Deferred</code>
    * ["ething.resource.removed"](#EThing.event_ething.resource.removed)
    * ["ething.file.created"](#EThing.event_ething.file.created)
    * ["ething.table.created"](#EThing.event_ething.table.created)
    * ["ething.device.created"](#EThing.event_ething.device.created)
    * ["ething.app.created"](#EThing.event_ething.app.created)
    * ["ething.authenticated"](#EThing.event_ething.authenticated)

<a name="EThing.App"></a>

### EThing.App ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The App resource handle an application</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.App](#EThing.App) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new App(json)](#new_EThing.App_new)
    * _instance_
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * _static_
        * [.App#size()](#EThing.App.App+size) ⇒ <code>number</code>
        * [.App#iconLink([auth])](#EThing.App.App+iconLink) ⇒ <code>string</code> \| <code>null</code>
        * [.App#getContentUrl([auth])](#EThing.App.App+getContentUrl) ⇒ <code>string</code>
        * [.App#contentModifiedDate()](#EThing.App.App+contentModifiedDate) ⇒ <code>Date</code>
        * [.App#scope()](#EThing.App.App+scope) ⇒ <code>string</code>
        * [.App#version()](#EThing.App.App+version) ⇒ <code>string</code>
        * [.App#read([callback])](#EThing.App.App+read) ⇒ [<code>App</code>](#EThing.App)
        * [.App#write(data, [callback])](#EThing.App.App+write) ⇒ [<code>App</code>](#EThing.App)
        * [.create(attributes, [callback])](#EThing.App.create) ⇒ <code>Deferred</code>

<a name="new_EThing.App_new"></a>

#### new App(json)
<p>Constructs an App instance from an object decribing an application. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+parent"></a>

#### app.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.App.App+size"></a>

#### App.App#size() ⇒ <code>number</code>
<p>Returns the size of this application in bytes.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  
<a name="EThing.App.App+iconLink"></a>

#### App.App#iconLink([auth]) ⇒ <code>string</code> \| <code>null</code>
<p>If this application has an icon, it returns his link, else it returns null.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// the simple way
var image = new Image();
image.src = imageFile.iconLink(true);
document.body.appendChild(image);

// the hard way
EThing.request({
  url: imageFile.iconLink(),
  dataType: "blob"
}).done(function(blobData){
  // success
  var image = new Image();
  image.src = window.URL.createObjectURL( blobData );
  
  document.body.appendChild(image);
});
```
<a name="EThing.App.App+getContentUrl"></a>

#### App.App#getContentUrl([auth]) ⇒ <code>string</code>
<p>Returns the link to access the content.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// using EThing.request() :
EThing.request(app.getContentUrl()).done(function(content){
  // success
  console.log('content as text : '+content);
});
```
<a name="EThing.App.App+contentModifiedDate"></a>

#### App.App#contentModifiedDate() ⇒ <code>Date</code>
<p>Last time the content of this resource was modified</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  
<a name="EThing.App.App+scope"></a>

#### App.App#scope() ⇒ <code>string</code>
<p>Return the scope of this app.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  
<a name="EThing.App.App+version"></a>

#### App.App#version() ⇒ <code>string</code>
<p>Return the version of this app or null if this app is not versioned.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  
<a name="EThing.App.App+read"></a>

#### App.App#read([callback]) ⇒ [<code>App</code>](#EThing.App)
<p>Gets the code of this application in text/html.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**Returns**: [<code>App</code>](#EThing.App) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.App}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.App.App+write"></a>

#### App.App#write(data, [callback]) ⇒ [<code>App</code>](#EThing.App)
<p>Writes some HTML script in this application. Only available for [editable app](EThing.App#isEditable)</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**Returns**: [<code>App</code>](#EThing.App) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.App}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | <p>the full HTML script</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.App.create"></a>

#### App.create(attributes, [callback]) ⇒ <code>Deferred</code>
<p>Creates a new Application from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the application</li>
<li>description {string} a string describing this application </li>
<li>data {object} key/value pairs to attach to this application</li>
<li>content {string} the full base64 encoded script</li>
<li>icon {string} the base64 encoded icon of this application</li>
</ul>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  
**Emits**: <code>EThing#ething.app.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.App.create({
  name: "myApp",
  content: "<html><body>hello world !</body></html>",
  icon: <icon_data>, // File, Blob, ArrayBuffer or base64 string
  scope: "resource:read profile:read",
}).done(function(resource){
    console.log('the new app can be accessed through : ' + resource.url());
})
```
<a name="EThing.Folder"></a>

### EThing.Folder ⇐ [<code>Resource</code>](#EThing.Resource)
**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.Folder](#EThing.Folder) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new EThing.Folder(json)](#new_EThing.Folder_new)
    * [.ls](#EThing.Folder+ls) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.remove([callback])](#EThing.Folder+remove) ⇒ [<code>Folder</code>](#EThing.Folder)
    * [.children([filter])](#EThing.Folder+children) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.find([filter])](#EThing.Folder+find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.findOne([filter])](#EThing.Folder+findOne) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
    * [.length()](#EThing.Folder+length) ⇒ <code>number</code>
    * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>

<a name="new_EThing.Folder_new"></a>

#### new EThing.Folder(json)
<p>This class is used in the [arbo](#EThing.arbo) library. It emulates a tree structure using folders.</p>


| Param | Type |
| --- | --- |
| json | <code>Object</code> | 

<a name="EThing.Folder+ls"></a>

#### folder.ls ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>Synonym of [children](#EThing.Folder+children)</p>

**Kind**: instance property of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Folder}</code>  
<a name="EThing.Folder+remove"></a>

#### folder.remove([callback]) ⇒ [<code>Folder</code>](#EThing.Folder)
<p>Remove all the resources under this folder.</p>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**Returns**: [<code>Folder</code>](#EThing.Folder) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Folder}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>function executed once the folder is removed</p> |

<a name="EThing.Folder+children"></a>

#### folder.children([filter]) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>List the resources and folders immediately located in this folder. This method only travels a single level down the tree.
See the method [find](#EThing.Folder+find) to traverse down multiple levels to select descendant elements (grandchildren, etc.).</p>
<p>A filter can be provided, his type must be one of the following :</p>
<ul>
<li>function : function to test each resource. Invoked with arguments (EThing.Resource, relativeName). Return true to keep the resource, false otherwise.</li>
<li>string : only the resources that match the given relative name are returned (note: two resource can have the same name).</li>
<li>string[] : only the resources that match the given relative names are returned.</li>
<li>RegExp : only the resources satisfying this regular expression is returned.</li>
</ul>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Folder}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>function</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>RegExp</code> | <p>if set, only the resources that match the filter are returned.</p> |

<a name="EThing.Folder+find"></a>

#### folder.find([filter]) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>List the resources and folders under this folder.
The find() and [children](#EThing.Folder+children) methods are similar, except that the latter only travels a single level down the tree.</p>
<p>A filter can be provided, his type must be one of the following :</p>
<ul>
<li>function : function to test each resource. Invoked with arguments (EThing.Resource, relativeName). Return true to keep the resource, false otherwise.</li>
<li>string : only the resources that match the given relative name are returned (note: two resource can have the same name).</li>
<li>string[] : only the resources that match the given relative names are returned.</li>
<li>RegExp : only the resources satisfying this regular expression is returned.</li>
</ul>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Folder}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>function</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>RegExp</code> | <p>if set, only the resources that match the filter are returned.</p> |

<a name="EThing.Folder+findOne"></a>

#### folder.findOne([filter]) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
<p>Same as [find](#EThing.Folder+find) except that it will return only one result (the first resource that match the filter) or null if nothing was found.
See [find](#EThing.Folder+find) for more details about the argument.</p>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Folder}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>function</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>RegExp</code> | <p>if set, only the first resource that match the filter is returned.</p> |

<a name="EThing.Folder+length"></a>

#### folder.length() ⇒ <code>number</code>
<p>Returns the number of immediate children.</p>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Folder}</code>  
<a name="EThing.Resource+parent"></a>

#### folder.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.File"></a>

### EThing.File ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The File resource handle regular file such as image or text</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.File](#EThing.File) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new File(json)](#new_EThing.File_new)
    * _instance_
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * _static_
        * [.File#size()](#EThing.File.File+size) ⇒ <code>number</code>
        * [.File#expireAfter()](#EThing.File.File+expireAfter) ⇒ <code>number</code> \| <code>null</code>
        * [.File#mime()](#EThing.File.File+mime) ⇒ <code>string</code>
        * [.File#contentModifiedDate()](#EThing.File.File+contentModifiedDate) ⇒ <code>Date</code>
        * [.File#thumbnailLink([auth])](#EThing.File.File+thumbnailLink) ⇒ <code>string</code> \| <code>null</code>
        * [.File#getContentUrl([auth])](#EThing.File.File+getContentUrl) ⇒ <code>string</code>
        * [.File#isText()](#EThing.File.File+isText) ⇒ <code>boolean</code>
        * [.File#isScript()](#EThing.File.File+isScript) ⇒ <code>boolean</code>
        * [.File#execute([arguments], [callback])](#EThing.File.File+execute) ⇒ [<code>File</code>](#EThing.File)
        * [.File#read([binary], [callback])](#EThing.File.File+read) ⇒ [<code>File</code>](#EThing.File)
        * [.File#write(data, [callback])](#EThing.File.File+write) ⇒ [<code>File</code>](#EThing.File)
        * [.create(attributes, [callback])](#EThing.File.create) ⇒ <code>Deferred</code>

<a name="new_EThing.File_new"></a>

#### new File(json)
<p>Constructs a File instance from an object decribing a file. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+parent"></a>

#### file.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.File.File+size"></a>

#### File.File#size() ⇒ <code>number</code>
<p>Returns the size of this file in bytes.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+expireAfter"></a>

#### File.File#expireAfter() ⇒ <code>number</code> \| <code>null</code>
<p>Returns the amount of seconds after the last update after which this file is removed automatically, or null if this feature is not enable (no time limit).</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+mime"></a>

#### File.File#mime() ⇒ <code>string</code>
<p>Returns the MIME type of this file</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+contentModifiedDate"></a>

#### File.File#contentModifiedDate() ⇒ <code>Date</code>
<p>Last time the content of this resource was modified</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+thumbnailLink"></a>

#### File.File#thumbnailLink([auth]) ⇒ <code>string</code> \| <code>null</code>
<p>If this file has a thumbnail (thumbnail is only available for file with MIME type <strong>image/*</strong>), it returns his link, else it returns null.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// the simple way
var image = new Image();
image.src = imageFile.thumbnailLink(true);
document.body.appendChild(image);

// the hard way
EThing.request({
  url: imageFile.thumbnailLink(),
  dataType: "blob"
}).done(function(blobData){
  // success
  var image = new Image();
  image.src = window.URL.createObjectURL( blobData );
  
  document.body.appendChild(image);
});
```
<a name="EThing.File.File+getContentUrl"></a>

#### File.File#getContentUrl([auth]) ⇒ <code>string</code>
<p>Returns the link to access the content.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// using EThing.request() :
EThing.request(file.getContentUrl()).done(function(content){
  // success
  console.log('content as text : '+content);
});

// HTML <img> Tag :
var image = new Image();
image.src = imageFile.getContentUrl(true);
document.body.appendChild(image);
```
<a name="EThing.File.File+isText"></a>

#### File.File#isText() ⇒ <code>boolean</code>
<p>Returns true if this file has text based content.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+isScript"></a>

#### File.File#isScript() ⇒ <code>boolean</code>
<p>Returns true if this file is a script.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+execute"></a>

#### File.File#execute([arguments], [callback]) ⇒ [<code>File</code>](#EThing.File)
<p>Execute a script file.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>File</code>](#EThing.File) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.File}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [arguments] | <code>string</code> | <p>a string containing the arguments</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
file.execute().done(function(result){
  // success
  console.log(result);
});
```
<a name="EThing.File.File+read"></a>

#### File.File#read([binary], [callback]) ⇒ [<code>File</code>](#EThing.File)
<p>Gets the content of this file as text or as binary data.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>File</code>](#EThing.File) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.File}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [binary] | <code>boolean</code> | <p>if true, return the content as binary data (as Blob in a browser, or Buffer in NodeJs)</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
file.read().done(function(content){
  // success
  console.log('content as text : '+content);
});

// browser :
file.read(true).done(function(contentAsBlob){
  // success
});

// NodeJs :
var fs = require("fs");
EThing.get('kDO5Fk4').done(function(resource){
	resource.read(true).done(function(data){
		// data : Buffer instance
		fs.writeFile(resource.basename(), data, function(){
			console.log('It\'s saved!');
		});
	});
});
```
<a name="EThing.File.File+write"></a>

#### File.File#write(data, [callback]) ⇒ [<code>File</code>](#EThing.File)
<p>Writes some content to this file.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>File</code>](#EThing.File) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.File}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> \| <code>blob</code> \| <code>arraybuffer</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
file.write("hello world !").done(function(){
  // success
});
```
<a name="EThing.File.create"></a>

#### File.create(attributes, [callback]) ⇒ <code>Deferred</code>
<p>Creates a new File from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the file</li>
<li>description {string} a string describing this file </li>
<li>data {object} key/value pairs to attach to this file</li>
<li>expireAfter {number} amount of seconds after the last update after which this file is removed automatically, 0 means unlimited. Default to 0.</li>
</ul>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  
**Emits**: <code>EThing#ething.file.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.File.create({
  name: "foobar.txt",
  description: "this is my file"
}).done(function(resource){
    console.log('file created : ' + resource.name());
})
```
<a name="EThing.Resource"></a>

### EThing.Resource
**Kind**: static class of [<code>EThing</code>](#EThing)  
**Access**: protected  

* [.Resource](#EThing.Resource)
    * [new Resource(json)](#new_EThing.Resource_new)
    * _instance_
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * _static_
        * [.Resource#json()](#EThing.Resource.Resource+json) ⇒ <code>object</code>
        * [.Resource#isTypeof(type)](#EThing.Resource.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.Resource#name()](#EThing.Resource.Resource+name) ⇒ <code>string</code>
        * [.Resource#dirname()](#EThing.Resource.Resource+dirname) ⇒ <code>string</code>
        * [.Resource#basename()](#EThing.Resource.Resource+basename) ⇒ <code>string</code>
        * [.Resource#extension()](#EThing.Resource.Resource+extension) ⇒ <code>string</code>
        * [.Resource#id()](#EThing.Resource.Resource+id) ⇒ <code>string</code>
        * [.Resource#createdBy()](#EThing.Resource.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.Resource#type()](#EThing.Resource.Resource+type) ⇒ <code>string</code>
        * [.Resource#types()](#EThing.Resource.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.Resource#baseType()](#EThing.Resource.Resource+baseType) ⇒ <code>string</code>
        * [.Resource#createdDate()](#EThing.Resource.Resource+createdDate) ⇒ <code>Date</code>
        * [.Resource#modifiedDate()](#EThing.Resource.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.Resource#public()](#EThing.Resource.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.Resource#data([name], [defaultValue])](#EThing.Resource.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.Resource#attr([name])](#EThing.Resource.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.Resource#hasAttr(name)](#EThing.Resource.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.Resource#description()](#EThing.Resource.Resource+description) ⇒ <code>string</code>
        * [.Resource#remove([removeChildren], [callback])](#EThing.Resource.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.Resource#set(properties, [callback])](#EThing.Resource.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.Resource#setData(data, [callback])](#EThing.Resource.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)

<a name="new_EThing.Resource_new"></a>

#### new Resource(json)
<p>Base class of all the resources</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+parent"></a>

#### resource.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+json"></a>

#### Resource.Resource#json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+isTypeof"></a>

#### Resource.Resource#isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource.Resource+name"></a>

#### Resource.Resource#name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [EThing.Resource#basename](EThing.Resource#basename).
To get only the PathName, see [EThing.Resource#dirname](EThing.Resource#dirname).</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+dirname"></a>

#### Resource.Resource#dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+basename"></a>

#### Resource.Resource#basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+extension"></a>

#### Resource.Resource#extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+id"></a>

#### Resource.Resource#id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+createdBy"></a>

#### Resource.Resource#createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+type"></a>

#### Resource.Resource#type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+types"></a>

#### Resource.Resource#types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+baseType"></a>

#### Resource.Resource#baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+createdDate"></a>

#### Resource.Resource#createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+modifiedDate"></a>

#### Resource.Resource#modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+public"></a>

#### Resource.Resource#public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+data"></a>

#### Resource.Resource#data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource.Resource+attr"></a>

#### Resource.Resource#attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource.Resource+hasAttr"></a>

#### Resource.Resource#hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource.Resource+description"></a>

#### Resource.Resource#description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+remove"></a>

#### Resource.Resource#remove([removeChildren], [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [removeChildren] | <code>Boolean</code> | <p>When true, the children are also removed. Default to false.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().done(function(){
  // the resource was successfully removed
});
```
<a name="EThing.Resource.Resource+set"></a>

#### Resource.Resource#set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({
  name: "newName.txt"
}).done(function(){
  console.log("the resource was successfully renamed to :"+this.name());
});
```
<a name="EThing.Resource.Resource+setData"></a>

#### Resource.Resource#setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({
  "key": "value"
}).done(function(){
  // success
});

// you can also write :
resource.setData("key", "value").done(function(){
  // success
});
```
<a name="EThing.Rule"></a>

### EThing.Rule ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The Rule resource handle an application</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.Rule](#EThing.Rule) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new Rule(json)](#new_EThing.Rule_new)
    * _instance_
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * _static_
        * [.Rule#enabled()](#EThing.Rule.Rule+enabled) ⇒ <code>boolean</code>
        * [.Resource#script()](#EThing.Rule.Resource+script) ⇒ <code>string</code>
        * [.Resource#event()](#EThing.Rule.Resource+event) ⇒ <code>object</code>
        * [.Rule#scriptReturnCode()](#EThing.Rule.Rule+scriptReturnCode) ⇒ <code>number</code>
        * [.Rule#scriptExecutionCount()](#EThing.Rule.Rule+scriptExecutionCount) ⇒ <code>number</code>
        * [.Rule#scriptExecutionDate()](#EThing.Rule.Rule+scriptExecutionDate) ⇒ <code>Date</code>
        * [.Rule#execute([callback])](#EThing.Rule.Rule+execute) ⇒ [<code>Rule</code>](#EThing.Rule)
        * [.create(attributes, [callback])](#EThing.Rule.create) ⇒ <code>Deferred</code>

<a name="new_EThing.Rule_new"></a>

#### new Rule(json)
<p>Constructs a Rule instance from an object decribing a rule. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+parent"></a>

#### rule.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Rule.Rule+enabled"></a>

#### Rule.Rule#enabled() ⇒ <code>boolean</code>
<p>Returns true if this rule is enabled.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Resource+script"></a>

#### Rule.Resource#script() ⇒ <code>string</code>
<p>Returns the id of the script file.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Resource+event"></a>

#### Rule.Resource#event() ⇒ <code>object</code>
<p>Returns an object describing the event.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Rule+scriptReturnCode"></a>

#### Rule.Rule#scriptReturnCode() ⇒ <code>number</code>
<p>Returns the last exit code returned by the script of this rule.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Rule+scriptExecutionCount"></a>

#### Rule.Rule#scriptExecutionCount() ⇒ <code>number</code>
<p>Returns the number of times this rule has been executed.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Rule+scriptExecutionDate"></a>

#### Rule.Rule#scriptExecutionDate() ⇒ <code>Date</code>
<p>Returns the last time this rule has been executed.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Rule+execute"></a>

#### Rule.Rule#execute([callback]) ⇒ [<code>Rule</code>](#EThing.Rule)
<p>Run this rule.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**Returns**: [<code>Rule</code>](#EThing.Rule) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Rule}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Rule.create"></a>

#### Rule.create(attributes, [callback]) ⇒ <code>Deferred</code>
<p>Creates a new Rule from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the rule</li>
<li>script {EThing.File} <strong>required</strong> the JavaScript code to be executed</li>
<li>event {object} <strong>required</strong> the event object describing when to execute this rule<ul>
<li>event.type {string} <strong>required</strong> the type name of the event (Timer, ResourceCreated, ...)</li>
<li>event.*  some options depending of the type of event</li>
</ul>
</li>
<li>script_args {string} an optional string holding the arguments to pass to the script</li>
</ul>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  
**Emits**: <code>EThing#ething.rule.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.Rule.create({
  name: "myRule",
  script: <script_id>,
  event: {
    type: 'ResourceCreated' // this rule will be fired each time a resource is created !
  }
}).done(function(resource){
    console.log('the new rule is created');
})
```
<a name="EThing.Table"></a>

### EThing.Table ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The Table resource handle data in rows and columns</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.Table](#EThing.Table) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new Table(json)](#new_EThing.Table_new)
    * _instance_
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * _static_
        * [.Table#length()](#EThing.Table.Table+length) ⇒ <code>number</code>
        * [.Table#maxLength()](#EThing.Table.Table+maxLength) ⇒ <code>number</code> \| <code>null</code>
        * [.Table#expireAfter()](#EThing.Table.Table+expireAfter) ⇒ <code>number</code>
        * [.Table#keys()](#EThing.Table.Table+keys) ⇒ <code>Array.&lt;string&gt;</code>
        * [.Table#contentModifiedDate()](#EThing.Table.Table+contentModifiedDate) ⇒ <code>Date</code>
        * [.Table#select([options], [callback])](#EThing.Table.Table+select) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#computeStatistics(key, [query], [callback])](#EThing.Table.Table+computeStatistics) ⇒ <code>Object</code>
        * [.Table#removeRow(id, [callback])](#EThing.Table.Table+removeRow) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#replaceRow(data, [callback])](#EThing.Table.Table+replaceRow) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#findOneAndReplace(query, data, [upsert], [callback])](#EThing.Table.Table+findOneAndReplace) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#insert(data, [invalid_field], [callback])](#EThing.Table.Table+insert) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#import(data, [invalid_field], [skip_error], [callback])](#EThing.Table.Table+import) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#getContentUrl([auth])](#EThing.Table.Table+getContentUrl) ⇒ <code>string</code>
        * [.create(attributes, [callback])](#EThing.Table.create) ⇒ <code>Deferred</code>

<a name="new_EThing.Table_new"></a>

#### new Table(json)
<p>Constructs a Table instance from an object decribing a table. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+parent"></a>

#### table.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Table.Table+length"></a>

#### Table.Table#length() ⇒ <code>number</code>
<p>The number of rows in this table</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table.Table+maxLength"></a>

#### Table.Table#maxLength() ⇒ <code>number</code> \| <code>null</code>
<p>The maximum number of rows allowed in this table. Returns null if this feature is disable (number of rows is unlimited).</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table.Table+expireAfter"></a>

#### Table.Table#expireAfter() ⇒ <code>number</code>
<p>Returns the amount of seconds after which a <strong>row</strong> is automatically removed, or null if this feature is not enable.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table.Table+keys"></a>

#### Table.Table#keys() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the keys in this table. <strong>The default keys (&quot;id&quot; and &quot;date&quot; are not listed)</strong>.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table.Table+contentModifiedDate"></a>

#### Table.Table#contentModifiedDate() ⇒ <code>Date</code>
<p>Last time the content of this resource was modified</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table.Table+select"></a>

#### Table.Table#select([options], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Returns rows.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | <p>Customize the selection</p> |
| [options.start] | <code>number</code> | <code>0</code> | <p>Position of the first rows to return. If start is negative, it starts from the end.</p> |
| [options.length] | <code>number</code> |  | <p>Maximum number of rows to return.</p> |
| [options.sort] | <code>string</code> |  | <p>The key on which to do the sorting, by default the sort is made by date.</p> |
| [options.query] | <code>string</code> |  | <p>A query string to filter the results.</p> |
| [options.fields] | <code>string</code> |  | <p>Fields of the results to return. If omitted, all the fields are returned.</p> |
| [options.datefmt] | <code>string</code> |  | <p>the format of the date field (values: &quot;RFC3339&quot;(default), &quot;TIMESTAMP&quot;, &quot;TIMESTAMP_MS&quot;, &quot;ISO8601&quot;, &quot;RSS&quot;).</p> |
| [callback] | <code>function</code> |  | <p>It is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// returns all the content of a table :
table.select().done(function(data){
  // success
});

// returns the last 10 rows sorted by the "foo" column :
table.select({start: -10, sort: "foo"}).done(function(data){
  // success
});
```
<a name="EThing.Table.Table+computeStatistics"></a>

#### Table.Table#computeStatistics(key, [query], [callback]) ⇒ <code>Object</code>
<p>Performs statistics on a specific column.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: <code>Object</code> - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | <p>The column name on which the statistics should be performed.</p> |
| [query] | <code>string</code> | <p>A query string to filter the data.</p> |
| [callback] | <code>function</code> | <p>It is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Table.Table+removeRow"></a>

#### Table.Table#removeRow(id, [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Removes one or multiple rows.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>The id of the row(s) to be removed</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// removes the last 10 rows :
table.select(-10).done(function(data){
  this.removeRow(data.map(function(row){
    return row.id;
  }));
});
```
<a name="EThing.Table.Table+replaceRow"></a>

#### Table.Table#replaceRow(data, [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Set new data to a row.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | <p>the data to be updated, it must contain the row id.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
table.replaceRow({
	 'id': 'g45Tdk4',
	 'value': 45
}).done(function(data){
  // updated !
});
```
<a name="EThing.Table.Table+findOneAndReplace"></a>

#### Table.Table#findOneAndReplace(query, data, [upsert], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Finds a single row matching the query and replaces it.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | <p>A query string to filter the data.</p> |
| data | <code>object</code> | <p>the new data.</p> |
| [upsert] | <code>boolean</code> | <p>If true, the data will be inserted if no match is found. (default to false).</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
table.findOneAndReplace("name=='foo'", {
	 'name': 'foo',
	 'value': 'bar'
}).done(function(table){
  // updated or inserted if not found !
});
```
<a name="EThing.Table.Table+insert"></a>

#### Table.Table#insert(data, [invalid_field], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Insert new data into the table. The data argument must be a key/value object.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [invalid_field] | <code>string</code> | <p>The behaviour to adopt when an invalid field name appears. The value must be one of the following : &quot;rename&quot;,&quot;stop&quot;,&quot;skip&quot;,&quot;none&quot;.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
table.insert({
  'field1': "foobar",
  'field2': 3.14,
  'field3': true
}).done(function(){
  // success
});
```
<a name="EThing.Table.Table+import"></a>

#### Table.Table#import(data, [invalid_field], [skip_error], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Replace the content of this table by a new set of data.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.
// copy table content
var tableSrc, tableDst;
tableSrc.select().done(function(data){
  tableDst.import(data);
});</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;object&gt;</code> |  |
| [invalid_field] | <code>string</code> | <p>The behaviour to adopt when an invalid field name appears. The value must be one of the following : &quot;rename&quot;,&quot;stop&quot;,&quot;skip&quot;,&quot;none&quot;.</p> |
| [skip_error] | <code>bool</code> | <p>Whether to skip data on error or not</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Table.Table+getContentUrl"></a>

#### Table.Table#getContentUrl([auth]) ⇒ <code>string</code>
<p>Returns the link to access the content.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// using EThing.request() :
EThing.request(table.getContentUrl()).done(function(rows){
  // success, rows is an array of object 
  console.log('number of rows : '+rows.length);
});

// or using jQuery :
$.getJSON(table.getContentUrl(true)).done(function(rows){
  // success
});
```
<a name="EThing.Table.create"></a>

#### Table.create(attributes, [callback]) ⇒ <code>Deferred</code>
<p>Creates a new Table from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the table</li>
<li>description {string} a string describing this table </li>
<li>data {object} key/value pairs to attach to this table</li>
<li>expireAfter {number} amount of seconds after which a row is automatically removed, 0 means unlimited. Default to 0.</li>
<li>maxLength {number} the maximum number of rows allowed in this table. 0 means unlimited. Default to 5000.</li>
</ul>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  
**Emits**: <code>EThing#ething.table.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get a resource by its id
EThing.Table.create({
  name: "foobar",
  expireAfter: 3600*24*7 // the data are automatically removed after 7 weeks
}).done(function(resource){
    console.log('table created : ' + resource.name());
})
```
<a name="EThing.on"></a>

### EThing.on
<p>register an handler to an event.</p>

**Kind**: static property of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | <p>event type string. Multiple space separated events can be given.</p> |
| handler | <code>function</code> | <p>the function to be called when the event has been triggered.</p> |

<a name="EThing.off"></a>

### EThing.off
<p>Remove an event handler.</p>

**Kind**: static property of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | <p>event type string. Multiple space separated events can be given.</p> |
| [handler] | <code>function</code> | <p>A handler function previously attached for the event(s)</p> |

<a name="EThing.one"></a>

### EThing.one
<p>register an handler to an event. The handler will be only executed once.</p>

**Kind**: static property of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | <p>event type string. Multiple space separated events can be given.</p> |
| handler | <code>function</code> | <p>the function to be called when the event has been triggered.</p> |

<a name="EThing.trigger"></a>

### EThing.trigger
<p>Execute all handlers attached for the given event type.</p>

**Kind**: static property of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> \| <code>EThing.Event</code> | <p>An event object instance or an event type string.</p> |
| [extraParameters] | <code>object</code> | <p>Additional parameters to pass along to the event handler.</p> |

<a name="EThing.arbo"></a>

### EThing.arbo : <code>object</code>
<p>This library helps to organise your resources in a tree structure.
Folders do not exist explicitly in eThing. But this library emulate it.
Every resource must have a name set. A name is composed of a pathname followed by a filename.
The pathname represent the folder where the file is located.</p>
<p>For instance, the following resources :</p>
<ul>
<li>dir1/file1.txt</li>
<li>dir1/file2.txt</li>
<li>dir2/file3.txt</li>
<li>file4.txt</li>
</ul>
<p>could be reorganized into folders:</p>
<pre class="prettyprint source"><code>root
 |
 +--dir1
 |    +---file1.txt
 |    +---file2.txt
 |
 +--dir2
 |    +---file3.txt
 |
 +--file4.txt</code></pre><p>This way, it is convenient to find all the resources located in the same folder.</p>

**Kind**: static namespace of [<code>EThing</code>](#EThing)  
**Example**  
```js
// list all the txt files in the dir1 folder
EThing.arbo.load(function(){
  // the next line may list Table that ends with ".txt"
  console.log(EThing.arbo.findOne('dir1').children(/\.txt/i));
  // better
  console.log(EThing.arbo.findOne('dir1').children(function(r){
    return (r instanceof EThing.File) && /\.txt/i.test(r.name());
  }));
})
```

* [.arbo](#EThing.arbo) : <code>object</code>
    * [.load([callback], [force])](#EThing.arbo.load) ⇒ <code>Deferred</code>
    * [.findOneById(id)](#EThing.arbo.findOneById) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * [.find([filter])](#EThing.arbo.find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.findOne([filter])](#EThing.arbo.findOne) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
    * [.list()](#EThing.arbo.list) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.isLoaded()](#EThing.arbo.isLoaded) ⇒ <code>boolean</code>
    * [.root()](#EThing.arbo.root) ⇒ [<code>Folder</code>](#EThing.Folder) \| <code>null</code>

<a name="EThing.arbo.load"></a>

#### arbo.load([callback], [force]) ⇒ <code>Deferred</code>
<p>Load all available resources.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/).</p>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>function executed once the resources are loaded</p> |
| [force] | <code>boolean</code> | <p>force to reload the entire resources</p> |

<a name="EThing.arbo.findOneById"></a>

#### arbo.findOneById(id) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Find a resource by its unique id. For all the resources except the Folder, the id is a 7 character alphanumeric string.
Since there is no duplicate name for folders, their id is equal to their name.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
**Returns**: [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code> - <p>return undefined if not found</p>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>7 character alphanumeric string for all resources except for Folders which is their name.</p> |

<a name="EThing.arbo.find"></a>

#### arbo.find([filter]) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>Returns a list of resources that pass the test implemented by the provided function or regular expression (as a string or a RegExp object).
The find() method creates a new array with all the resources that pass the test implemented by the provided first argument.</p>
<p>The test argument's type must be one of the following :</p>
<ul>
<li>function : function to test each resource. Invoked with arguments (EThing.Resource). Return true to keep the resource, false otherwise.</li>
<li>string : only the resources that match the given relative name are returned (note: two resource can have the same name).</li>
<li>string[] : only the resources that match the given relative names are returned.</li>
<li>RegExp : only the resources satisfying this regular expression is returned.</li>
<li>undefined : returns all the resources</li>
</ul>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>function</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>RegExp</code> | <p>only the resources that match the filter are returned.</p> |

<a name="EThing.arbo.findOne"></a>

#### arbo.findOne([filter]) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
<p>Same as [find](#EThing.arbo.find) except that it will return only one result (the first resource that match the filter) or null if nothing was found.
See [find](#EThing.arbo.find) for more details about the argument.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>function</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>RegExp</code> | <p>only the first resource that match the filter is returned.</p> |

<a name="EThing.arbo.list"></a>

#### arbo.list() ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>return all the resources. Same as [EThing.arbo.find()](#EThing.arbo.find).</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
<a name="EThing.arbo.isLoaded"></a>

#### arbo.isLoaded() ⇒ <code>boolean</code>
<p>Check if the resources are loaded (ie. if the [load](#EThing.arbo.load) function has been called and has returned).</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
<a name="EThing.arbo.root"></a>

#### arbo.root() ⇒ [<code>Folder</code>](#EThing.Folder) \| <code>null</code>
<p>Returns the root directory. If the [load](#EThing.arbo.load) function was not called before, this function will return null.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
<a name="EThing.auth"></a>

### EThing.auth : <code>object</code>
**Kind**: static namespace of [<code>EThing</code>](#EThing)  

* [.auth](#EThing.auth) : <code>object</code>
    * [.isAuthenticated()](#EThing.auth.isAuthenticated) ⇒ <code>boolean</code>
    * [.getApp()](#EThing.auth.getApp) ⇒ [<code>App</code>](#EThing.App)
    * [.getDevice()](#EThing.auth.getDevice) ⇒ <code>EThing.Device</code>
    * [.getResource()](#EThing.auth.getResource) ⇒ [<code>Resource</code>](#EThing.Resource)
    * [.getScope()](#EThing.auth.getScope) ⇒ <code>string</code>
    * [.reset()](#EThing.auth.reset)

<a name="EThing.auth.isAuthenticated"></a>

#### auth.isAuthenticated() ⇒ <code>boolean</code>
<p>Returns true if the authentication process has been successful.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
<a name="EThing.auth.getApp"></a>

#### auth.getApp() ⇒ [<code>App</code>](#EThing.App)
<p>Returns the authenticated app. Only available with app's apikey authentication.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
**Returns**: [<code>App</code>](#EThing.App) - <p>the authenticated app or null.</p>  
<a name="EThing.auth.getDevice"></a>

#### auth.getDevice() ⇒ <code>EThing.Device</code>
<p>Returns the authenticated app. Only available with devices's apikey authentication.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
**Returns**: <code>EThing.Device</code> - <p>the authenticated device or null.</p>  
<a name="EThing.auth.getResource"></a>

#### auth.getResource() ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Returns the authenticated resource. Only available with apikey authentication.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>the authenticated resource or null.</p>  
<a name="EThing.auth.getScope"></a>

#### auth.getScope() ⇒ <code>string</code>
<p>Returns the scope of the current authentication</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
**Returns**: <code>string</code> - <p>the scope. May be an empty string if no permissions is set. May be null if full permissions.</p>  
<a name="EThing.auth.reset"></a>

#### auth.reset()
<p>Reset authentication. You must restart an authentication process to make API calls again.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
<a name="EThing.request"></a>

### EThing.request(options, [callback]) ⇒ <code>Deferred</code>
<p>Make a HTTP request. The options object contains the following properties :</p>
<ul>
<li>url {string} <strong>required</strong> The url of the request. The API url will be prepended to relative URLs.</li>
<li>method {string} The HTTP request method to use. Default is GET.</li>
<li>data {string|object|Blob|ArrayBuffer|Buffer} The query string for GET request. The HTTP request body for POST|PATCH|PUT requests. If an object is given, it will be serialized into a query string.</li>
<li>contentType {string} When sending data to the server, use this content type. Default is 'application/octet-stream' if the data is an instance of ArrayBuffer or Buffer, if data is an instance of Blob, the default will be the type of the data itself, else 'application/x-www-form-urlencoded; charset=UTF-8'.</li>
<li>dataType {string} The type of data that you're expecting back from the server. See [XMLHttpRequest standard](http://xhr.spec.whatwg.org/#the-responsetype-attribute).</li>
<li>headers {object} Additional HTTP request headers.</li>
<li>context {object} The value of this provided for the call of the callbacks</li>
<li>converter {function(data,XHR)} A function that returns the transformed value of the response</li>
</ul>
<p>You may also give a callback as a second parameter. This callback is executed when the request is complete whether in failure or success.
On success, it receives the returned request data, as well as the XMLHttpRequest object.
On failure, the first parameter will be a Error object describing the error.
To check if a request is in failure :</p>
<pre><code>EThing.request(options,function(data,xhr){
    if(data instanceof EThing.Error){
      // an error occurs, print the associated message
      console.log(data.message);
    }
  })`
</code></pre>


<p>This function returns a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/) object.</p>
<p>The done|fail|always functions take the same parameters than the [jQuery version](http://api.jquery.com/category/deferred-object/).</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/)</p>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>string</code> \| <code>object</code> | <p>a set of key/value pairs that configure the request. If an URL is given, a GET request with the default options is made.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// GET request
EThing.request('/resources') // is equivalent to EThing.list()

// pass an object to make more complex request
// store some data in a file
EThing.request({
  url: '/files/'+fileId,
  method: 'PUT',
  data: 'some content here ...',
  contentType: 'text/plain'
})
.done(function(file){
  console.log("the content was stored in the file "+file.name());
})
.fail(function(error){
  console.log("an error occurs : "+error.message);
});
```
<a name="EThing.apiRequestPrefilter"></a>

### EThing.apiRequestPrefilter()
**Kind**: static method of [<code>EThing</code>](#EThing)  
<a name="EThing.ajaxSend"></a>

### EThing.ajaxSend(handler)
<p>Register a handler to be called just before API requests is sent.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | <p>The function to be invoked.</p> |

<a name="EThing.ajaxComplete"></a>

### EThing.ajaxComplete(handler)
<p>Register a handler to be called when API requests complete.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | <p>The function to be invoked.</p> |

<a name="EThing.ajaxSuccess"></a>

### EThing.ajaxSuccess(handler)
<p>Register a handler to be called when API requests complete successfully.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | <p>The function to be invoked.</p> |

<a name="EThing.ajaxError"></a>

### EThing.ajaxError(handler)
<p>Register a handler to be called when API requests complete with an error.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | <p>The function to be invoked.</p> |

<a name="EThing.list"></a>

### EThing.list([query], [callback]) ⇒ <code>Deferred</code>
<p>This function get the available resources. A filter may be given to retrieve resources with specific attributes (see the HTTP API for more details).</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  

| Param | Type | Description |
| --- | --- | --- |
| [query] | <code>string</code> | <p>Query string for searching resources</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get all the resources
EThing.list().done(function(resources){
    console.log(resources);
})

// get only File & Table resources
EThing.list('type == "File" or type == "Table"').done(function(resources){
    console.log(resources);
})
```
<a name="EThing.get"></a>

### EThing.get(resourceIdentifier, [callback]) ⇒ <code>Deferred</code>
<p>Gets a resource by its id.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  

| Param | Type | Description |
| --- | --- | --- |
| resourceIdentifier | <code>string</code> \| [<code>Resource</code>](#EThing.Resource) |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get a resource by its id
EThing.get("54516eb").done(function(resource){
    console.log('the name is ' + resource.name());
})
```
<a name="EThing.usage"></a>

### EThing.usage([callback]) ⇒ <code>Deferred</code>
<p>Gets an object containing informations about space usage :</p>
<ul>
<li>used {number} the amount of space used in bytes</li>
<li>quota_size {number} the maximum space authorized in bytes</li>
</ul>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get the occupied space :
EThing.usage().done(function(usage){
    console.log('space used : ' + (100 * usage.used / usage.quota_size) );
})
```
<a name="EThing.initialize"></a>

### EThing.initialize(options, [errorFn]) ⇒ <code>Deferred</code>
<p>Initialize the eThing library.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/)</p>  
**Emits**: <code>EThing#ething.event:authenticated</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.serverUrl | <code>number</code> | <p>The URL of your eThing server (e.g. http://hostname:8000 ).</p> |
| [options.apiKey] | <code>number</code> | <p>Authenticate with an API key.</p> |
| [options.login] | <code>number</code> | <p>Basic Authentication login (Should be used only server side i.e. NodeJS).</p> |
| [options.password] | <code>number</code> | <p>Basic Authentication password (Should be used only server side i.e. NodeJS).</p> |
| [errorFn] | <code>function</code> | <p>it is executed on authentication error.</p> |

**Example**  
```js
EThing.initialize({
   serverUrl: 'http://hostname:8000',
   apiKey: 'a4e28b3c-1f05-4a62-95f7-c12453b66b3c'
 }, function(){
   // on authentication success
   alert('connected !');
 }, function(error) {
   // on authentication error
   alert(error.message);
 });
```
<a name="EThing.authenticated"></a>

### EThing.authenticated(callback)
<p>Register a handler to be executed once the authentication is complete.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <p>it is executed on authentication success.</p> |

<a name="EThing.notify"></a>

### EThing.notify([subject], message, [callback]) ⇒ <code>Deferred</code>
<p>Send a notification.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  

| Param | Type | Description |
| --- | --- | --- |
| [subject] | <code>string</code> | <p>The subject of the notification</p> |
| message | <code>string</code> | <p>The message of the notification</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.notify("hello world")
  .done(function(){
    alert("A notification has been sent");
  })
```
<a name="EThing.event_ething.resource.removed"></a>

### "ething.resource.removed"
**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing.event_ething.file.created"></a>

### "ething.file.created"
**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing.event_ething.table.created"></a>

### "ething.table.created"
**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing.event_ething.device.created"></a>

### "ething.device.created"
**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing.event_ething.app.created"></a>

### "ething.app.created"
**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing.event_ething.authenticated"></a>

### "ething.authenticated"
<p>authenticated event.</p>

**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing"></a>

## EThing : <code>object</code>
<p>Contains all eThing API classes and functions.</p>

**Kind**: global namespace  

* [EThing](#EThing) : <code>object</code>
    * [.App](#EThing.App) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new App(json)](#new_EThing.App_new)
        * _instance_
            * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * _static_
            * [.App#size()](#EThing.App.App+size) ⇒ <code>number</code>
            * [.App#iconLink([auth])](#EThing.App.App+iconLink) ⇒ <code>string</code> \| <code>null</code>
            * [.App#getContentUrl([auth])](#EThing.App.App+getContentUrl) ⇒ <code>string</code>
            * [.App#contentModifiedDate()](#EThing.App.App+contentModifiedDate) ⇒ <code>Date</code>
            * [.App#scope()](#EThing.App.App+scope) ⇒ <code>string</code>
            * [.App#version()](#EThing.App.App+version) ⇒ <code>string</code>
            * [.App#read([callback])](#EThing.App.App+read) ⇒ [<code>App</code>](#EThing.App)
            * [.App#write(data, [callback])](#EThing.App.App+write) ⇒ [<code>App</code>](#EThing.App)
            * [.create(attributes, [callback])](#EThing.App.create) ⇒ <code>Deferred</code>
    * [.Folder](#EThing.Folder) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new EThing.Folder(json)](#new_EThing.Folder_new)
        * [.ls](#EThing.Folder+ls) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.remove([callback])](#EThing.Folder+remove) ⇒ [<code>Folder</code>](#EThing.Folder)
        * [.children([filter])](#EThing.Folder+children) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.find([filter])](#EThing.Folder+find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.findOne([filter])](#EThing.Folder+findOne) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
        * [.length()](#EThing.Folder+length) ⇒ <code>number</code>
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * [.File](#EThing.File) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new File(json)](#new_EThing.File_new)
        * _instance_
            * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * _static_
            * [.File#size()](#EThing.File.File+size) ⇒ <code>number</code>
            * [.File#expireAfter()](#EThing.File.File+expireAfter) ⇒ <code>number</code> \| <code>null</code>
            * [.File#mime()](#EThing.File.File+mime) ⇒ <code>string</code>
            * [.File#contentModifiedDate()](#EThing.File.File+contentModifiedDate) ⇒ <code>Date</code>
            * [.File#thumbnailLink([auth])](#EThing.File.File+thumbnailLink) ⇒ <code>string</code> \| <code>null</code>
            * [.File#getContentUrl([auth])](#EThing.File.File+getContentUrl) ⇒ <code>string</code>
            * [.File#isText()](#EThing.File.File+isText) ⇒ <code>boolean</code>
            * [.File#isScript()](#EThing.File.File+isScript) ⇒ <code>boolean</code>
            * [.File#execute([arguments], [callback])](#EThing.File.File+execute) ⇒ [<code>File</code>](#EThing.File)
            * [.File#read([binary], [callback])](#EThing.File.File+read) ⇒ [<code>File</code>](#EThing.File)
            * [.File#write(data, [callback])](#EThing.File.File+write) ⇒ [<code>File</code>](#EThing.File)
            * [.create(attributes, [callback])](#EThing.File.create) ⇒ <code>Deferred</code>
    * [.Resource](#EThing.Resource)
        * [new Resource(json)](#new_EThing.Resource_new)
        * _instance_
            * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * _static_
            * [.Resource#json()](#EThing.Resource.Resource+json) ⇒ <code>object</code>
            * [.Resource#isTypeof(type)](#EThing.Resource.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.Resource#name()](#EThing.Resource.Resource+name) ⇒ <code>string</code>
            * [.Resource#dirname()](#EThing.Resource.Resource+dirname) ⇒ <code>string</code>
            * [.Resource#basename()](#EThing.Resource.Resource+basename) ⇒ <code>string</code>
            * [.Resource#extension()](#EThing.Resource.Resource+extension) ⇒ <code>string</code>
            * [.Resource#id()](#EThing.Resource.Resource+id) ⇒ <code>string</code>
            * [.Resource#createdBy()](#EThing.Resource.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.Resource#type()](#EThing.Resource.Resource+type) ⇒ <code>string</code>
            * [.Resource#types()](#EThing.Resource.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.Resource#baseType()](#EThing.Resource.Resource+baseType) ⇒ <code>string</code>
            * [.Resource#createdDate()](#EThing.Resource.Resource+createdDate) ⇒ <code>Date</code>
            * [.Resource#modifiedDate()](#EThing.Resource.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.Resource#public()](#EThing.Resource.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.Resource#data([name], [defaultValue])](#EThing.Resource.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.Resource#attr([name])](#EThing.Resource.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.Resource#hasAttr(name)](#EThing.Resource.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.Resource#description()](#EThing.Resource.Resource+description) ⇒ <code>string</code>
            * [.Resource#remove([removeChildren], [callback])](#EThing.Resource.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.Resource#set(properties, [callback])](#EThing.Resource.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.Resource#setData(data, [callback])](#EThing.Resource.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * [.Rule](#EThing.Rule) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new Rule(json)](#new_EThing.Rule_new)
        * _instance_
            * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * _static_
            * [.Rule#enabled()](#EThing.Rule.Rule+enabled) ⇒ <code>boolean</code>
            * [.Resource#script()](#EThing.Rule.Resource+script) ⇒ <code>string</code>
            * [.Resource#event()](#EThing.Rule.Resource+event) ⇒ <code>object</code>
            * [.Rule#scriptReturnCode()](#EThing.Rule.Rule+scriptReturnCode) ⇒ <code>number</code>
            * [.Rule#scriptExecutionCount()](#EThing.Rule.Rule+scriptExecutionCount) ⇒ <code>number</code>
            * [.Rule#scriptExecutionDate()](#EThing.Rule.Rule+scriptExecutionDate) ⇒ <code>Date</code>
            * [.Rule#execute([callback])](#EThing.Rule.Rule+execute) ⇒ [<code>Rule</code>](#EThing.Rule)
            * [.create(attributes, [callback])](#EThing.Rule.create) ⇒ <code>Deferred</code>
    * [.Table](#EThing.Table) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new Table(json)](#new_EThing.Table_new)
        * _instance_
            * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * _static_
            * [.Table#length()](#EThing.Table.Table+length) ⇒ <code>number</code>
            * [.Table#maxLength()](#EThing.Table.Table+maxLength) ⇒ <code>number</code> \| <code>null</code>
            * [.Table#expireAfter()](#EThing.Table.Table+expireAfter) ⇒ <code>number</code>
            * [.Table#keys()](#EThing.Table.Table+keys) ⇒ <code>Array.&lt;string&gt;</code>
            * [.Table#contentModifiedDate()](#EThing.Table.Table+contentModifiedDate) ⇒ <code>Date</code>
            * [.Table#select([options], [callback])](#EThing.Table.Table+select) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#computeStatistics(key, [query], [callback])](#EThing.Table.Table+computeStatistics) ⇒ <code>Object</code>
            * [.Table#removeRow(id, [callback])](#EThing.Table.Table+removeRow) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#replaceRow(data, [callback])](#EThing.Table.Table+replaceRow) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#findOneAndReplace(query, data, [upsert], [callback])](#EThing.Table.Table+findOneAndReplace) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#insert(data, [invalid_field], [callback])](#EThing.Table.Table+insert) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#import(data, [invalid_field], [skip_error], [callback])](#EThing.Table.Table+import) ⇒ [<code>Table</code>](#EThing.Table)
            * [.Table#getContentUrl([auth])](#EThing.Table.Table+getContentUrl) ⇒ <code>string</code>
            * [.create(attributes, [callback])](#EThing.Table.create) ⇒ <code>Deferred</code>
    * [.on](#EThing.on)
    * [.off](#EThing.off)
    * [.one](#EThing.one)
    * [.trigger](#EThing.trigger)
    * [.arbo](#EThing.arbo) : <code>object</code>
        * [.load([callback], [force])](#EThing.arbo.load) ⇒ <code>Deferred</code>
        * [.findOneById(id)](#EThing.arbo.findOneById) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * [.find([filter])](#EThing.arbo.find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.findOne([filter])](#EThing.arbo.findOne) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
        * [.list()](#EThing.arbo.list) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.isLoaded()](#EThing.arbo.isLoaded) ⇒ <code>boolean</code>
        * [.root()](#EThing.arbo.root) ⇒ [<code>Folder</code>](#EThing.Folder) \| <code>null</code>
    * [.auth](#EThing.auth) : <code>object</code>
        * [.isAuthenticated()](#EThing.auth.isAuthenticated) ⇒ <code>boolean</code>
        * [.getApp()](#EThing.auth.getApp) ⇒ [<code>App</code>](#EThing.App)
        * [.getDevice()](#EThing.auth.getDevice) ⇒ <code>EThing.Device</code>
        * [.getResource()](#EThing.auth.getResource) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.getScope()](#EThing.auth.getScope) ⇒ <code>string</code>
        * [.reset()](#EThing.auth.reset)
    * [.request(options, [callback])](#EThing.request) ⇒ <code>Deferred</code>
    * [.apiRequestPrefilter()](#EThing.apiRequestPrefilter)
    * [.ajaxSend(handler)](#EThing.ajaxSend)
    * [.ajaxComplete(handler)](#EThing.ajaxComplete)
    * [.ajaxSuccess(handler)](#EThing.ajaxSuccess)
    * [.ajaxError(handler)](#EThing.ajaxError)
    * [.list([query], [callback])](#EThing.list) ⇒ <code>Deferred</code>
    * [.get(resourceIdentifier, [callback])](#EThing.get) ⇒ <code>Deferred</code>
    * [.usage([callback])](#EThing.usage) ⇒ <code>Deferred</code>
    * [.initialize(options, [errorFn])](#EThing.initialize) ⇒ <code>Deferred</code>
    * [.authenticated(callback)](#EThing.authenticated)
    * [.notify([subject], message, [callback])](#EThing.notify) ⇒ <code>Deferred</code>
    * ["ething.resource.removed"](#EThing.event_ething.resource.removed)
    * ["ething.file.created"](#EThing.event_ething.file.created)
    * ["ething.table.created"](#EThing.event_ething.table.created)
    * ["ething.device.created"](#EThing.event_ething.device.created)
    * ["ething.app.created"](#EThing.event_ething.app.created)
    * ["ething.authenticated"](#EThing.event_ething.authenticated)

<a name="EThing.App"></a>

### EThing.App ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The App resource handle an application</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.App](#EThing.App) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new App(json)](#new_EThing.App_new)
    * _instance_
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * _static_
        * [.App#size()](#EThing.App.App+size) ⇒ <code>number</code>
        * [.App#iconLink([auth])](#EThing.App.App+iconLink) ⇒ <code>string</code> \| <code>null</code>
        * [.App#getContentUrl([auth])](#EThing.App.App+getContentUrl) ⇒ <code>string</code>
        * [.App#contentModifiedDate()](#EThing.App.App+contentModifiedDate) ⇒ <code>Date</code>
        * [.App#scope()](#EThing.App.App+scope) ⇒ <code>string</code>
        * [.App#version()](#EThing.App.App+version) ⇒ <code>string</code>
        * [.App#read([callback])](#EThing.App.App+read) ⇒ [<code>App</code>](#EThing.App)
        * [.App#write(data, [callback])](#EThing.App.App+write) ⇒ [<code>App</code>](#EThing.App)
        * [.create(attributes, [callback])](#EThing.App.create) ⇒ <code>Deferred</code>

<a name="new_EThing.App_new"></a>

#### new App(json)
<p>Constructs an App instance from an object decribing an application. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+parent"></a>

#### app.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.App.App+size"></a>

#### App.App#size() ⇒ <code>number</code>
<p>Returns the size of this application in bytes.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  
<a name="EThing.App.App+iconLink"></a>

#### App.App#iconLink([auth]) ⇒ <code>string</code> \| <code>null</code>
<p>If this application has an icon, it returns his link, else it returns null.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// the simple way
var image = new Image();
image.src = imageFile.iconLink(true);
document.body.appendChild(image);

// the hard way
EThing.request({
  url: imageFile.iconLink(),
  dataType: "blob"
}).done(function(blobData){
  // success
  var image = new Image();
  image.src = window.URL.createObjectURL( blobData );
  
  document.body.appendChild(image);
});
```
<a name="EThing.App.App+getContentUrl"></a>

#### App.App#getContentUrl([auth]) ⇒ <code>string</code>
<p>Returns the link to access the content.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// using EThing.request() :
EThing.request(app.getContentUrl()).done(function(content){
  // success
  console.log('content as text : '+content);
});
```
<a name="EThing.App.App+contentModifiedDate"></a>

#### App.App#contentModifiedDate() ⇒ <code>Date</code>
<p>Last time the content of this resource was modified</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  
<a name="EThing.App.App+scope"></a>

#### App.App#scope() ⇒ <code>string</code>
<p>Return the scope of this app.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  
<a name="EThing.App.App+version"></a>

#### App.App#version() ⇒ <code>string</code>
<p>Return the version of this app or null if this app is not versioned.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**this**: <code>{EThing.App}</code>  
<a name="EThing.App.App+read"></a>

#### App.App#read([callback]) ⇒ [<code>App</code>](#EThing.App)
<p>Gets the code of this application in text/html.</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**Returns**: [<code>App</code>](#EThing.App) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.App}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.App.App+write"></a>

#### App.App#write(data, [callback]) ⇒ [<code>App</code>](#EThing.App)
<p>Writes some HTML script in this application. Only available for [editable app](EThing.App#isEditable)</p>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**Returns**: [<code>App</code>](#EThing.App) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.App}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> | <p>the full HTML script</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.App.create"></a>

#### App.create(attributes, [callback]) ⇒ <code>Deferred</code>
<p>Creates a new Application from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the application</li>
<li>description {string} a string describing this application </li>
<li>data {object} key/value pairs to attach to this application</li>
<li>content {string} the full base64 encoded script</li>
<li>icon {string} the base64 encoded icon of this application</li>
</ul>

**Kind**: static method of [<code>App</code>](#EThing.App)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  
**Emits**: <code>EThing#ething.app.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.App.create({
  name: "myApp",
  content: "<html><body>hello world !</body></html>",
  icon: <icon_data>, // File, Blob, ArrayBuffer or base64 string
  scope: "resource:read profile:read",
}).done(function(resource){
    console.log('the new app can be accessed through : ' + resource.url());
})
```
<a name="EThing.Folder"></a>

### EThing.Folder ⇐ [<code>Resource</code>](#EThing.Resource)
**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.Folder](#EThing.Folder) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new EThing.Folder(json)](#new_EThing.Folder_new)
    * [.ls](#EThing.Folder+ls) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.remove([callback])](#EThing.Folder+remove) ⇒ [<code>Folder</code>](#EThing.Folder)
    * [.children([filter])](#EThing.Folder+children) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.find([filter])](#EThing.Folder+find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.findOne([filter])](#EThing.Folder+findOne) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
    * [.length()](#EThing.Folder+length) ⇒ <code>number</code>
    * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>

<a name="new_EThing.Folder_new"></a>

#### new EThing.Folder(json)
<p>This class is used in the [arbo](#EThing.arbo) library. It emulates a tree structure using folders.</p>


| Param | Type |
| --- | --- |
| json | <code>Object</code> | 

<a name="EThing.Folder+ls"></a>

#### folder.ls ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>Synonym of [children](#EThing.Folder+children)</p>

**Kind**: instance property of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Folder}</code>  
<a name="EThing.Folder+remove"></a>

#### folder.remove([callback]) ⇒ [<code>Folder</code>](#EThing.Folder)
<p>Remove all the resources under this folder.</p>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**Returns**: [<code>Folder</code>](#EThing.Folder) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Folder}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>function executed once the folder is removed</p> |

<a name="EThing.Folder+children"></a>

#### folder.children([filter]) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>List the resources and folders immediately located in this folder. This method only travels a single level down the tree.
See the method [find](#EThing.Folder+find) to traverse down multiple levels to select descendant elements (grandchildren, etc.).</p>
<p>A filter can be provided, his type must be one of the following :</p>
<ul>
<li>function : function to test each resource. Invoked with arguments (EThing.Resource, relativeName). Return true to keep the resource, false otherwise.</li>
<li>string : only the resources that match the given relative name are returned (note: two resource can have the same name).</li>
<li>string[] : only the resources that match the given relative names are returned.</li>
<li>RegExp : only the resources satisfying this regular expression is returned.</li>
</ul>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Folder}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>function</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>RegExp</code> | <p>if set, only the resources that match the filter are returned.</p> |

<a name="EThing.Folder+find"></a>

#### folder.find([filter]) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>List the resources and folders under this folder.
The find() and [children](#EThing.Folder+children) methods are similar, except that the latter only travels a single level down the tree.</p>
<p>A filter can be provided, his type must be one of the following :</p>
<ul>
<li>function : function to test each resource. Invoked with arguments (EThing.Resource, relativeName). Return true to keep the resource, false otherwise.</li>
<li>string : only the resources that match the given relative name are returned (note: two resource can have the same name).</li>
<li>string[] : only the resources that match the given relative names are returned.</li>
<li>RegExp : only the resources satisfying this regular expression is returned.</li>
</ul>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Folder}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>function</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>RegExp</code> | <p>if set, only the resources that match the filter are returned.</p> |

<a name="EThing.Folder+findOne"></a>

#### folder.findOne([filter]) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
<p>Same as [find](#EThing.Folder+find) except that it will return only one result (the first resource that match the filter) or null if nothing was found.
See [find](#EThing.Folder+find) for more details about the argument.</p>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Folder}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>function</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>RegExp</code> | <p>if set, only the first resource that match the filter is returned.</p> |

<a name="EThing.Folder+length"></a>

#### folder.length() ⇒ <code>number</code>
<p>Returns the number of immediate children.</p>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Folder}</code>  
<a name="EThing.Resource+parent"></a>

#### folder.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>Folder</code>](#EThing.Folder)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.File"></a>

### EThing.File ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The File resource handle regular file such as image or text</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.File](#EThing.File) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new File(json)](#new_EThing.File_new)
    * _instance_
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * _static_
        * [.File#size()](#EThing.File.File+size) ⇒ <code>number</code>
        * [.File#expireAfter()](#EThing.File.File+expireAfter) ⇒ <code>number</code> \| <code>null</code>
        * [.File#mime()](#EThing.File.File+mime) ⇒ <code>string</code>
        * [.File#contentModifiedDate()](#EThing.File.File+contentModifiedDate) ⇒ <code>Date</code>
        * [.File#thumbnailLink([auth])](#EThing.File.File+thumbnailLink) ⇒ <code>string</code> \| <code>null</code>
        * [.File#getContentUrl([auth])](#EThing.File.File+getContentUrl) ⇒ <code>string</code>
        * [.File#isText()](#EThing.File.File+isText) ⇒ <code>boolean</code>
        * [.File#isScript()](#EThing.File.File+isScript) ⇒ <code>boolean</code>
        * [.File#execute([arguments], [callback])](#EThing.File.File+execute) ⇒ [<code>File</code>](#EThing.File)
        * [.File#read([binary], [callback])](#EThing.File.File+read) ⇒ [<code>File</code>](#EThing.File)
        * [.File#write(data, [callback])](#EThing.File.File+write) ⇒ [<code>File</code>](#EThing.File)
        * [.create(attributes, [callback])](#EThing.File.create) ⇒ <code>Deferred</code>

<a name="new_EThing.File_new"></a>

#### new File(json)
<p>Constructs a File instance from an object decribing a file. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+parent"></a>

#### file.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.File.File+size"></a>

#### File.File#size() ⇒ <code>number</code>
<p>Returns the size of this file in bytes.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+expireAfter"></a>

#### File.File#expireAfter() ⇒ <code>number</code> \| <code>null</code>
<p>Returns the amount of seconds after the last update after which this file is removed automatically, or null if this feature is not enable (no time limit).</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+mime"></a>

#### File.File#mime() ⇒ <code>string</code>
<p>Returns the MIME type of this file</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+contentModifiedDate"></a>

#### File.File#contentModifiedDate() ⇒ <code>Date</code>
<p>Last time the content of this resource was modified</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+thumbnailLink"></a>

#### File.File#thumbnailLink([auth]) ⇒ <code>string</code> \| <code>null</code>
<p>If this file has a thumbnail (thumbnail is only available for file with MIME type <strong>image/*</strong>), it returns his link, else it returns null.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// the simple way
var image = new Image();
image.src = imageFile.thumbnailLink(true);
document.body.appendChild(image);

// the hard way
EThing.request({
  url: imageFile.thumbnailLink(),
  dataType: "blob"
}).done(function(blobData){
  // success
  var image = new Image();
  image.src = window.URL.createObjectURL( blobData );
  
  document.body.appendChild(image);
});
```
<a name="EThing.File.File+getContentUrl"></a>

#### File.File#getContentUrl([auth]) ⇒ <code>string</code>
<p>Returns the link to access the content.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// using EThing.request() :
EThing.request(file.getContentUrl()).done(function(content){
  // success
  console.log('content as text : '+content);
});

// HTML <img> Tag :
var image = new Image();
image.src = imageFile.getContentUrl(true);
document.body.appendChild(image);
```
<a name="EThing.File.File+isText"></a>

#### File.File#isText() ⇒ <code>boolean</code>
<p>Returns true if this file has text based content.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+isScript"></a>

#### File.File#isScript() ⇒ <code>boolean</code>
<p>Returns true if this file is a script.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File.File+execute"></a>

#### File.File#execute([arguments], [callback]) ⇒ [<code>File</code>](#EThing.File)
<p>Execute a script file.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>File</code>](#EThing.File) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.File}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [arguments] | <code>string</code> | <p>a string containing the arguments</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
file.execute().done(function(result){
  // success
  console.log(result);
});
```
<a name="EThing.File.File+read"></a>

#### File.File#read([binary], [callback]) ⇒ [<code>File</code>](#EThing.File)
<p>Gets the content of this file as text or as binary data.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>File</code>](#EThing.File) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.File}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [binary] | <code>boolean</code> | <p>if true, return the content as binary data (as Blob in a browser, or Buffer in NodeJs)</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
file.read().done(function(content){
  // success
  console.log('content as text : '+content);
});

// browser :
file.read(true).done(function(contentAsBlob){
  // success
});

// NodeJs :
var fs = require("fs");
EThing.get('kDO5Fk4').done(function(resource){
	resource.read(true).done(function(data){
		// data : Buffer instance
		fs.writeFile(resource.basename(), data, function(){
			console.log('It\'s saved!');
		});
	});
});
```
<a name="EThing.File.File+write"></a>

#### File.File#write(data, [callback]) ⇒ [<code>File</code>](#EThing.File)
<p>Writes some content to this file.</p>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>File</code>](#EThing.File) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.File}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> \| <code>blob</code> \| <code>arraybuffer</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
file.write("hello world !").done(function(){
  // success
});
```
<a name="EThing.File.create"></a>

#### File.create(attributes, [callback]) ⇒ <code>Deferred</code>
<p>Creates a new File from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the file</li>
<li>description {string} a string describing this file </li>
<li>data {object} key/value pairs to attach to this file</li>
<li>expireAfter {number} amount of seconds after the last update after which this file is removed automatically, 0 means unlimited. Default to 0.</li>
</ul>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  
**Emits**: <code>EThing#ething.file.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.File.create({
  name: "foobar.txt",
  description: "this is my file"
}).done(function(resource){
    console.log('file created : ' + resource.name());
})
```
<a name="EThing.Resource"></a>

### EThing.Resource
**Kind**: static class of [<code>EThing</code>](#EThing)  
**Access**: protected  

* [.Resource](#EThing.Resource)
    * [new Resource(json)](#new_EThing.Resource_new)
    * _instance_
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * _static_
        * [.Resource#json()](#EThing.Resource.Resource+json) ⇒ <code>object</code>
        * [.Resource#isTypeof(type)](#EThing.Resource.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.Resource#name()](#EThing.Resource.Resource+name) ⇒ <code>string</code>
        * [.Resource#dirname()](#EThing.Resource.Resource+dirname) ⇒ <code>string</code>
        * [.Resource#basename()](#EThing.Resource.Resource+basename) ⇒ <code>string</code>
        * [.Resource#extension()](#EThing.Resource.Resource+extension) ⇒ <code>string</code>
        * [.Resource#id()](#EThing.Resource.Resource+id) ⇒ <code>string</code>
        * [.Resource#createdBy()](#EThing.Resource.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.Resource#type()](#EThing.Resource.Resource+type) ⇒ <code>string</code>
        * [.Resource#types()](#EThing.Resource.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.Resource#baseType()](#EThing.Resource.Resource+baseType) ⇒ <code>string</code>
        * [.Resource#createdDate()](#EThing.Resource.Resource+createdDate) ⇒ <code>Date</code>
        * [.Resource#modifiedDate()](#EThing.Resource.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.Resource#public()](#EThing.Resource.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.Resource#data([name], [defaultValue])](#EThing.Resource.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.Resource#attr([name])](#EThing.Resource.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.Resource#hasAttr(name)](#EThing.Resource.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.Resource#description()](#EThing.Resource.Resource+description) ⇒ <code>string</code>
        * [.Resource#remove([removeChildren], [callback])](#EThing.Resource.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.Resource#set(properties, [callback])](#EThing.Resource.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.Resource#setData(data, [callback])](#EThing.Resource.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)

<a name="new_EThing.Resource_new"></a>

#### new Resource(json)
<p>Base class of all the resources</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+parent"></a>

#### resource.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+json"></a>

#### Resource.Resource#json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+isTypeof"></a>

#### Resource.Resource#isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource.Resource+name"></a>

#### Resource.Resource#name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [EThing.Resource#basename](EThing.Resource#basename).
To get only the PathName, see [EThing.Resource#dirname](EThing.Resource#dirname).</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+dirname"></a>

#### Resource.Resource#dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+basename"></a>

#### Resource.Resource#basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+extension"></a>

#### Resource.Resource#extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+id"></a>

#### Resource.Resource#id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+createdBy"></a>

#### Resource.Resource#createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+type"></a>

#### Resource.Resource#type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+types"></a>

#### Resource.Resource#types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+baseType"></a>

#### Resource.Resource#baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+createdDate"></a>

#### Resource.Resource#createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+modifiedDate"></a>

#### Resource.Resource#modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+public"></a>

#### Resource.Resource#public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+data"></a>

#### Resource.Resource#data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource.Resource+attr"></a>

#### Resource.Resource#attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource.Resource+hasAttr"></a>

#### Resource.Resource#hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource.Resource+description"></a>

#### Resource.Resource#description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource.Resource+remove"></a>

#### Resource.Resource#remove([removeChildren], [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [removeChildren] | <code>Boolean</code> | <p>When true, the children are also removed. Default to false.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().done(function(){
  // the resource was successfully removed
});
```
<a name="EThing.Resource.Resource+set"></a>

#### Resource.Resource#set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({
  name: "newName.txt"
}).done(function(){
  console.log("the resource was successfully renamed to :"+this.name());
});
```
<a name="EThing.Resource.Resource+setData"></a>

#### Resource.Resource#setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({
  "key": "value"
}).done(function(){
  // success
});

// you can also write :
resource.setData("key", "value").done(function(){
  // success
});
```
<a name="EThing.Rule"></a>

### EThing.Rule ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The Rule resource handle an application</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.Rule](#EThing.Rule) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new Rule(json)](#new_EThing.Rule_new)
    * _instance_
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * _static_
        * [.Rule#enabled()](#EThing.Rule.Rule+enabled) ⇒ <code>boolean</code>
        * [.Resource#script()](#EThing.Rule.Resource+script) ⇒ <code>string</code>
        * [.Resource#event()](#EThing.Rule.Resource+event) ⇒ <code>object</code>
        * [.Rule#scriptReturnCode()](#EThing.Rule.Rule+scriptReturnCode) ⇒ <code>number</code>
        * [.Rule#scriptExecutionCount()](#EThing.Rule.Rule+scriptExecutionCount) ⇒ <code>number</code>
        * [.Rule#scriptExecutionDate()](#EThing.Rule.Rule+scriptExecutionDate) ⇒ <code>Date</code>
        * [.Rule#execute([callback])](#EThing.Rule.Rule+execute) ⇒ [<code>Rule</code>](#EThing.Rule)
        * [.create(attributes, [callback])](#EThing.Rule.create) ⇒ <code>Deferred</code>

<a name="new_EThing.Rule_new"></a>

#### new Rule(json)
<p>Constructs a Rule instance from an object decribing a rule. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+parent"></a>

#### rule.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Rule.Rule+enabled"></a>

#### Rule.Rule#enabled() ⇒ <code>boolean</code>
<p>Returns true if this rule is enabled.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Resource+script"></a>

#### Rule.Resource#script() ⇒ <code>string</code>
<p>Returns the id of the script file.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Resource+event"></a>

#### Rule.Resource#event() ⇒ <code>object</code>
<p>Returns an object describing the event.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Rule+scriptReturnCode"></a>

#### Rule.Rule#scriptReturnCode() ⇒ <code>number</code>
<p>Returns the last exit code returned by the script of this rule.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Rule+scriptExecutionCount"></a>

#### Rule.Rule#scriptExecutionCount() ⇒ <code>number</code>
<p>Returns the number of times this rule has been executed.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Rule+scriptExecutionDate"></a>

#### Rule.Rule#scriptExecutionDate() ⇒ <code>Date</code>
<p>Returns the last time this rule has been executed.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**this**: <code>{EThing.Rule}</code>  
<a name="EThing.Rule.Rule+execute"></a>

#### Rule.Rule#execute([callback]) ⇒ [<code>Rule</code>](#EThing.Rule)
<p>Run this rule.</p>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**Returns**: [<code>Rule</code>](#EThing.Rule) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Rule}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Rule.create"></a>

#### Rule.create(attributes, [callback]) ⇒ <code>Deferred</code>
<p>Creates a new Rule from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the rule</li>
<li>script {EThing.File} <strong>required</strong> the JavaScript code to be executed</li>
<li>event {object} <strong>required</strong> the event object describing when to execute this rule<ul>
<li>event.type {string} <strong>required</strong> the type name of the event (Timer, ResourceCreated, ...)</li>
<li>event.*  some options depending of the type of event</li>
</ul>
</li>
<li>script_args {string} an optional string holding the arguments to pass to the script</li>
</ul>

**Kind**: static method of [<code>Rule</code>](#EThing.Rule)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  
**Emits**: <code>EThing#ething.rule.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.Rule.create({
  name: "myRule",
  script: <script_id>,
  event: {
    type: 'ResourceCreated' // this rule will be fired each time a resource is created !
  }
}).done(function(resource){
    console.log('the new rule is created');
})
```
<a name="EThing.Table"></a>

### EThing.Table ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The Table resource handle data in rows and columns</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.Table](#EThing.Table) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new Table(json)](#new_EThing.Table_new)
    * _instance_
        * [.parent()](#EThing.Resource+parent) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * _static_
        * [.Table#length()](#EThing.Table.Table+length) ⇒ <code>number</code>
        * [.Table#maxLength()](#EThing.Table.Table+maxLength) ⇒ <code>number</code> \| <code>null</code>
        * [.Table#expireAfter()](#EThing.Table.Table+expireAfter) ⇒ <code>number</code>
        * [.Table#keys()](#EThing.Table.Table+keys) ⇒ <code>Array.&lt;string&gt;</code>
        * [.Table#contentModifiedDate()](#EThing.Table.Table+contentModifiedDate) ⇒ <code>Date</code>
        * [.Table#select([options], [callback])](#EThing.Table.Table+select) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#computeStatistics(key, [query], [callback])](#EThing.Table.Table+computeStatistics) ⇒ <code>Object</code>
        * [.Table#removeRow(id, [callback])](#EThing.Table.Table+removeRow) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#replaceRow(data, [callback])](#EThing.Table.Table+replaceRow) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#findOneAndReplace(query, data, [upsert], [callback])](#EThing.Table.Table+findOneAndReplace) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#insert(data, [invalid_field], [callback])](#EThing.Table.Table+insert) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#import(data, [invalid_field], [skip_error], [callback])](#EThing.Table.Table+import) ⇒ [<code>Table</code>](#EThing.Table)
        * [.Table#getContentUrl([auth])](#EThing.Table.Table+getContentUrl) ⇒ <code>string</code>
        * [.create(attributes, [callback])](#EThing.Table.create) ⇒ <code>Deferred</code>

<a name="new_EThing.Table_new"></a>

#### new Table(json)
<p>Constructs a Table instance from an object decribing a table. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+parent"></a>

#### table.parent() ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Returns the parent directory of this resource, Returns undefined if this resource is the root directory.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Table.Table+length"></a>

#### Table.Table#length() ⇒ <code>number</code>
<p>The number of rows in this table</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table.Table+maxLength"></a>

#### Table.Table#maxLength() ⇒ <code>number</code> \| <code>null</code>
<p>The maximum number of rows allowed in this table. Returns null if this feature is disable (number of rows is unlimited).</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table.Table+expireAfter"></a>

#### Table.Table#expireAfter() ⇒ <code>number</code>
<p>Returns the amount of seconds after which a <strong>row</strong> is automatically removed, or null if this feature is not enable.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table.Table+keys"></a>

#### Table.Table#keys() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the keys in this table. <strong>The default keys (&quot;id&quot; and &quot;date&quot; are not listed)</strong>.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table.Table+contentModifiedDate"></a>

#### Table.Table#contentModifiedDate() ⇒ <code>Date</code>
<p>Last time the content of this resource was modified</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table.Table+select"></a>

#### Table.Table#select([options], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Returns rows.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | <p>Customize the selection</p> |
| [options.start] | <code>number</code> | <code>0</code> | <p>Position of the first rows to return. If start is negative, it starts from the end.</p> |
| [options.length] | <code>number</code> |  | <p>Maximum number of rows to return.</p> |
| [options.sort] | <code>string</code> |  | <p>The key on which to do the sorting, by default the sort is made by date.</p> |
| [options.query] | <code>string</code> |  | <p>A query string to filter the results.</p> |
| [options.fields] | <code>string</code> |  | <p>Fields of the results to return. If omitted, all the fields are returned.</p> |
| [options.datefmt] | <code>string</code> |  | <p>the format of the date field (values: &quot;RFC3339&quot;(default), &quot;TIMESTAMP&quot;, &quot;TIMESTAMP_MS&quot;, &quot;ISO8601&quot;, &quot;RSS&quot;).</p> |
| [callback] | <code>function</code> |  | <p>It is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// returns all the content of a table :
table.select().done(function(data){
  // success
});

// returns the last 10 rows sorted by the "foo" column :
table.select({start: -10, sort: "foo"}).done(function(data){
  // success
});
```
<a name="EThing.Table.Table+computeStatistics"></a>

#### Table.Table#computeStatistics(key, [query], [callback]) ⇒ <code>Object</code>
<p>Performs statistics on a specific column.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: <code>Object</code> - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | <p>The column name on which the statistics should be performed.</p> |
| [query] | <code>string</code> | <p>A query string to filter the data.</p> |
| [callback] | <code>function</code> | <p>It is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Table.Table+removeRow"></a>

#### Table.Table#removeRow(id, [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Removes one or multiple rows.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>The id of the row(s) to be removed</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// removes the last 10 rows :
table.select(-10).done(function(data){
  this.removeRow(data.map(function(row){
    return row.id;
  }));
});
```
<a name="EThing.Table.Table+replaceRow"></a>

#### Table.Table#replaceRow(data, [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Set new data to a row.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | <p>the data to be updated, it must contain the row id.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
table.replaceRow({
	 'id': 'g45Tdk4',
	 'value': 45
}).done(function(data){
  // updated !
});
```
<a name="EThing.Table.Table+findOneAndReplace"></a>

#### Table.Table#findOneAndReplace(query, data, [upsert], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Finds a single row matching the query and replaces it.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>string</code> | <p>A query string to filter the data.</p> |
| data | <code>object</code> | <p>the new data.</p> |
| [upsert] | <code>boolean</code> | <p>If true, the data will be inserted if no match is found. (default to false).</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
table.findOneAndReplace("name=='foo'", {
	 'name': 'foo',
	 'value': 'bar'
}).done(function(table){
  // updated or inserted if not found !
});
```
<a name="EThing.Table.Table+insert"></a>

#### Table.Table#insert(data, [invalid_field], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Insert new data into the table. The data argument must be a key/value object.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [invalid_field] | <code>string</code> | <p>The behaviour to adopt when an invalid field name appears. The value must be one of the following : &quot;rename&quot;,&quot;stop&quot;,&quot;skip&quot;,&quot;none&quot;.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
table.insert({
  'field1': "foobar",
  'field2': 3.14,
  'field3': true
}).done(function(){
  // success
});
```
<a name="EThing.Table.Table+import"></a>

#### Table.Table#import(data, [invalid_field], [skip_error], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Replace the content of this table by a new set of data.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.
// copy table content
var tableSrc, tableDst;
tableSrc.select().done(function(data){
  tableDst.import(data);
});</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;object&gt;</code> |  |
| [invalid_field] | <code>string</code> | <p>The behaviour to adopt when an invalid field name appears. The value must be one of the following : &quot;rename&quot;,&quot;stop&quot;,&quot;skip&quot;,&quot;none&quot;.</p> |
| [skip_error] | <code>bool</code> | <p>Whether to skip data on error or not</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Table.Table+getContentUrl"></a>

#### Table.Table#getContentUrl([auth]) ⇒ <code>string</code>
<p>Returns the link to access the content.</p>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// using EThing.request() :
EThing.request(table.getContentUrl()).done(function(rows){
  // success, rows is an array of object 
  console.log('number of rows : '+rows.length);
});

// or using jQuery :
$.getJSON(table.getContentUrl(true)).done(function(rows){
  // success
});
```
<a name="EThing.Table.create"></a>

#### Table.create(attributes, [callback]) ⇒ <code>Deferred</code>
<p>Creates a new Table from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the table</li>
<li>description {string} a string describing this table </li>
<li>data {object} key/value pairs to attach to this table</li>
<li>expireAfter {number} amount of seconds after which a row is automatically removed, 0 means unlimited. Default to 0.</li>
<li>maxLength {number} the maximum number of rows allowed in this table. 0 means unlimited. Default to 5000.</li>
</ul>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  
**Emits**: <code>EThing#ething.table.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get a resource by its id
EThing.Table.create({
  name: "foobar",
  expireAfter: 3600*24*7 // the data are automatically removed after 7 weeks
}).done(function(resource){
    console.log('table created : ' + resource.name());
})
```
<a name="EThing.on"></a>

### EThing.on
<p>register an handler to an event.</p>

**Kind**: static property of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | <p>event type string. Multiple space separated events can be given.</p> |
| handler | <code>function</code> | <p>the function to be called when the event has been triggered.</p> |

<a name="EThing.off"></a>

### EThing.off
<p>Remove an event handler.</p>

**Kind**: static property of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | <p>event type string. Multiple space separated events can be given.</p> |
| [handler] | <code>function</code> | <p>A handler function previously attached for the event(s)</p> |

<a name="EThing.one"></a>

### EThing.one
<p>register an handler to an event. The handler will be only executed once.</p>

**Kind**: static property of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | <p>event type string. Multiple space separated events can be given.</p> |
| handler | <code>function</code> | <p>the function to be called when the event has been triggered.</p> |

<a name="EThing.trigger"></a>

### EThing.trigger
<p>Execute all handlers attached for the given event type.</p>

**Kind**: static property of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> \| <code>EThing.Event</code> | <p>An event object instance or an event type string.</p> |
| [extraParameters] | <code>object</code> | <p>Additional parameters to pass along to the event handler.</p> |

<a name="EThing.arbo"></a>

### EThing.arbo : <code>object</code>
<p>This library helps to organise your resources in a tree structure.
Folders do not exist explicitly in eThing. But this library emulate it.
Every resource must have a name set. A name is composed of a pathname followed by a filename.
The pathname represent the folder where the file is located.</p>
<p>For instance, the following resources :</p>
<ul>
<li>dir1/file1.txt</li>
<li>dir1/file2.txt</li>
<li>dir2/file3.txt</li>
<li>file4.txt</li>
</ul>
<p>could be reorganized into folders:</p>
<pre class="prettyprint source"><code>root
 |
 +--dir1
 |    +---file1.txt
 |    +---file2.txt
 |
 +--dir2
 |    +---file3.txt
 |
 +--file4.txt</code></pre><p>This way, it is convenient to find all the resources located in the same folder.</p>

**Kind**: static namespace of [<code>EThing</code>](#EThing)  
**Example**  
```js
// list all the txt files in the dir1 folder
EThing.arbo.load(function(){
  // the next line may list Table that ends with ".txt"
  console.log(EThing.arbo.findOne('dir1').children(/\.txt/i));
  // better
  console.log(EThing.arbo.findOne('dir1').children(function(r){
    return (r instanceof EThing.File) && /\.txt/i.test(r.name());
  }));
})
```

* [.arbo](#EThing.arbo) : <code>object</code>
    * [.load([callback], [force])](#EThing.arbo.load) ⇒ <code>Deferred</code>
    * [.findOneById(id)](#EThing.arbo.findOneById) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * [.find([filter])](#EThing.arbo.find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.findOne([filter])](#EThing.arbo.findOne) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
    * [.list()](#EThing.arbo.list) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.isLoaded()](#EThing.arbo.isLoaded) ⇒ <code>boolean</code>
    * [.root()](#EThing.arbo.root) ⇒ [<code>Folder</code>](#EThing.Folder) \| <code>null</code>

<a name="EThing.arbo.load"></a>

#### arbo.load([callback], [force]) ⇒ <code>Deferred</code>
<p>Load all available resources.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/).</p>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>function executed once the resources are loaded</p> |
| [force] | <code>boolean</code> | <p>force to reload the entire resources</p> |

<a name="EThing.arbo.findOneById"></a>

#### arbo.findOneById(id) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Find a resource by its unique id. For all the resources except the Folder, the id is a 7 character alphanumeric string.
Since there is no duplicate name for folders, their id is equal to their name.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
**Returns**: [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code> - <p>return undefined if not found</p>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>7 character alphanumeric string for all resources except for Folders which is their name.</p> |

<a name="EThing.arbo.find"></a>

#### arbo.find([filter]) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>Returns a list of resources that pass the test implemented by the provided function or regular expression (as a string or a RegExp object).
The find() method creates a new array with all the resources that pass the test implemented by the provided first argument.</p>
<p>The test argument's type must be one of the following :</p>
<ul>
<li>function : function to test each resource. Invoked with arguments (EThing.Resource). Return true to keep the resource, false otherwise.</li>
<li>string : only the resources that match the given relative name are returned (note: two resource can have the same name).</li>
<li>string[] : only the resources that match the given relative names are returned.</li>
<li>RegExp : only the resources satisfying this regular expression is returned.</li>
<li>undefined : returns all the resources</li>
</ul>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>function</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>RegExp</code> | <p>only the resources that match the filter are returned.</p> |

<a name="EThing.arbo.findOne"></a>

#### arbo.findOne([filter]) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>null</code>
<p>Same as [find](#EThing.arbo.find) except that it will return only one result (the first resource that match the filter) or null if nothing was found.
See [find](#EThing.arbo.find) for more details about the argument.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  

| Param | Type | Description |
| --- | --- | --- |
| [filter] | <code>function</code> \| <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>RegExp</code> | <p>only the first resource that match the filter is returned.</p> |

<a name="EThing.arbo.list"></a>

#### arbo.list() ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>return all the resources. Same as [EThing.arbo.find()](#EThing.arbo.find).</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
<a name="EThing.arbo.isLoaded"></a>

#### arbo.isLoaded() ⇒ <code>boolean</code>
<p>Check if the resources are loaded (ie. if the [load](#EThing.arbo.load) function has been called and has returned).</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
<a name="EThing.arbo.root"></a>

#### arbo.root() ⇒ [<code>Folder</code>](#EThing.Folder) \| <code>null</code>
<p>Returns the root directory. If the [load](#EThing.arbo.load) function was not called before, this function will return null.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
<a name="EThing.auth"></a>

### EThing.auth : <code>object</code>
**Kind**: static namespace of [<code>EThing</code>](#EThing)  

* [.auth](#EThing.auth) : <code>object</code>
    * [.isAuthenticated()](#EThing.auth.isAuthenticated) ⇒ <code>boolean</code>
    * [.getApp()](#EThing.auth.getApp) ⇒ [<code>App</code>](#EThing.App)
    * [.getDevice()](#EThing.auth.getDevice) ⇒ <code>EThing.Device</code>
    * [.getResource()](#EThing.auth.getResource) ⇒ [<code>Resource</code>](#EThing.Resource)
    * [.getScope()](#EThing.auth.getScope) ⇒ <code>string</code>
    * [.reset()](#EThing.auth.reset)

<a name="EThing.auth.isAuthenticated"></a>

#### auth.isAuthenticated() ⇒ <code>boolean</code>
<p>Returns true if the authentication process has been successful.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
<a name="EThing.auth.getApp"></a>

#### auth.getApp() ⇒ [<code>App</code>](#EThing.App)
<p>Returns the authenticated app. Only available with app's apikey authentication.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
**Returns**: [<code>App</code>](#EThing.App) - <p>the authenticated app or null.</p>  
<a name="EThing.auth.getDevice"></a>

#### auth.getDevice() ⇒ <code>EThing.Device</code>
<p>Returns the authenticated app. Only available with devices's apikey authentication.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
**Returns**: <code>EThing.Device</code> - <p>the authenticated device or null.</p>  
<a name="EThing.auth.getResource"></a>

#### auth.getResource() ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Returns the authenticated resource. Only available with apikey authentication.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>the authenticated resource or null.</p>  
<a name="EThing.auth.getScope"></a>

#### auth.getScope() ⇒ <code>string</code>
<p>Returns the scope of the current authentication</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
**Returns**: <code>string</code> - <p>the scope. May be an empty string if no permissions is set. May be null if full permissions.</p>  
<a name="EThing.auth.reset"></a>

#### auth.reset()
<p>Reset authentication. You must restart an authentication process to make API calls again.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
<a name="EThing.request"></a>

### EThing.request(options, [callback]) ⇒ <code>Deferred</code>
<p>Make a HTTP request. The options object contains the following properties :</p>
<ul>
<li>url {string} <strong>required</strong> The url of the request. The API url will be prepended to relative URLs.</li>
<li>method {string} The HTTP request method to use. Default is GET.</li>
<li>data {string|object|Blob|ArrayBuffer|Buffer} The query string for GET request. The HTTP request body for POST|PATCH|PUT requests. If an object is given, it will be serialized into a query string.</li>
<li>contentType {string} When sending data to the server, use this content type. Default is 'application/octet-stream' if the data is an instance of ArrayBuffer or Buffer, if data is an instance of Blob, the default will be the type of the data itself, else 'application/x-www-form-urlencoded; charset=UTF-8'.</li>
<li>dataType {string} The type of data that you're expecting back from the server. See [XMLHttpRequest standard](http://xhr.spec.whatwg.org/#the-responsetype-attribute).</li>
<li>headers {object} Additional HTTP request headers.</li>
<li>context {object} The value of this provided for the call of the callbacks</li>
<li>converter {function(data,XHR)} A function that returns the transformed value of the response</li>
</ul>
<p>You may also give a callback as a second parameter. This callback is executed when the request is complete whether in failure or success.
On success, it receives the returned request data, as well as the XMLHttpRequest object.
On failure, the first parameter will be a Error object describing the error.
To check if a request is in failure :</p>
<pre><code>EThing.request(options,function(data,xhr){
    if(data instanceof EThing.Error){
      // an error occurs, print the associated message
      console.log(data.message);
    }
  })`
</code></pre>


<p>This function returns a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/) object.</p>
<p>The done|fail|always functions take the same parameters than the [jQuery version](http://api.jquery.com/category/deferred-object/).</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/)</p>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>string</code> \| <code>object</code> | <p>a set of key/value pairs that configure the request. If an URL is given, a GET request with the default options is made.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// GET request
EThing.request('/resources') // is equivalent to EThing.list()

// pass an object to make more complex request
// store some data in a file
EThing.request({
  url: '/files/'+fileId,
  method: 'PUT',
  data: 'some content here ...',
  contentType: 'text/plain'
})
.done(function(file){
  console.log("the content was stored in the file "+file.name());
})
.fail(function(error){
  console.log("an error occurs : "+error.message);
});
```
<a name="EThing.apiRequestPrefilter"></a>

### EThing.apiRequestPrefilter()
**Kind**: static method of [<code>EThing</code>](#EThing)  
<a name="EThing.ajaxSend"></a>

### EThing.ajaxSend(handler)
<p>Register a handler to be called just before API requests is sent.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | <p>The function to be invoked.</p> |

<a name="EThing.ajaxComplete"></a>

### EThing.ajaxComplete(handler)
<p>Register a handler to be called when API requests complete.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | <p>The function to be invoked.</p> |

<a name="EThing.ajaxSuccess"></a>

### EThing.ajaxSuccess(handler)
<p>Register a handler to be called when API requests complete successfully.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | <p>The function to be invoked.</p> |

<a name="EThing.ajaxError"></a>

### EThing.ajaxError(handler)
<p>Register a handler to be called when API requests complete with an error.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| handler | <code>function</code> | <p>The function to be invoked.</p> |

<a name="EThing.list"></a>

### EThing.list([query], [callback]) ⇒ <code>Deferred</code>
<p>This function get the available resources. A filter may be given to retrieve resources with specific attributes (see the HTTP API for more details).</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  

| Param | Type | Description |
| --- | --- | --- |
| [query] | <code>string</code> | <p>Query string for searching resources</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get all the resources
EThing.list().done(function(resources){
    console.log(resources);
})

// get only File & Table resources
EThing.list('type == "File" or type == "Table"').done(function(resources){
    console.log(resources);
})
```
<a name="EThing.get"></a>

### EThing.get(resourceIdentifier, [callback]) ⇒ <code>Deferred</code>
<p>Gets a resource by its id.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  

| Param | Type | Description |
| --- | --- | --- |
| resourceIdentifier | <code>string</code> \| [<code>Resource</code>](#EThing.Resource) |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get a resource by its id
EThing.get("54516eb").done(function(resource){
    console.log('the name is ' + resource.name());
})
```
<a name="EThing.usage"></a>

### EThing.usage([callback]) ⇒ <code>Deferred</code>
<p>Gets an object containing informations about space usage :</p>
<ul>
<li>used {number} the amount of space used in bytes</li>
<li>quota_size {number} the maximum space authorized in bytes</li>
</ul>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get the occupied space :
EThing.usage().done(function(usage){
    console.log('space used : ' + (100 * usage.used / usage.quota_size) );
})
```
<a name="EThing.initialize"></a>

### EThing.initialize(options, [errorFn]) ⇒ <code>Deferred</code>
<p>Initialize the eThing library.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/)</p>  
**Emits**: <code>EThing#ething.event:authenticated</code>  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.serverUrl | <code>number</code> | <p>The URL of your eThing server (e.g. http://hostname:8000 ).</p> |
| [options.apiKey] | <code>number</code> | <p>Authenticate with an API key.</p> |
| [options.login] | <code>number</code> | <p>Basic Authentication login (Should be used only server side i.e. NodeJS).</p> |
| [options.password] | <code>number</code> | <p>Basic Authentication password (Should be used only server side i.e. NodeJS).</p> |
| [errorFn] | <code>function</code> | <p>it is executed on authentication error.</p> |

**Example**  
```js
EThing.initialize({
   serverUrl: 'http://hostname:8000',
   apiKey: 'a4e28b3c-1f05-4a62-95f7-c12453b66b3c'
 }, function(){
   // on authentication success
   alert('connected !');
 }, function(error) {
   // on authentication error
   alert(error.message);
 });
```
<a name="EThing.authenticated"></a>

### EThing.authenticated(callback)
<p>Register a handler to be executed once the authentication is complete.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | <p>it is executed on authentication success.</p> |

<a name="EThing.notify"></a>

### EThing.notify([subject], message, [callback]) ⇒ <code>Deferred</code>
<p>Send a notification.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  
**Returns**: <code>Deferred</code> - <p>a [jQuery like Promise object](http://api.jquery.com/category/deferred-object/). [More ...](#EThing.request)</p>  

| Param | Type | Description |
| --- | --- | --- |
| [subject] | <code>string</code> | <p>The subject of the notification</p> |
| message | <code>string</code> | <p>The message of the notification</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.notify("hello world")
  .done(function(){
    alert("A notification has been sent");
  })
```
<a name="EThing.event_ething.resource.removed"></a>

### "ething.resource.removed"
**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing.event_ething.file.created"></a>

### "ething.file.created"
**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing.event_ething.table.created"></a>

### "ething.table.created"
**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing.event_ething.device.created"></a>

### "ething.device.created"
**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing.event_ething.app.created"></a>

### "ething.app.created"
**Kind**: event emitted by [<code>EThing</code>](#EThing)  
<a name="EThing.event_ething.authenticated"></a>

### "ething.authenticated"
<p>authenticated event.</p>

**Kind**: event emitted by [<code>EThing</code>](#EThing)  
