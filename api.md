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

* [EThing](#EThing)
    * [.Device](#EThing.Device) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new Device(json)](#new_EThing.Device_new)
        * _instance_
            * [.location()](#EThing.Device+location) ⇒ <code>string</code> \| <code>null</code>
            * [.connected()](#EThing.Device+connected) ⇒ <code>boolean</code>
            * [.lastSeenDate()](#EThing.Device+lastSeenDate) ⇒ <code>Date</code> \| <code>null</code>
            * [.hasBattery()](#EThing.Device+hasBattery) ⇒ <code>boolean</code>
            * [.battery()](#EThing.Device+battery) ⇒ <code>number</code>
            * [.execute(operationId, [data], [binary], [callback])](#EThing.Device+execute) ⇒ [<code>Device</code>](#EThing.Device)
            * [.executeUrl(operationId, [data])](#EThing.Device+executeUrl) ⇒ <code>string</code>
            * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
            * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
            * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
            * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
            * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
            * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
            * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
            * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
            * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
            * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
            * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
        * _static_
            * [.create(type, attributes, [callback])](#EThing.Device.create) ⇒ <code>Promise</code>
    * [.File](#EThing.File) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new File(json)](#new_EThing.File_new)
        * _instance_
            * [.size()](#EThing.File+size) ⇒ <code>number</code>
            * [.mime()](#EThing.File+mime) ⇒ <code>string</code>
            * [.contentModifiedDate()](#EThing.File+contentModifiedDate) ⇒ <code>Date</code>
            * [.thumbnailLink([auth])](#EThing.File+thumbnailLink) ⇒ <code>string</code> \| <code>null</code>
            * [.getContentUrl([auth])](#EThing.File+getContentUrl) ⇒ <code>string</code>
            * [.read([binary], [callback])](#EThing.File+read) ⇒ [<code>File</code>](#EThing.File)
            * [.write(data, [callback])](#EThing.File+write) ⇒ [<code>File</code>](#EThing.File)
            * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
            * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
            * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
            * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
            * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
            * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
            * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
            * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
            * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
            * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
            * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
        * _static_
            * [.create(attributes, [callback])](#EThing.File.create) ⇒ <code>Promise</code>
    * [.Flow](#EThing.Flow) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new Flow(json)](#new_EThing.Flow_new)
        * _instance_
            * [.nodes()](#EThing.Flow+nodes) ⇒ <code>object</code>
            * [.connections()](#EThing.Flow+connections) ⇒ <code>object</code>
            * [.deploy([callback])](#EThing.Flow+deploy) ⇒ [<code>Flow</code>](#EThing.Flow)
            * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
            * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
            * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
            * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
            * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
            * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
            * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
            * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
            * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
            * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
            * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
        * _static_
            * [.create(attributes, [callback])](#EThing.Flow.create) ⇒ <code>Promise</code>
    * [.Resource](#EThing.Resource)
        * [new Resource(json)](#new_EThing.Resource_new)
        * _instance_
            * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
            * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
            * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
            * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
            * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
            * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
            * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
            * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
            * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
            * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
            * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
        * _static_
            * [.create(attributes, [callback])](#EThing.Resource.create) ⇒ <code>Promise</code>
    * [.Table](#EThing.Table) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new Table(json)](#new_EThing.Table_new)
        * _instance_
            * [.length()](#EThing.Table+length) ⇒ <code>number</code>
            * [.maxLength()](#EThing.Table+maxLength) ⇒ <code>number</code> \| <code>null</code>
            * [.keys()](#EThing.Table+keys) ⇒ <code>Array.&lt;string&gt;</code>
            * [.contentModifiedDate()](#EThing.Table+contentModifiedDate) ⇒ <code>Date</code>
            * [.select([options], [callback])](#EThing.Table+select) ⇒ [<code>Table</code>](#EThing.Table)
            * [.computeStatistics(key, [query], [callback])](#EThing.Table+computeStatistics) ⇒ <code>Object</code>
            * [.removeRow(id, [callback])](#EThing.Table+removeRow) ⇒ [<code>Table</code>](#EThing.Table)
            * [.replaceRow(data, [callback])](#EThing.Table+replaceRow) ⇒ [<code>Table</code>](#EThing.Table)
            * [.findOneAndReplace(query, data, [upsert], [callback])](#EThing.Table+findOneAndReplace) ⇒ [<code>Table</code>](#EThing.Table)
            * [.insert(data, [invalid_field], [callback])](#EThing.Table+insert) ⇒ [<code>Table</code>](#EThing.Table)
            * [.import(data, [invalid_field], [skip_error], [callback])](#EThing.Table+import) ⇒ [<code>Table</code>](#EThing.Table)
            * [.getContentUrl([auth])](#EThing.Table+getContentUrl) ⇒ <code>string</code>
            * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
            * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
            * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
            * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
            * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
            * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
            * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
            * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
            * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
            * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
            * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
        * _static_
            * [.create(attributes, [callback])](#EThing.Table.create) ⇒ <code>Promise</code>
    * [.on](#EThing.on)
    * [.off](#EThing.off)
    * [.one](#EThing.one)
    * [.trigger](#EThing.trigger)
    * [.arbo](#EThing.arbo) : <code>object</code>
        * [.load([callback], [force])](#EThing.arbo.load) ⇒ <code>Promise</code>
        * [.refresh()](#EThing.arbo.refresh) ⇒ <code>Promise</code>
        * [.get(id)](#EThing.arbo.get) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * [.glob(filter)](#EThing.arbo.glob) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.list()](#EThing.arbo.list) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.find(filter)](#EThing.arbo.find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.isLoaded()](#EThing.arbo.isLoaded) ⇒ <code>boolean</code>
    * [.auth](#EThing.auth) : <code>object</code>
        * [.isAuthenticated()](#EThing.auth.isAuthenticated) ⇒ <code>boolean</code>
        * [.setApiKey(apiKey)](#EThing.auth.setApiKey)
        * [.setBasicAuth(login, password)](#EThing.auth.setBasicAuth)
    * [.request(options, [callback])](#EThing.request) ⇒ <code>Promise</code>
    * [.list([query], [callback])](#EThing.list) ⇒ <code>Promise</code>
    * [.get(resourceIdentifier, [callback])](#EThing.get) ⇒ <code>Promise</code>
    * [.dispatch(event)](#EThing.dispatch)
    * ["ething.resource.removed"](#EThing.event_ething.resource.removed)
    * ["ething.file.created"](#EThing.event_ething.file.created)
    * ["ething.table.created"](#EThing.event_ething.table.created)
    * ["ething.device.created"](#EThing.event_ething.device.created)
    * ["ething.app.created"](#EThing.event_ething.app.created)

<a name="EThing.Device"></a>

### EThing.Device ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The Device resource handle a device</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.Device](#EThing.Device) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new Device(json)](#new_EThing.Device_new)
    * _instance_
        * [.location()](#EThing.Device+location) ⇒ <code>string</code> \| <code>null</code>
        * [.connected()](#EThing.Device+connected) ⇒ <code>boolean</code>
        * [.lastSeenDate()](#EThing.Device+lastSeenDate) ⇒ <code>Date</code> \| <code>null</code>
        * [.hasBattery()](#EThing.Device+hasBattery) ⇒ <code>boolean</code>
        * [.battery()](#EThing.Device+battery) ⇒ <code>number</code>
        * [.execute(operationId, [data], [binary], [callback])](#EThing.Device+execute) ⇒ [<code>Device</code>](#EThing.Device)
        * [.executeUrl(operationId, [data])](#EThing.Device+executeUrl) ⇒ <code>string</code>
        * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
        * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
        * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
        * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
        * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
        * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
        * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
        * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
        * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
        * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
        * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * _static_
        * [.create(type, attributes, [callback])](#EThing.Device.create) ⇒ <code>Promise</code>

<a name="new_EThing.Device_new"></a>

#### new Device(json)
<p>Constructs a Device instance from an object decribing a device. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Device+location"></a>

#### device.location() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: <code>string</code> \| <code>null</code> - <p>Return either a string containing information about the location (coordinates, place, room ...) or empty if no location is defined for this device.</p>  
**this**: <code>{EThing.Device}</code>  
<a name="EThing.Device+connected"></a>

#### device.connected() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: <code>boolean</code> - <p>Return true if the device is connected.</p>  
**this**: <code>{EThing.Device}</code>  
<a name="EThing.Device+lastSeenDate"></a>

#### device.lastSeenDate() ⇒ <code>Date</code> \| <code>null</code>
**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Device}</code>  
<a name="EThing.Device+hasBattery"></a>

#### device.hasBattery() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Device}</code>  
<a name="EThing.Device+battery"></a>

#### device.battery() ⇒ <code>number</code>
**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Device}</code>  
<a name="EThing.Device+execute"></a>

#### device.execute(operationId, [data], [binary], [callback]) ⇒ [<code>Device</code>](#EThing.Device)
<p>Execute an operation on this device.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: [<code>Device</code>](#EThing.Device) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Device}</code>  

| Param | Type | Description |
| --- | --- | --- |
| operationId | <code>string</code> |  |
| [data] | <code>object</code> \| <code>array</code> \| <code>anything</code> | <p>the optional arguments required by the operation</p> |
| [binary] | <code>boolean</code> | <p>if true, return the content as ArrayBuffer, if false return the content as text. A string such as 'blob' or 'json' may also be passed.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// if this device is a switch :device.execute('setState', {	 state: true});// you can also pass the arguments as an array :device.execute('setState', [true]);// or as is :device.execute('setState', true);
```
<a name="EThing.Device+executeUrl"></a>

#### device.executeUrl(operationId, [data]) ⇒ <code>string</code>
<p>Returns an url for executing an operation.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: <code>string</code> - <p>The url.</p>  
**this**: <code>{EThing.Device}</code>  

| Param | Type | Description |
| --- | --- | --- |
| operationId | <code>string</code> |  |
| [data] | <code>object</code> | <p>the optional data required by the operation</p> |

**Example**  
```js
var image = new Image();image.src = device.executeUrl('getImage');document.body.appendChild(image);
```
<a name="EThing.Resource+json"></a>

#### device.json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+isTypeof"></a>

#### device.isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource+name"></a>

#### device.name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [basename](#EThing.Resource+basename).
To get only the PathName, see [dirname](#EThing.Resource+dirname).</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+dirname"></a>

#### device.dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+basename"></a>

#### device.basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+extension"></a>

#### device.extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+id"></a>

#### device.id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdBy"></a>

#### device.createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+type"></a>

#### device.type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+types"></a>

#### device.types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+baseType"></a>

#### device.baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdDate"></a>

#### device.createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+modifiedDate"></a>

#### device.modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+public"></a>

#### device.public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+data"></a>

#### device.data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource+attr"></a>

#### device.attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource+hasAttr"></a>

#### device.hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource+description"></a>

#### device.description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+remove"></a>

#### device.remove([callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().then(function(){  // the resource was successfully removed});
```
<a name="EThing.Resource+set"></a>

#### device.set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({  name: "newName.txt"}).then(function(){  console.log("the resource was successfully renamed to :"+this.name());});
```
<a name="EThing.Resource+setData"></a>

#### device.setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({  "key": "value"}).then(function(){  // success});// you can also write :resource.setData("key", "value").then(function(){  // success});
```
<a name="EThing.Device.create"></a>

#### Device.create(type, attributes, [callback]) ⇒ <code>Promise</code>
<p>Creates a new device</p>

**Kind**: static method of [<code>Device</code>](#EThing.Device)  
**Emits**: <code>EThing#ething.device.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | <p>the type of the device to create (ie: SSH, MQTT ...)</p> |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.Device.create('SSH', {  host: "localhost",  auth: {    user: "foo",    password: "bar"  }}).then(function(resource){    console.log('the new SSH device has been created');})
```
<a name="EThing.File"></a>

### EThing.File ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The File resource handle regular file such as image or text</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.File](#EThing.File) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new File(json)](#new_EThing.File_new)
    * _instance_
        * [.size()](#EThing.File+size) ⇒ <code>number</code>
        * [.mime()](#EThing.File+mime) ⇒ <code>string</code>
        * [.contentModifiedDate()](#EThing.File+contentModifiedDate) ⇒ <code>Date</code>
        * [.thumbnailLink([auth])](#EThing.File+thumbnailLink) ⇒ <code>string</code> \| <code>null</code>
        * [.getContentUrl([auth])](#EThing.File+getContentUrl) ⇒ <code>string</code>
        * [.read([binary], [callback])](#EThing.File+read) ⇒ [<code>File</code>](#EThing.File)
        * [.write(data, [callback])](#EThing.File+write) ⇒ [<code>File</code>](#EThing.File)
        * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
        * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
        * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
        * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
        * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
        * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
        * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
        * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
        * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
        * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
        * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * _static_
        * [.create(attributes, [callback])](#EThing.File.create) ⇒ <code>Promise</code>

<a name="new_EThing.File_new"></a>

#### new File(json)
<p>Constructs a File instance from an object decribing a file. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.File+size"></a>

#### file.size() ⇒ <code>number</code>
<p>Returns the size of this file in bytes.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File+mime"></a>

#### file.mime() ⇒ <code>string</code>
<p>Returns the MIME type of this file</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File+contentModifiedDate"></a>

#### file.contentModifiedDate() ⇒ <code>Date</code>
<p>Last time the content of this resource was modified</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File+thumbnailLink"></a>

#### file.thumbnailLink([auth]) ⇒ <code>string</code> \| <code>null</code>
<p>If this file has a thumbnail (thumbnail is only available for file with MIME type <strong>image/*</strong>), it returns his link, else it returns null.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// the simple wayvar image = new Image();image.src = imageFile.thumbnailLink(true);document.body.appendChild(image);// the hard wayEThing.request({  url: imageFile.thumbnailLink(),  dataType: "blob"}).then(function(blobData){  // success  var image = new Image();  image.src = window.URL.createObjectURL( blobData );  document.body.appendChild(image);});
```
<a name="EThing.File+getContentUrl"></a>

#### file.getContentUrl([auth]) ⇒ <code>string</code>
<p>Returns the link to access the content.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// using EThing.request() :EThing.request(file.getContentUrl()).then(function(content){  // success  console.log('content as text : '+content);});// HTML <img> Tag :var image = new Image();image.src = imageFile.getContentUrl(true);document.body.appendChild(image);
```
<a name="EThing.File+read"></a>

#### file.read([binary], [callback]) ⇒ [<code>File</code>](#EThing.File)
<p>Gets the content of this file as text or as binary data.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>File</code>](#EThing.File) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.File}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [binary] | <code>boolean</code> \| <code>string</code> | <p>if true, return the content as ArrayBuffer, if false return the content as text. A string such as 'blob' or 'json' may also be passed.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
file.read().then(function(content){  // success  console.log('content as text : '+content);});// nodejs + browser :file.read(true).then(function(contentAsArrayBuffer){  // success});// browser :file.read('blob').then(function(contentAsBlob){  // success});// NodeJs :var fs = require("fs");EThing.get('kDO5Fk4').then(function(resource){	resource.read(true).then(function(data){		// data : Buffer instance		fs.writeFile(resource.basename(), data, function(){			console.log('It\'s saved!');		});	});});
```
<a name="EThing.File+write"></a>

#### file.write(data, [callback]) ⇒ [<code>File</code>](#EThing.File)
<p>Writes some content to this file.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>File</code>](#EThing.File) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.File}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> \| <code>Blob</code> \| <code>Buffer</code> \| <code>ArrayBuffer</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
file.write("hello world !").then(function(){  // success});
```
<a name="EThing.Resource+json"></a>

#### file.json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+isTypeof"></a>

#### file.isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource+name"></a>

#### file.name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [basename](#EThing.Resource+basename).
To get only the PathName, see [dirname](#EThing.Resource+dirname).</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+dirname"></a>

#### file.dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+basename"></a>

#### file.basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+extension"></a>

#### file.extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+id"></a>

#### file.id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdBy"></a>

#### file.createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+type"></a>

#### file.type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+types"></a>

#### file.types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+baseType"></a>

#### file.baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdDate"></a>

#### file.createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+modifiedDate"></a>

#### file.modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+public"></a>

#### file.public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+data"></a>

#### file.data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource+attr"></a>

#### file.attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource+hasAttr"></a>

#### file.hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource+description"></a>

#### file.description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+remove"></a>

#### file.remove([callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().then(function(){  // the resource was successfully removed});
```
<a name="EThing.Resource+set"></a>

#### file.set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({  name: "newName.txt"}).then(function(){  console.log("the resource was successfully renamed to :"+this.name());});
```
<a name="EThing.Resource+setData"></a>

#### file.setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({  "key": "value"}).then(function(){  // success});// you can also write :resource.setData("key", "value").then(function(){  // success});
```
<a name="EThing.File.create"></a>

#### File.create(attributes, [callback]) ⇒ <code>Promise</code>
<p>Creates a new File from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the file</li>
<li>description {string} a string describing this file</li>
<li>data {object} key/value pairs to attach to this file</li>
</ul>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**Emits**: <code>EThing#ething.file.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.File.create({  name: "foobar.txt",  description: "this is my file"}).then(function(resource){    console.log('file created : ' + resource.name());})
```
<a name="EThing.Flow"></a>

### EThing.Flow ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The Rule resource handle an application</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.Flow](#EThing.Flow) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new Flow(json)](#new_EThing.Flow_new)
    * _instance_
        * [.nodes()](#EThing.Flow+nodes) ⇒ <code>object</code>
        * [.connections()](#EThing.Flow+connections) ⇒ <code>object</code>
        * [.deploy([callback])](#EThing.Flow+deploy) ⇒ [<code>Flow</code>](#EThing.Flow)
        * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
        * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
        * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
        * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
        * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
        * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
        * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
        * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
        * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
        * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
        * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * _static_
        * [.create(attributes, [callback])](#EThing.Flow.create) ⇒ <code>Promise</code>

<a name="new_EThing.Flow_new"></a>

#### new Flow(json)
<p>Constructs a Flow instance from an object decribing a flow. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Flow+nodes"></a>

#### flow.nodes() ⇒ <code>object</code>
<p>Returns the list of nodes.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Flow}</code>  
<a name="EThing.Flow+connections"></a>

#### flow.connections() ⇒ <code>object</code>
<p>Returns the list of connections.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Flow}</code>  
<a name="EThing.Flow+deploy"></a>

#### flow.deploy([callback]) ⇒ [<code>Flow</code>](#EThing.Flow)
<p>Deploy this flow.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**Returns**: [<code>Flow</code>](#EThing.Flow) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Flow}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Resource+json"></a>

#### flow.json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+isTypeof"></a>

#### flow.isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource+name"></a>

#### flow.name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [basename](#EThing.Resource+basename).
To get only the PathName, see [dirname](#EThing.Resource+dirname).</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+dirname"></a>

#### flow.dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+basename"></a>

#### flow.basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+extension"></a>

#### flow.extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+id"></a>

#### flow.id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdBy"></a>

#### flow.createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+type"></a>

#### flow.type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+types"></a>

#### flow.types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+baseType"></a>

#### flow.baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdDate"></a>

#### flow.createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+modifiedDate"></a>

#### flow.modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+public"></a>

#### flow.public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+data"></a>

#### flow.data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource+attr"></a>

#### flow.attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource+hasAttr"></a>

#### flow.hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource+description"></a>

#### flow.description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+remove"></a>

#### flow.remove([callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().then(function(){  // the resource was successfully removed});
```
<a name="EThing.Resource+set"></a>

#### flow.set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({  name: "newName.txt"}).then(function(){  console.log("the resource was successfully renamed to :"+this.name());});
```
<a name="EThing.Resource+setData"></a>

#### flow.setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({  "key": "value"}).then(function(){  // success});// you can also write :resource.setData("key", "value").then(function(){  // success});
```
<a name="EThing.Flow.create"></a>

#### Flow.create(attributes, [callback]) ⇒ <code>Promise</code>
<p>Creates a new Flow from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the flow</li>
<li>flow {object} the object describing the flow</li>
</ul>

**Kind**: static method of [<code>Flow</code>](#EThing.Flow)  
**Emits**: <code>EThing#ething.flow.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.Flow.create({  name: "myFlow"}).then(function(resource){    console.log('the new flow is created');})
```
<a name="EThing.Resource"></a>

### EThing.Resource
**Kind**: static class of [<code>EThing</code>](#EThing)  
**Access**: protected  

* [.Resource](#EThing.Resource)
    * [new Resource(json)](#new_EThing.Resource_new)
    * _instance_
        * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
        * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
        * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
        * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
        * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
        * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
        * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
        * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
        * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
        * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
        * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * _static_
        * [.create(attributes, [callback])](#EThing.Resource.create) ⇒ <code>Promise</code>

<a name="new_EThing.Resource_new"></a>

#### new Resource(json)
<p>Base class of all the resources</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+json"></a>

#### resource.json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+isTypeof"></a>

#### resource.isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource+name"></a>

#### resource.name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [basename](#EThing.Resource+basename).
To get only the PathName, see [dirname](#EThing.Resource+dirname).</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+dirname"></a>

#### resource.dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+basename"></a>

#### resource.basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+extension"></a>

#### resource.extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+id"></a>

#### resource.id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdBy"></a>

#### resource.createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+type"></a>

#### resource.type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+types"></a>

#### resource.types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+baseType"></a>

#### resource.baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdDate"></a>

#### resource.createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+modifiedDate"></a>

#### resource.modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+public"></a>

#### resource.public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+data"></a>

#### resource.data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource+attr"></a>

#### resource.attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource+hasAttr"></a>

#### resource.hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource+description"></a>

#### resource.description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+remove"></a>

#### resource.remove([callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().then(function(){  // the resource was successfully removed});
```
<a name="EThing.Resource+set"></a>

#### resource.set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({  name: "newName.txt"}).then(function(){  console.log("the resource was successfully renamed to :"+this.name());});
```
<a name="EThing.Resource+setData"></a>

#### resource.setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({  "key": "value"}).then(function(){  // success});// you can also write :resource.setData("key", "value").then(function(){  // success});
```
<a name="EThing.Resource.create"></a>

#### Resource.create(attributes, [callback]) ⇒ <code>Promise</code>
<p>Creates a new Resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**Emits**: <code>EThing#ething.resource.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.Resource.create({  type: "resources/File",  name: "foobar"}).then(function(resource){    console.log('created : ' + resource.name());})
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
        * [.length()](#EThing.Table+length) ⇒ <code>number</code>
        * [.maxLength()](#EThing.Table+maxLength) ⇒ <code>number</code> \| <code>null</code>
        * [.keys()](#EThing.Table+keys) ⇒ <code>Array.&lt;string&gt;</code>
        * [.contentModifiedDate()](#EThing.Table+contentModifiedDate) ⇒ <code>Date</code>
        * [.select([options], [callback])](#EThing.Table+select) ⇒ [<code>Table</code>](#EThing.Table)
        * [.computeStatistics(key, [query], [callback])](#EThing.Table+computeStatistics) ⇒ <code>Object</code>
        * [.removeRow(id, [callback])](#EThing.Table+removeRow) ⇒ [<code>Table</code>](#EThing.Table)
        * [.replaceRow(data, [callback])](#EThing.Table+replaceRow) ⇒ [<code>Table</code>](#EThing.Table)
        * [.findOneAndReplace(query, data, [upsert], [callback])](#EThing.Table+findOneAndReplace) ⇒ [<code>Table</code>](#EThing.Table)
        * [.insert(data, [invalid_field], [callback])](#EThing.Table+insert) ⇒ [<code>Table</code>](#EThing.Table)
        * [.import(data, [invalid_field], [skip_error], [callback])](#EThing.Table+import) ⇒ [<code>Table</code>](#EThing.Table)
        * [.getContentUrl([auth])](#EThing.Table+getContentUrl) ⇒ <code>string</code>
        * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
        * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
        * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
        * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
        * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
        * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
        * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
        * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
        * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
        * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
        * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * _static_
        * [.create(attributes, [callback])](#EThing.Table.create) ⇒ <code>Promise</code>

<a name="new_EThing.Table_new"></a>

#### new Table(json)
<p>Constructs a Table instance from an object decribing a table. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Table+length"></a>

#### table.length() ⇒ <code>number</code>
<p>The number of rows in this table</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table+maxLength"></a>

#### table.maxLength() ⇒ <code>number</code> \| <code>null</code>
<p>The maximum number of rows allowed in this table. Returns null if this feature is disable (number of rows is unlimited).</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table+keys"></a>

#### table.keys() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the keys in this table. <strong>The default keys (&quot;id&quot; and &quot;date&quot; are not listed)</strong>.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table+contentModifiedDate"></a>

#### table.contentModifiedDate() ⇒ <code>Date</code>
<p>Last time the content of this resource was modified</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table+select"></a>

#### table.select([options], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Returns rows.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
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
// returns all the content of a table :table.select().then(function(data){  // success});// returns the last 10 rows sorted by the "foo" column :table.select({start: -10, sort: "foo"}).then(function(data){  // success});
```
<a name="EThing.Table+computeStatistics"></a>

#### table.computeStatistics(key, [query], [callback]) ⇒ <code>Object</code>
<p>Performs statistics on a specific column.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: <code>Object</code> - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | <p>The column name on which the statistics should be performed.</p> |
| [query] | <code>string</code> | <p>A query string to filter the data.</p> |
| [callback] | <code>function</code> | <p>It is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Table+removeRow"></a>

#### table.removeRow(id, [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Removes one or multiple rows.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>The id of the row(s) to be removed</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// removes the last 10 rows :table.select(-10).then(function(data){  this.removeRow(data.map(function(row){    return row.id;  }));});
```
<a name="EThing.Table+replaceRow"></a>

#### table.replaceRow(data, [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Set new data to a row.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | <p>the data to be updated, it must contain the row id.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
table.replaceRow({	 'id': 'g45Tdk4',	 'value': 45}).then(function(data){  // updated !});
```
<a name="EThing.Table+findOneAndReplace"></a>

#### table.findOneAndReplace(query, data, [upsert], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Finds a single row matching the query and replaces it.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
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
table.findOneAndReplace("name=='foo'", {	 'name': 'foo',	 'value': 'bar'}).then(function(table){  // updated or inserted if not found !});
```
<a name="EThing.Table+insert"></a>

#### table.insert(data, [invalid_field], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Insert new data into the table. The data argument must be a key/value object.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [invalid_field] | <code>string</code> | <p>The behaviour to adopt when an invalid field name appears. The value must be one of the following : &quot;rename&quot;,&quot;stop&quot;,&quot;skip&quot;,&quot;none&quot;.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
table.insert({  'field1': "foobar",  'field2': 3.14,  'field3': true}).then(function(){  // success});
```
<a name="EThing.Table+import"></a>

#### table.import(data, [invalid_field], [skip_error], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Replace the content of this table by a new set of data.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.
// copy table content
var tableSrc, tableDst;
tableSrc.select().then(function(data){
  tableDst.import(data);
});</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;object&gt;</code> |  |
| [invalid_field] | <code>string</code> | <p>The behaviour to adopt when an invalid field name appears. The value must be one of the following : &quot;rename&quot;,&quot;stop&quot;,&quot;skip&quot;,&quot;none&quot;.</p> |
| [skip_error] | <code>bool</code> | <p>Whether to skip data on error or not</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Table+getContentUrl"></a>

#### table.getContentUrl([auth]) ⇒ <code>string</code>
<p>Returns the link to access the content.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// using EThing.request() :EThing.request(table.getContentUrl()).then(function(rows){  // success, rows is an array of object  console.log('number of rows : '+rows.length);});// or using jQuery :$.getJSON(table.getContentUrl(true)).then(function(rows){  // success});
```
<a name="EThing.Resource+json"></a>

#### table.json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+isTypeof"></a>

#### table.isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource+name"></a>

#### table.name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [basename](#EThing.Resource+basename).
To get only the PathName, see [dirname](#EThing.Resource+dirname).</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+dirname"></a>

#### table.dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+basename"></a>

#### table.basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+extension"></a>

#### table.extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+id"></a>

#### table.id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdBy"></a>

#### table.createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+type"></a>

#### table.type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+types"></a>

#### table.types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+baseType"></a>

#### table.baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdDate"></a>

#### table.createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+modifiedDate"></a>

#### table.modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+public"></a>

#### table.public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+data"></a>

#### table.data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource+attr"></a>

#### table.attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource+hasAttr"></a>

#### table.hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource+description"></a>

#### table.description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+remove"></a>

#### table.remove([callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().then(function(){  // the resource was successfully removed});
```
<a name="EThing.Resource+set"></a>

#### table.set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({  name: "newName.txt"}).then(function(){  console.log("the resource was successfully renamed to :"+this.name());});
```
<a name="EThing.Resource+setData"></a>

#### table.setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({  "key": "value"}).then(function(){  // success});// you can also write :resource.setData("key", "value").then(function(){  // success});
```
<a name="EThing.Table.create"></a>

#### Table.create(attributes, [callback]) ⇒ <code>Promise</code>
<p>Creates a new Table from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the table</li>
<li>description {string} a string describing this table</li>
<li>data {object} key/value pairs to attach to this table</li>
<li>maxLength {number} the maximum number of rows allowed in this table. 0 means unlimited. Default to 5000.</li>
</ul>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Emits**: <code>EThing#ething.table.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.Table.create({  name: "foobar"}).then(function(resource){    console.log('table created : ' + resource.name());})
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
<p>This library helps to search and find resources.</p>

**Kind**: static namespace of [<code>EThing</code>](#EThing)  
**Example**  
```js
// list all the txt files in the dir1 folderEThing.arbo.load(function(){  // the next line may list Table that ends with ".txt"  console.log(EThing.arbo.glob('dir1/*.txt');})
```

* [.arbo](#EThing.arbo) : <code>object</code>
    * [.load([callback], [force])](#EThing.arbo.load) ⇒ <code>Promise</code>
    * [.refresh()](#EThing.arbo.refresh) ⇒ <code>Promise</code>
    * [.get(id)](#EThing.arbo.get) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * [.glob(filter)](#EThing.arbo.glob) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.list()](#EThing.arbo.list) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.find(filter)](#EThing.arbo.find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.isLoaded()](#EThing.arbo.isLoaded) ⇒ <code>boolean</code>

<a name="EThing.arbo.load"></a>

#### arbo.load([callback], [force]) ⇒ <code>Promise</code>
<p>Load all available resources.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>function executed once the resources are loaded</p> |
| [force] | <code>boolean</code> | <p>force to reload the entire resources</p> |

<a name="EThing.arbo.refresh"></a>

#### arbo.refresh() ⇒ <code>Promise</code>
<p>Refresh the resources list from the server.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
**Returns**: <code>Promise</code> - <p>return a Promise object</p>  
<a name="EThing.arbo.get"></a>

#### arbo.get(id) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Find a resource by its unique id. For all the resources except the Folder, the id is a 7 character alphanumeric string.
Since there is no duplicate name for folders, their id is equal to their name.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
**Returns**: [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code> - <p>return undefined if not found</p>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>7 character alphanumeric string for all resources except for Folders which is their name.</p> |

<a name="EThing.arbo.glob"></a>

#### arbo.glob(filter) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>Returns a list of resources that match a *-wildcard style glob string.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  

| Param | Type | Description |
| --- | --- | --- |
| filter | <code>string</code> | <p>only the resources that match the glob filter are returned.</p> |

**Example**  
```js
// return all jpg and png files in 'dir' directory :EThing.arbo.glob('dir/{*.jpg,*.png}')// return all resource under 'dir' directory or subdirectories :EThing.arbo.glob('dir/**')
```
<a name="EThing.arbo.list"></a>

#### arbo.list() ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>return all the resources. Same as [EThing.arbo.find()](#EThing.arbo.find).</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
<a name="EThing.arbo.find"></a>

#### arbo.find(filter) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>Returns a list of resources that pass the test implemented by the provided function.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  

| Param | Type | Description |
| --- | --- | --- |
| filter | <code>function</code> | <p>Function is a predicate, to test each resource of the array. Return true to keep the resource, false otherwise.</p> |

<a name="EThing.arbo.isLoaded"></a>

#### arbo.isLoaded() ⇒ <code>boolean</code>
<p>Check if the resources are loaded (ie. if the [load](#EThing.arbo.load) function has been called and has returned).</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
<a name="EThing.auth"></a>

### EThing.auth : <code>object</code>
**Kind**: static namespace of [<code>EThing</code>](#EThing)  

* [.auth](#EThing.auth) : <code>object</code>
    * [.isAuthenticated()](#EThing.auth.isAuthenticated) ⇒ <code>boolean</code>
    * [.setApiKey(apiKey)](#EThing.auth.setApiKey)
    * [.setBasicAuth(login, password)](#EThing.auth.setBasicAuth)

<a name="EThing.auth.isAuthenticated"></a>

#### auth.isAuthenticated() ⇒ <code>boolean</code>
<p>Returns true if an authentication scheme has been set.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
<a name="EThing.auth.setApiKey"></a>

#### auth.setApiKey(apiKey)
<p>Set the apikey authentication scheme for the next requests.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  

| Param | Type |
| --- | --- |
| apiKey | <code>string</code> | 

<a name="EThing.auth.setBasicAuth"></a>

#### auth.setBasicAuth(login, password)
<p>Set the basic authentication scheme for the next requests.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  

| Param | Type |
| --- | --- |
| login | <code>string</code> | 
| password | <code>string</code> | 

<a name="EThing.request"></a>

### EThing.request(options, [callback]) ⇒ <code>Promise</code>
<p>Make a HTTP request. The options object contains the following properties :</p>
<ul>
<li>url {string} <strong>required</strong> The url of the request. The API url will be prepended to relative URLs.</li>
<li>method {string} The HTTP request method to use. Default is GET.</li>
<li>data {string|object|Blob|ArrayBuffer|Buffer} The query string for GET request. The HTTP request body for POST|PATCH|PUT requests. If an object is given, it will be serialized into a query string.</li>
<li>contentType {string} When sending data to the server, use this content type. Default is 'application/octet-stream' if the data is an instance of ArrayBuffer or Buffer, if data is an instance of Blob, the default will be the type of the data itself, else 'application/x-www-form-urlencoded; charset=UTF-8'.</li>
<li>dataType {string} The type of data that you're expecting back from the server: 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'</li>
<li>headers {object} Additional HTTP request headers.</li>
<li>context {object} The value of this provided for the call of the callback</li>
<li>converter {function(data,XHR)} A function that returns the transformed value of the response</li>
</ul>
<p>You may also give a callback as a second parameter. This callback is executed when the request is complete whether in failure or success.
On success, it receives the returned request data, as well as the XMLHttpRequest object.
On failure, the first parameter will be a Error object describing the error.
To check if a request is in failure :</p>
<pre><code>EThing.request(options,function(data,error){
    if(error){
      // an error occurs, print the associated message
      console.log(error);
    }
  })`
</code></pre>


<p>This function returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>string</code> \| <code>object</code> | <p>a set of key/value pairs that configure the request. If an URL is given, a GET request with the default options is made.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// GET requestEThing.request('/resources') // is equivalent to EThing.list()// pass an object to make more complex request// store some data in a fileEThing.request({  url: '/files/'+fileId,  method: 'PUT',  data: 'some content here ...',  contentType: 'text/plain'}).then(function(file){  console.log("the content was stored in the file "+file.name());}).catch(function(error){  console.log("an error occurs : "+error);});
```
<a name="EThing.list"></a>

### EThing.list([query], [callback]) ⇒ <code>Promise</code>
<p>This function get the available resources. A filter may be given to retrieve resources with specific attributes (see the HTTP API for more details).</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| [query] | <code>string</code> | <p>Query string for searching resources</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get all the resourcesEThing.list().then(function(resources){    console.log(resources);})// get only File & Table resourcesEThing.list('type == "File" or type == "Table"').then(function(resources){    console.log(resources);})
```
<a name="EThing.get"></a>

### EThing.get(resourceIdentifier, [callback]) ⇒ <code>Promise</code>
<p>Gets a resource by its id.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| resourceIdentifier | <code>string</code> \| [<code>Resource</code>](#EThing.Resource) |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get a resource by its idEThing.get("54516eb").then(function(resource){    console.log('the name is ' + resource.name());})
```
<a name="EThing.dispatch"></a>

### EThing.dispatch(event)
<p>dispatch an event emitted by the server (through SSE or socketio)</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>object</code> | <p>the event object provided by the server</p> |

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
<a name="EThing"></a>

## EThing : <code>object</code>
<p>Contains all eThing API classes and functions.</p>

**Kind**: global namespace  

* [EThing](#EThing) : <code>object</code>
    * [.Device](#EThing.Device) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new Device(json)](#new_EThing.Device_new)
        * _instance_
            * [.location()](#EThing.Device+location) ⇒ <code>string</code> \| <code>null</code>
            * [.connected()](#EThing.Device+connected) ⇒ <code>boolean</code>
            * [.lastSeenDate()](#EThing.Device+lastSeenDate) ⇒ <code>Date</code> \| <code>null</code>
            * [.hasBattery()](#EThing.Device+hasBattery) ⇒ <code>boolean</code>
            * [.battery()](#EThing.Device+battery) ⇒ <code>number</code>
            * [.execute(operationId, [data], [binary], [callback])](#EThing.Device+execute) ⇒ [<code>Device</code>](#EThing.Device)
            * [.executeUrl(operationId, [data])](#EThing.Device+executeUrl) ⇒ <code>string</code>
            * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
            * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
            * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
            * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
            * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
            * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
            * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
            * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
            * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
            * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
            * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
        * _static_
            * [.create(type, attributes, [callback])](#EThing.Device.create) ⇒ <code>Promise</code>
    * [.File](#EThing.File) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new File(json)](#new_EThing.File_new)
        * _instance_
            * [.size()](#EThing.File+size) ⇒ <code>number</code>
            * [.mime()](#EThing.File+mime) ⇒ <code>string</code>
            * [.contentModifiedDate()](#EThing.File+contentModifiedDate) ⇒ <code>Date</code>
            * [.thumbnailLink([auth])](#EThing.File+thumbnailLink) ⇒ <code>string</code> \| <code>null</code>
            * [.getContentUrl([auth])](#EThing.File+getContentUrl) ⇒ <code>string</code>
            * [.read([binary], [callback])](#EThing.File+read) ⇒ [<code>File</code>](#EThing.File)
            * [.write(data, [callback])](#EThing.File+write) ⇒ [<code>File</code>](#EThing.File)
            * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
            * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
            * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
            * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
            * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
            * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
            * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
            * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
            * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
            * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
            * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
        * _static_
            * [.create(attributes, [callback])](#EThing.File.create) ⇒ <code>Promise</code>
    * [.Flow](#EThing.Flow) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new Flow(json)](#new_EThing.Flow_new)
        * _instance_
            * [.nodes()](#EThing.Flow+nodes) ⇒ <code>object</code>
            * [.connections()](#EThing.Flow+connections) ⇒ <code>object</code>
            * [.deploy([callback])](#EThing.Flow+deploy) ⇒ [<code>Flow</code>](#EThing.Flow)
            * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
            * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
            * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
            * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
            * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
            * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
            * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
            * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
            * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
            * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
            * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
        * _static_
            * [.create(attributes, [callback])](#EThing.Flow.create) ⇒ <code>Promise</code>
    * [.Resource](#EThing.Resource)
        * [new Resource(json)](#new_EThing.Resource_new)
        * _instance_
            * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
            * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
            * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
            * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
            * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
            * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
            * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
            * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
            * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
            * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
            * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
        * _static_
            * [.create(attributes, [callback])](#EThing.Resource.create) ⇒ <code>Promise</code>
    * [.Table](#EThing.Table) ⇐ [<code>Resource</code>](#EThing.Resource)
        * [new Table(json)](#new_EThing.Table_new)
        * _instance_
            * [.length()](#EThing.Table+length) ⇒ <code>number</code>
            * [.maxLength()](#EThing.Table+maxLength) ⇒ <code>number</code> \| <code>null</code>
            * [.keys()](#EThing.Table+keys) ⇒ <code>Array.&lt;string&gt;</code>
            * [.contentModifiedDate()](#EThing.Table+contentModifiedDate) ⇒ <code>Date</code>
            * [.select([options], [callback])](#EThing.Table+select) ⇒ [<code>Table</code>](#EThing.Table)
            * [.computeStatistics(key, [query], [callback])](#EThing.Table+computeStatistics) ⇒ <code>Object</code>
            * [.removeRow(id, [callback])](#EThing.Table+removeRow) ⇒ [<code>Table</code>](#EThing.Table)
            * [.replaceRow(data, [callback])](#EThing.Table+replaceRow) ⇒ [<code>Table</code>](#EThing.Table)
            * [.findOneAndReplace(query, data, [upsert], [callback])](#EThing.Table+findOneAndReplace) ⇒ [<code>Table</code>](#EThing.Table)
            * [.insert(data, [invalid_field], [callback])](#EThing.Table+insert) ⇒ [<code>Table</code>](#EThing.Table)
            * [.import(data, [invalid_field], [skip_error], [callback])](#EThing.Table+import) ⇒ [<code>Table</code>](#EThing.Table)
            * [.getContentUrl([auth])](#EThing.Table+getContentUrl) ⇒ <code>string</code>
            * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
            * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
            * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
            * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
            * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
            * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
            * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
            * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
            * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
            * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
            * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
            * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
            * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
            * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
            * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
            * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
            * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
            * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
            * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
            * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
        * _static_
            * [.create(attributes, [callback])](#EThing.Table.create) ⇒ <code>Promise</code>
    * [.on](#EThing.on)
    * [.off](#EThing.off)
    * [.one](#EThing.one)
    * [.trigger](#EThing.trigger)
    * [.arbo](#EThing.arbo) : <code>object</code>
        * [.load([callback], [force])](#EThing.arbo.load) ⇒ <code>Promise</code>
        * [.refresh()](#EThing.arbo.refresh) ⇒ <code>Promise</code>
        * [.get(id)](#EThing.arbo.get) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
        * [.glob(filter)](#EThing.arbo.glob) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.list()](#EThing.arbo.list) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.find(filter)](#EThing.arbo.find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
        * [.isLoaded()](#EThing.arbo.isLoaded) ⇒ <code>boolean</code>
    * [.auth](#EThing.auth) : <code>object</code>
        * [.isAuthenticated()](#EThing.auth.isAuthenticated) ⇒ <code>boolean</code>
        * [.setApiKey(apiKey)](#EThing.auth.setApiKey)
        * [.setBasicAuth(login, password)](#EThing.auth.setBasicAuth)
    * [.request(options, [callback])](#EThing.request) ⇒ <code>Promise</code>
    * [.list([query], [callback])](#EThing.list) ⇒ <code>Promise</code>
    * [.get(resourceIdentifier, [callback])](#EThing.get) ⇒ <code>Promise</code>
    * [.dispatch(event)](#EThing.dispatch)
    * ["ething.resource.removed"](#EThing.event_ething.resource.removed)
    * ["ething.file.created"](#EThing.event_ething.file.created)
    * ["ething.table.created"](#EThing.event_ething.table.created)
    * ["ething.device.created"](#EThing.event_ething.device.created)
    * ["ething.app.created"](#EThing.event_ething.app.created)

<a name="EThing.Device"></a>

### EThing.Device ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The Device resource handle a device</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.Device](#EThing.Device) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new Device(json)](#new_EThing.Device_new)
    * _instance_
        * [.location()](#EThing.Device+location) ⇒ <code>string</code> \| <code>null</code>
        * [.connected()](#EThing.Device+connected) ⇒ <code>boolean</code>
        * [.lastSeenDate()](#EThing.Device+lastSeenDate) ⇒ <code>Date</code> \| <code>null</code>
        * [.hasBattery()](#EThing.Device+hasBattery) ⇒ <code>boolean</code>
        * [.battery()](#EThing.Device+battery) ⇒ <code>number</code>
        * [.execute(operationId, [data], [binary], [callback])](#EThing.Device+execute) ⇒ [<code>Device</code>](#EThing.Device)
        * [.executeUrl(operationId, [data])](#EThing.Device+executeUrl) ⇒ <code>string</code>
        * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
        * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
        * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
        * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
        * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
        * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
        * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
        * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
        * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
        * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
        * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * _static_
        * [.create(type, attributes, [callback])](#EThing.Device.create) ⇒ <code>Promise</code>

<a name="new_EThing.Device_new"></a>

#### new Device(json)
<p>Constructs a Device instance from an object decribing a device. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Device+location"></a>

#### device.location() ⇒ <code>string</code> \| <code>null</code>
**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: <code>string</code> \| <code>null</code> - <p>Return either a string containing information about the location (coordinates, place, room ...) or empty if no location is defined for this device.</p>  
**this**: <code>{EThing.Device}</code>  
<a name="EThing.Device+connected"></a>

#### device.connected() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: <code>boolean</code> - <p>Return true if the device is connected.</p>  
**this**: <code>{EThing.Device}</code>  
<a name="EThing.Device+lastSeenDate"></a>

#### device.lastSeenDate() ⇒ <code>Date</code> \| <code>null</code>
**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Device}</code>  
<a name="EThing.Device+hasBattery"></a>

#### device.hasBattery() ⇒ <code>boolean</code>
**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Device}</code>  
<a name="EThing.Device+battery"></a>

#### device.battery() ⇒ <code>number</code>
**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Device}</code>  
<a name="EThing.Device+execute"></a>

#### device.execute(operationId, [data], [binary], [callback]) ⇒ [<code>Device</code>](#EThing.Device)
<p>Execute an operation on this device.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: [<code>Device</code>](#EThing.Device) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Device}</code>  

| Param | Type | Description |
| --- | --- | --- |
| operationId | <code>string</code> |  |
| [data] | <code>object</code> \| <code>array</code> \| <code>anything</code> | <p>the optional arguments required by the operation</p> |
| [binary] | <code>boolean</code> | <p>if true, return the content as ArrayBuffer, if false return the content as text. A string such as 'blob' or 'json' may also be passed.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// if this device is a switch :device.execute('setState', {	 state: true});// you can also pass the arguments as an array :device.execute('setState', [true]);// or as is :device.execute('setState', true);
```
<a name="EThing.Device+executeUrl"></a>

#### device.executeUrl(operationId, [data]) ⇒ <code>string</code>
<p>Returns an url for executing an operation.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: <code>string</code> - <p>The url.</p>  
**this**: <code>{EThing.Device}</code>  

| Param | Type | Description |
| --- | --- | --- |
| operationId | <code>string</code> |  |
| [data] | <code>object</code> | <p>the optional data required by the operation</p> |

**Example**  
```js
var image = new Image();image.src = device.executeUrl('getImage');document.body.appendChild(image);
```
<a name="EThing.Resource+json"></a>

#### device.json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+isTypeof"></a>

#### device.isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource+name"></a>

#### device.name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [basename](#EThing.Resource+basename).
To get only the PathName, see [dirname](#EThing.Resource+dirname).</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+dirname"></a>

#### device.dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+basename"></a>

#### device.basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+extension"></a>

#### device.extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+id"></a>

#### device.id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdBy"></a>

#### device.createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+type"></a>

#### device.type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+types"></a>

#### device.types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+baseType"></a>

#### device.baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdDate"></a>

#### device.createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+modifiedDate"></a>

#### device.modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+public"></a>

#### device.public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+data"></a>

#### device.data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource+attr"></a>

#### device.attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource+hasAttr"></a>

#### device.hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource+description"></a>

#### device.description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+remove"></a>

#### device.remove([callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().then(function(){  // the resource was successfully removed});
```
<a name="EThing.Resource+set"></a>

#### device.set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({  name: "newName.txt"}).then(function(){  console.log("the resource was successfully renamed to :"+this.name());});
```
<a name="EThing.Resource+setData"></a>

#### device.setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: instance method of [<code>Device</code>](#EThing.Device)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({  "key": "value"}).then(function(){  // success});// you can also write :resource.setData("key", "value").then(function(){  // success});
```
<a name="EThing.Device.create"></a>

#### Device.create(type, attributes, [callback]) ⇒ <code>Promise</code>
<p>Creates a new device</p>

**Kind**: static method of [<code>Device</code>](#EThing.Device)  
**Emits**: <code>EThing#ething.device.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| type | <code>string</code> | <p>the type of the device to create (ie: SSH, MQTT ...)</p> |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.Device.create('SSH', {  host: "localhost",  auth: {    user: "foo",    password: "bar"  }}).then(function(resource){    console.log('the new SSH device has been created');})
```
<a name="EThing.File"></a>

### EThing.File ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The File resource handle regular file such as image or text</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.File](#EThing.File) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new File(json)](#new_EThing.File_new)
    * _instance_
        * [.size()](#EThing.File+size) ⇒ <code>number</code>
        * [.mime()](#EThing.File+mime) ⇒ <code>string</code>
        * [.contentModifiedDate()](#EThing.File+contentModifiedDate) ⇒ <code>Date</code>
        * [.thumbnailLink([auth])](#EThing.File+thumbnailLink) ⇒ <code>string</code> \| <code>null</code>
        * [.getContentUrl([auth])](#EThing.File+getContentUrl) ⇒ <code>string</code>
        * [.read([binary], [callback])](#EThing.File+read) ⇒ [<code>File</code>](#EThing.File)
        * [.write(data, [callback])](#EThing.File+write) ⇒ [<code>File</code>](#EThing.File)
        * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
        * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
        * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
        * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
        * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
        * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
        * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
        * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
        * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
        * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
        * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * _static_
        * [.create(attributes, [callback])](#EThing.File.create) ⇒ <code>Promise</code>

<a name="new_EThing.File_new"></a>

#### new File(json)
<p>Constructs a File instance from an object decribing a file. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.File+size"></a>

#### file.size() ⇒ <code>number</code>
<p>Returns the size of this file in bytes.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File+mime"></a>

#### file.mime() ⇒ <code>string</code>
<p>Returns the MIME type of this file</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File+contentModifiedDate"></a>

#### file.contentModifiedDate() ⇒ <code>Date</code>
<p>Last time the content of this resource was modified</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  
<a name="EThing.File+thumbnailLink"></a>

#### file.thumbnailLink([auth]) ⇒ <code>string</code> \| <code>null</code>
<p>If this file has a thumbnail (thumbnail is only available for file with MIME type <strong>image/*</strong>), it returns his link, else it returns null.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// the simple wayvar image = new Image();image.src = imageFile.thumbnailLink(true);document.body.appendChild(image);// the hard wayEThing.request({  url: imageFile.thumbnailLink(),  dataType: "blob"}).then(function(blobData){  // success  var image = new Image();  image.src = window.URL.createObjectURL( blobData );  document.body.appendChild(image);});
```
<a name="EThing.File+getContentUrl"></a>

#### file.getContentUrl([auth]) ⇒ <code>string</code>
<p>Returns the link to access the content.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.File}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// using EThing.request() :EThing.request(file.getContentUrl()).then(function(content){  // success  console.log('content as text : '+content);});// HTML <img> Tag :var image = new Image();image.src = imageFile.getContentUrl(true);document.body.appendChild(image);
```
<a name="EThing.File+read"></a>

#### file.read([binary], [callback]) ⇒ [<code>File</code>](#EThing.File)
<p>Gets the content of this file as text or as binary data.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>File</code>](#EThing.File) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.File}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [binary] | <code>boolean</code> \| <code>string</code> | <p>if true, return the content as ArrayBuffer, if false return the content as text. A string such as 'blob' or 'json' may also be passed.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
file.read().then(function(content){  // success  console.log('content as text : '+content);});// nodejs + browser :file.read(true).then(function(contentAsArrayBuffer){  // success});// browser :file.read('blob').then(function(contentAsBlob){  // success});// NodeJs :var fs = require("fs");EThing.get('kDO5Fk4').then(function(resource){	resource.read(true).then(function(data){		// data : Buffer instance		fs.writeFile(resource.basename(), data, function(){			console.log('It\'s saved!');		});	});});
```
<a name="EThing.File+write"></a>

#### file.write(data, [callback]) ⇒ [<code>File</code>](#EThing.File)
<p>Writes some content to this file.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>File</code>](#EThing.File) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.File}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>string</code> \| <code>Blob</code> \| <code>Buffer</code> \| <code>ArrayBuffer</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
file.write("hello world !").then(function(){  // success});
```
<a name="EThing.Resource+json"></a>

#### file.json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+isTypeof"></a>

#### file.isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource+name"></a>

#### file.name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [basename](#EThing.Resource+basename).
To get only the PathName, see [dirname](#EThing.Resource+dirname).</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+dirname"></a>

#### file.dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+basename"></a>

#### file.basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+extension"></a>

#### file.extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+id"></a>

#### file.id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdBy"></a>

#### file.createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+type"></a>

#### file.type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+types"></a>

#### file.types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+baseType"></a>

#### file.baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdDate"></a>

#### file.createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+modifiedDate"></a>

#### file.modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+public"></a>

#### file.public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+data"></a>

#### file.data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource+attr"></a>

#### file.attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource+hasAttr"></a>

#### file.hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource+description"></a>

#### file.description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+remove"></a>

#### file.remove([callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().then(function(){  // the resource was successfully removed});
```
<a name="EThing.Resource+set"></a>

#### file.set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({  name: "newName.txt"}).then(function(){  console.log("the resource was successfully renamed to :"+this.name());});
```
<a name="EThing.Resource+setData"></a>

#### file.setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: instance method of [<code>File</code>](#EThing.File)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({  "key": "value"}).then(function(){  // success});// you can also write :resource.setData("key", "value").then(function(){  // success});
```
<a name="EThing.File.create"></a>

#### File.create(attributes, [callback]) ⇒ <code>Promise</code>
<p>Creates a new File from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the file</li>
<li>description {string} a string describing this file</li>
<li>data {object} key/value pairs to attach to this file</li>
</ul>

**Kind**: static method of [<code>File</code>](#EThing.File)  
**Emits**: <code>EThing#ething.file.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.File.create({  name: "foobar.txt",  description: "this is my file"}).then(function(resource){    console.log('file created : ' + resource.name());})
```
<a name="EThing.Flow"></a>

### EThing.Flow ⇐ [<code>Resource</code>](#EThing.Resource)
<p>The Rule resource handle an application</p>

**Kind**: static class of [<code>EThing</code>](#EThing)  
**Extends**: [<code>Resource</code>](#EThing.Resource)  
**Access**: protected  

* [.Flow](#EThing.Flow) ⇐ [<code>Resource</code>](#EThing.Resource)
    * [new Flow(json)](#new_EThing.Flow_new)
    * _instance_
        * [.nodes()](#EThing.Flow+nodes) ⇒ <code>object</code>
        * [.connections()](#EThing.Flow+connections) ⇒ <code>object</code>
        * [.deploy([callback])](#EThing.Flow+deploy) ⇒ [<code>Flow</code>](#EThing.Flow)
        * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
        * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
        * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
        * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
        * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
        * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
        * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
        * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
        * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
        * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
        * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * _static_
        * [.create(attributes, [callback])](#EThing.Flow.create) ⇒ <code>Promise</code>

<a name="new_EThing.Flow_new"></a>

#### new Flow(json)
<p>Constructs a Flow instance from an object decribing a flow. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Flow+nodes"></a>

#### flow.nodes() ⇒ <code>object</code>
<p>Returns the list of nodes.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Flow}</code>  
<a name="EThing.Flow+connections"></a>

#### flow.connections() ⇒ <code>object</code>
<p>Returns the list of connections.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Flow}</code>  
<a name="EThing.Flow+deploy"></a>

#### flow.deploy([callback]) ⇒ [<code>Flow</code>](#EThing.Flow)
<p>Deploy this flow.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**Returns**: [<code>Flow</code>](#EThing.Flow) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Flow}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Resource+json"></a>

#### flow.json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+isTypeof"></a>

#### flow.isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource+name"></a>

#### flow.name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [basename](#EThing.Resource+basename).
To get only the PathName, see [dirname](#EThing.Resource+dirname).</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+dirname"></a>

#### flow.dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+basename"></a>

#### flow.basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+extension"></a>

#### flow.extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+id"></a>

#### flow.id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdBy"></a>

#### flow.createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+type"></a>

#### flow.type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+types"></a>

#### flow.types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+baseType"></a>

#### flow.baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdDate"></a>

#### flow.createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+modifiedDate"></a>

#### flow.modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+public"></a>

#### flow.public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+data"></a>

#### flow.data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource+attr"></a>

#### flow.attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource+hasAttr"></a>

#### flow.hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource+description"></a>

#### flow.description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+remove"></a>

#### flow.remove([callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().then(function(){  // the resource was successfully removed});
```
<a name="EThing.Resource+set"></a>

#### flow.set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({  name: "newName.txt"}).then(function(){  console.log("the resource was successfully renamed to :"+this.name());});
```
<a name="EThing.Resource+setData"></a>

#### flow.setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: instance method of [<code>Flow</code>](#EThing.Flow)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({  "key": "value"}).then(function(){  // success});// you can also write :resource.setData("key", "value").then(function(){  // success});
```
<a name="EThing.Flow.create"></a>

#### Flow.create(attributes, [callback]) ⇒ <code>Promise</code>
<p>Creates a new Flow from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the flow</li>
<li>flow {object} the object describing the flow</li>
</ul>

**Kind**: static method of [<code>Flow</code>](#EThing.Flow)  
**Emits**: <code>EThing#ething.flow.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.Flow.create({  name: "myFlow"}).then(function(resource){    console.log('the new flow is created');})
```
<a name="EThing.Resource"></a>

### EThing.Resource
**Kind**: static class of [<code>EThing</code>](#EThing)  
**Access**: protected  

* [.Resource](#EThing.Resource)
    * [new Resource(json)](#new_EThing.Resource_new)
    * _instance_
        * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
        * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
        * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
        * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
        * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
        * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
        * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
        * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
        * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
        * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
        * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * _static_
        * [.create(attributes, [callback])](#EThing.Resource.create) ⇒ <code>Promise</code>

<a name="new_EThing.Resource_new"></a>

#### new Resource(json)
<p>Base class of all the resources</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Resource+json"></a>

#### resource.json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+isTypeof"></a>

#### resource.isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource+name"></a>

#### resource.name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [basename](#EThing.Resource+basename).
To get only the PathName, see [dirname](#EThing.Resource+dirname).</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+dirname"></a>

#### resource.dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+basename"></a>

#### resource.basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+extension"></a>

#### resource.extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+id"></a>

#### resource.id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdBy"></a>

#### resource.createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+type"></a>

#### resource.type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+types"></a>

#### resource.types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+baseType"></a>

#### resource.baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdDate"></a>

#### resource.createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+modifiedDate"></a>

#### resource.modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+public"></a>

#### resource.public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+data"></a>

#### resource.data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource+attr"></a>

#### resource.attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource+hasAttr"></a>

#### resource.hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource+description"></a>

#### resource.description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+remove"></a>

#### resource.remove([callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().then(function(){  // the resource was successfully removed});
```
<a name="EThing.Resource+set"></a>

#### resource.set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({  name: "newName.txt"}).then(function(){  console.log("the resource was successfully renamed to :"+this.name());});
```
<a name="EThing.Resource+setData"></a>

#### resource.setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: instance method of [<code>Resource</code>](#EThing.Resource)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({  "key": "value"}).then(function(){  // success});// you can also write :resource.setData("key", "value").then(function(){  // success});
```
<a name="EThing.Resource.create"></a>

#### Resource.create(attributes, [callback]) ⇒ <code>Promise</code>
<p>Creates a new Resource</p>

**Kind**: static method of [<code>Resource</code>](#EThing.Resource)  
**Emits**: <code>EThing#ething.resource.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.Resource.create({  type: "resources/File",  name: "foobar"}).then(function(resource){    console.log('created : ' + resource.name());})
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
        * [.length()](#EThing.Table+length) ⇒ <code>number</code>
        * [.maxLength()](#EThing.Table+maxLength) ⇒ <code>number</code> \| <code>null</code>
        * [.keys()](#EThing.Table+keys) ⇒ <code>Array.&lt;string&gt;</code>
        * [.contentModifiedDate()](#EThing.Table+contentModifiedDate) ⇒ <code>Date</code>
        * [.select([options], [callback])](#EThing.Table+select) ⇒ [<code>Table</code>](#EThing.Table)
        * [.computeStatistics(key, [query], [callback])](#EThing.Table+computeStatistics) ⇒ <code>Object</code>
        * [.removeRow(id, [callback])](#EThing.Table+removeRow) ⇒ [<code>Table</code>](#EThing.Table)
        * [.replaceRow(data, [callback])](#EThing.Table+replaceRow) ⇒ [<code>Table</code>](#EThing.Table)
        * [.findOneAndReplace(query, data, [upsert], [callback])](#EThing.Table+findOneAndReplace) ⇒ [<code>Table</code>](#EThing.Table)
        * [.insert(data, [invalid_field], [callback])](#EThing.Table+insert) ⇒ [<code>Table</code>](#EThing.Table)
        * [.import(data, [invalid_field], [skip_error], [callback])](#EThing.Table+import) ⇒ [<code>Table</code>](#EThing.Table)
        * [.getContentUrl([auth])](#EThing.Table+getContentUrl) ⇒ <code>string</code>
        * [.json()](#EThing.Resource+json) ⇒ <code>object</code>
        * [.isTypeof(type)](#EThing.Resource+isTypeof) ⇒ <code>boolean</code>
        * [.name()](#EThing.Resource+name) ⇒ <code>string</code>
        * [.dirname()](#EThing.Resource+dirname) ⇒ <code>string</code>
        * [.basename()](#EThing.Resource+basename) ⇒ <code>string</code>
        * [.extension()](#EThing.Resource+extension) ⇒ <code>string</code>
        * [.id()](#EThing.Resource+id) ⇒ <code>string</code>
        * [.createdBy()](#EThing.Resource+createdBy) ⇒ <code>string</code> \| <code>null</code>
        * [.type()](#EThing.Resource+type) ⇒ <code>string</code>
        * [.types()](#EThing.Resource+types) ⇒ <code>Array.&lt;string&gt;</code>
        * [.baseType()](#EThing.Resource+baseType) ⇒ <code>string</code>
        * [.createdDate()](#EThing.Resource+createdDate) ⇒ <code>Date</code>
        * [.modifiedDate()](#EThing.Resource+modifiedDate) ⇒ <code>Date</code>
        * [.public()](#EThing.Resource+public) ⇒ <code>boolean</code> \| <code>string</code>
        * [.data([name], [defaultValue])](#EThing.Resource+data) ⇒ <code>object</code> \| <code>null</code>
        * [.attr([name])](#EThing.Resource+attr) ⇒ <code>object</code> \| <code>null</code>
        * [.hasAttr(name)](#EThing.Resource+hasAttr) ⇒ <code>boolean</code>
        * [.description()](#EThing.Resource+description) ⇒ <code>string</code>
        * [.remove([callback])](#EThing.Resource+remove) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.set(properties, [callback])](#EThing.Resource+set) ⇒ [<code>Resource</code>](#EThing.Resource)
        * [.setData(data, [callback])](#EThing.Resource+setData) ⇒ [<code>Resource</code>](#EThing.Resource)
    * _static_
        * [.create(attributes, [callback])](#EThing.Table.create) ⇒ <code>Promise</code>

<a name="new_EThing.Table_new"></a>

#### new Table(json)
<p>Constructs a Table instance from an object decribing a table. Should not be called directly. Use instead [list](#EThing.list).</p>


| Param | Type |
| --- | --- |
| json | <code>object</code> | 

<a name="EThing.Table+length"></a>

#### table.length() ⇒ <code>number</code>
<p>The number of rows in this table</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table+maxLength"></a>

#### table.maxLength() ⇒ <code>number</code> \| <code>null</code>
<p>The maximum number of rows allowed in this table. Returns null if this feature is disable (number of rows is unlimited).</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table+keys"></a>

#### table.keys() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the keys in this table. <strong>The default keys (&quot;id&quot; and &quot;date&quot; are not listed)</strong>.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table+contentModifiedDate"></a>

#### table.contentModifiedDate() ⇒ <code>Date</code>
<p>Last time the content of this resource was modified</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  
<a name="EThing.Table+select"></a>

#### table.select([options], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Returns rows.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
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
// returns all the content of a table :table.select().then(function(data){  // success});// returns the last 10 rows sorted by the "foo" column :table.select({start: -10, sort: "foo"}).then(function(data){  // success});
```
<a name="EThing.Table+computeStatistics"></a>

#### table.computeStatistics(key, [query], [callback]) ⇒ <code>Object</code>
<p>Performs statistics on a specific column.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: <code>Object</code> - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | <p>The column name on which the statistics should be performed.</p> |
| [query] | <code>string</code> | <p>A query string to filter the data.</p> |
| [callback] | <code>function</code> | <p>It is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Table+removeRow"></a>

#### table.removeRow(id, [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Removes one or multiple rows.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>Array.&lt;string&gt;</code> | <p>The id of the row(s) to be removed</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// removes the last 10 rows :table.select(-10).then(function(data){  this.removeRow(data.map(function(row){    return row.id;  }));});
```
<a name="EThing.Table+replaceRow"></a>

#### table.replaceRow(data, [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Set new data to a row.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> | <p>the data to be updated, it must contain the row id.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
table.replaceRow({	 'id': 'g45Tdk4',	 'value': 45}).then(function(data){  // updated !});
```
<a name="EThing.Table+findOneAndReplace"></a>

#### table.findOneAndReplace(query, data, [upsert], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Finds a single row matching the query and replaces it.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
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
table.findOneAndReplace("name=='foo'", {	 'name': 'foo',	 'value': 'bar'}).then(function(table){  // updated or inserted if not found !});
```
<a name="EThing.Table+insert"></a>

#### table.insert(data, [invalid_field], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Insert new data into the table. The data argument must be a key/value object.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [invalid_field] | <code>string</code> | <p>The behaviour to adopt when an invalid field name appears. The value must be one of the following : &quot;rename&quot;,&quot;stop&quot;,&quot;skip&quot;,&quot;none&quot;.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
table.insert({  'field1': "foobar",  'field2': 3.14,  'field3': true}).then(function(){  // success});
```
<a name="EThing.Table+import"></a>

#### table.import(data, [invalid_field], [skip_error], [callback]) ⇒ [<code>Table</code>](#EThing.Table)
<p>Replace the content of this table by a new set of data.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Table</code>](#EThing.Table) - <p>The instance on which this method was called.
// copy table content
var tableSrc, tableDst;
tableSrc.select().then(function(data){
  tableDst.import(data);
});</p>  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Array.&lt;object&gt;</code> |  |
| [invalid_field] | <code>string</code> | <p>The behaviour to adopt when an invalid field name appears. The value must be one of the following : &quot;rename&quot;,&quot;stop&quot;,&quot;skip&quot;,&quot;none&quot;.</p> |
| [skip_error] | <code>bool</code> | <p>Whether to skip data on error or not</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

<a name="EThing.Table+getContentUrl"></a>

#### table.getContentUrl([auth]) ⇒ <code>string</code>
<p>Returns the link to access the content.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Table}</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [auth] | <code>boolean</code> | <code>false</code> | <p>wether or not attach any authentication element. Necessary if you are not using [request](#EThing.request).</p> |

**Example**  
```js
// using EThing.request() :EThing.request(table.getContentUrl()).then(function(rows){  // success, rows is an array of object  console.log('number of rows : '+rows.length);});// or using jQuery :$.getJSON(table.getContentUrl(true)).then(function(rows){  // success});
```
<a name="EThing.Resource+json"></a>

#### table.json() ⇒ <code>object</code>
<p>Returns the representation of this instance</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+isTypeof"></a>

#### table.isTypeof(type) ⇒ <code>boolean</code>
<p>Return true if the resource is of the given type.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type |
| --- | --- |
| type | <code>string</code> | 

<a name="EThing.Resource+name"></a>

#### table.name() ⇒ <code>string</code>
<p>Returns the name of this resource. A name is constructed as <strong>PathName/FileName</strong>.
To get only the FileName, see [basename](#EThing.Resource+basename).
To get only the PathName, see [dirname](#EThing.Resource+dirname).</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+dirname"></a>

#### table.dirname() ⇒ <code>string</code>
<p>Returns the path of this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+basename"></a>

#### table.basename() ⇒ <code>string</code>
<p>Returns the basename of this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+extension"></a>

#### table.extension() ⇒ <code>string</code>
<p>Returns the extension of this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+id"></a>

#### table.id() ⇒ <code>string</code>
<p>Returns the id of this resource. This id is unique and immutable.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdBy"></a>

#### table.createdBy() ⇒ <code>string</code> \| <code>null</code>
<p>Returns the id of the Resource which creates it if any, or returns null.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+type"></a>

#### table.type() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+types"></a>

#### table.types() ⇒ <code>Array.&lt;string&gt;</code>
<p>Returns the types this resource depends on</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+baseType"></a>

#### table.baseType() ⇒ <code>string</code>
<p>Returns the type of this resource :</p>
<ul>
<li>&quot;File&quot;</li>
<li>&quot;Table&quot;</li>
<li>&quot;App&quot;</li>
<li>&quot;Device&quot;</li>
</ul>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+createdDate"></a>

#### table.createdDate() ⇒ <code>Date</code>
<p>Create time for this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+modifiedDate"></a>

#### table.modifiedDate() ⇒ <code>Date</code>
<p>Last time this resource was modified</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+public"></a>

#### table.public() ⇒ <code>boolean</code> \| <code>string</code>
<p>Tells if this resource is publicly available.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+data"></a>

#### table.data([name], [defaultValue]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the data attached to this resource.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional data attribute name.</p> |
| [defaultValue] |  | <p>a default value if the attribute was not found.</p> |

<a name="EThing.Resource+attr"></a>

#### table.attr([name]) ⇒ <code>object</code> \| <code>null</code>
<p>Returns the attributes to this resource.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | <p>an optional attribute name.</p> |

<a name="EThing.Resource+hasAttr"></a>

#### table.hasAttr(name) ⇒ <code>boolean</code>
<p>Returns true if the attribute exists for this resource.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>attribute name.</p> |

<a name="EThing.Resource+description"></a>

#### table.description() ⇒ <code>string</code>
<p>Returns the description of this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**this**: <code>{EThing.Resource}</code>  
<a name="EThing.Resource+remove"></a>

#### table.remove([callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Remove this resource.</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**Emits**: <code>EThing#ething.resource.event:removed</code>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.remove().then(function(){  // the resource was successfully removed});
```
<a name="EThing.Resource+set"></a>

#### table.set(properties, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Update this resource attributes</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| properties |  |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.set({  name: "newName.txt"}).then(function(){  console.log("the resource was successfully renamed to :"+this.name());});
```
<a name="EThing.Resource+setData"></a>

#### table.setData(data, [callback]) ⇒ [<code>Resource</code>](#EThing.Resource)
<p>Attaches persistant data to this resource</p>

**Kind**: instance method of [<code>Table</code>](#EThing.Table)  
**Returns**: [<code>Resource</code>](#EThing.Resource) - <p>The instance on which this method was called.</p>  
**this**: <code>{EThing.Resource}</code>  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
resource.setData({  "key": "value"}).then(function(){  // success});// you can also write :resource.setData("key", "value").then(function(){  // success});
```
<a name="EThing.Table.create"></a>

#### Table.create(attributes, [callback]) ⇒ <code>Promise</code>
<p>Creates a new Table from the following attributes :</p>
<ul>
<li>name {string} <strong>required</strong> the name of the table</li>
<li>description {string} a string describing this table</li>
<li>data {object} key/value pairs to attach to this table</li>
<li>maxLength {number} the maximum number of rows allowed in this table. 0 means unlimited. Default to 5000.</li>
</ul>

**Kind**: static method of [<code>Table</code>](#EThing.Table)  
**Emits**: <code>EThing#ething.table.event:created</code>  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>object</code> |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
EThing.Table.create({  name: "foobar"}).then(function(resource){    console.log('table created : ' + resource.name());})
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
<p>This library helps to search and find resources.</p>

**Kind**: static namespace of [<code>EThing</code>](#EThing)  
**Example**  
```js
// list all the txt files in the dir1 folderEThing.arbo.load(function(){  // the next line may list Table that ends with ".txt"  console.log(EThing.arbo.glob('dir1/*.txt');})
```

* [.arbo](#EThing.arbo) : <code>object</code>
    * [.load([callback], [force])](#EThing.arbo.load) ⇒ <code>Promise</code>
    * [.refresh()](#EThing.arbo.refresh) ⇒ <code>Promise</code>
    * [.get(id)](#EThing.arbo.get) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
    * [.glob(filter)](#EThing.arbo.glob) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.list()](#EThing.arbo.list) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.find(filter)](#EThing.arbo.find) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
    * [.isLoaded()](#EThing.arbo.isLoaded) ⇒ <code>boolean</code>

<a name="EThing.arbo.load"></a>

#### arbo.load([callback], [force]) ⇒ <code>Promise</code>
<p>Load all available resources.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  

| Param | Type | Description |
| --- | --- | --- |
| [callback] | <code>function</code> | <p>function executed once the resources are loaded</p> |
| [force] | <code>boolean</code> | <p>force to reload the entire resources</p> |

<a name="EThing.arbo.refresh"></a>

#### arbo.refresh() ⇒ <code>Promise</code>
<p>Refresh the resources list from the server.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
**Returns**: <code>Promise</code> - <p>return a Promise object</p>  
<a name="EThing.arbo.get"></a>

#### arbo.get(id) ⇒ [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code>
<p>Find a resource by its unique id. For all the resources except the Folder, the id is a 7 character alphanumeric string.
Since there is no duplicate name for folders, their id is equal to their name.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
**Returns**: [<code>Resource</code>](#EThing.Resource) \| <code>undefined</code> - <p>return undefined if not found</p>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | <p>7 character alphanumeric string for all resources except for Folders which is their name.</p> |

<a name="EThing.arbo.glob"></a>

#### arbo.glob(filter) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>Returns a list of resources that match a *-wildcard style glob string.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  

| Param | Type | Description |
| --- | --- | --- |
| filter | <code>string</code> | <p>only the resources that match the glob filter are returned.</p> |

**Example**  
```js
// return all jpg and png files in 'dir' directory :EThing.arbo.glob('dir/{*.jpg,*.png}')// return all resource under 'dir' directory or subdirectories :EThing.arbo.glob('dir/**')
```
<a name="EThing.arbo.list"></a>

#### arbo.list() ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>return all the resources. Same as [EThing.arbo.find()](#EThing.arbo.find).</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
<a name="EThing.arbo.find"></a>

#### arbo.find(filter) ⇒ [<code>Array.&lt;Resource&gt;</code>](#EThing.Resource)
<p>Returns a list of resources that pass the test implemented by the provided function.</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  

| Param | Type | Description |
| --- | --- | --- |
| filter | <code>function</code> | <p>Function is a predicate, to test each resource of the array. Return true to keep the resource, false otherwise.</p> |

<a name="EThing.arbo.isLoaded"></a>

#### arbo.isLoaded() ⇒ <code>boolean</code>
<p>Check if the resources are loaded (ie. if the [load](#EThing.arbo.load) function has been called and has returned).</p>

**Kind**: static method of [<code>arbo</code>](#EThing.arbo)  
<a name="EThing.auth"></a>

### EThing.auth : <code>object</code>
**Kind**: static namespace of [<code>EThing</code>](#EThing)  

* [.auth](#EThing.auth) : <code>object</code>
    * [.isAuthenticated()](#EThing.auth.isAuthenticated) ⇒ <code>boolean</code>
    * [.setApiKey(apiKey)](#EThing.auth.setApiKey)
    * [.setBasicAuth(login, password)](#EThing.auth.setBasicAuth)

<a name="EThing.auth.isAuthenticated"></a>

#### auth.isAuthenticated() ⇒ <code>boolean</code>
<p>Returns true if an authentication scheme has been set.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  
<a name="EThing.auth.setApiKey"></a>

#### auth.setApiKey(apiKey)
<p>Set the apikey authentication scheme for the next requests.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  

| Param | Type |
| --- | --- |
| apiKey | <code>string</code> | 

<a name="EThing.auth.setBasicAuth"></a>

#### auth.setBasicAuth(login, password)
<p>Set the basic authentication scheme for the next requests.</p>

**Kind**: static method of [<code>auth</code>](#EThing.auth)  

| Param | Type |
| --- | --- |
| login | <code>string</code> | 
| password | <code>string</code> | 

<a name="EThing.request"></a>

### EThing.request(options, [callback]) ⇒ <code>Promise</code>
<p>Make a HTTP request. The options object contains the following properties :</p>
<ul>
<li>url {string} <strong>required</strong> The url of the request. The API url will be prepended to relative URLs.</li>
<li>method {string} The HTTP request method to use. Default is GET.</li>
<li>data {string|object|Blob|ArrayBuffer|Buffer} The query string for GET request. The HTTP request body for POST|PATCH|PUT requests. If an object is given, it will be serialized into a query string.</li>
<li>contentType {string} When sending data to the server, use this content type. Default is 'application/octet-stream' if the data is an instance of ArrayBuffer or Buffer, if data is an instance of Blob, the default will be the type of the data itself, else 'application/x-www-form-urlencoded; charset=UTF-8'.</li>
<li>dataType {string} The type of data that you're expecting back from the server: 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'</li>
<li>headers {object} Additional HTTP request headers.</li>
<li>context {object} The value of this provided for the call of the callback</li>
<li>converter {function(data,XHR)} A function that returns the transformed value of the response</li>
</ul>
<p>You may also give a callback as a second parameter. This callback is executed when the request is complete whether in failure or success.
On success, it receives the returned request data, as well as the XMLHttpRequest object.
On failure, the first parameter will be a Error object describing the error.
To check if a request is in failure :</p>
<pre><code>EThing.request(options,function(data,error){
    if(error){
      // an error occurs, print the associated message
      console.log(error);
    }
  })`
</code></pre>


<p>This function returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) object.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>string</code> \| <code>object</code> | <p>a set of key/value pairs that configure the request. If an URL is given, a GET request with the default options is made.</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// GET requestEThing.request('/resources') // is equivalent to EThing.list()// pass an object to make more complex request// store some data in a fileEThing.request({  url: '/files/'+fileId,  method: 'PUT',  data: 'some content here ...',  contentType: 'text/plain'}).then(function(file){  console.log("the content was stored in the file "+file.name());}).catch(function(error){  console.log("an error occurs : "+error);});
```
<a name="EThing.list"></a>

### EThing.list([query], [callback]) ⇒ <code>Promise</code>
<p>This function get the available resources. A filter may be given to retrieve resources with specific attributes (see the HTTP API for more details).</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| [query] | <code>string</code> | <p>Query string for searching resources</p> |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get all the resourcesEThing.list().then(function(resources){    console.log(resources);})// get only File & Table resourcesEThing.list('type == "File" or type == "Table"').then(function(resources){    console.log(resources);})
```
<a name="EThing.get"></a>

### EThing.get(resourceIdentifier, [callback]) ⇒ <code>Promise</code>
<p>Gets a resource by its id.</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| resourceIdentifier | <code>string</code> \| [<code>Resource</code>](#EThing.Resource) |  |
| [callback] | <code>function</code> | <p>it is executed once the request is complete whether in failure or success</p> |

**Example**  
```js
// get a resource by its idEThing.get("54516eb").then(function(resource){    console.log('the name is ' + resource.name());})
```
<a name="EThing.dispatch"></a>

### EThing.dispatch(event)
<p>dispatch an event emitted by the server (through SSE or socketio)</p>

**Kind**: static method of [<code>EThing</code>](#EThing)  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>object</code> | <p>the event object provided by the server</p> |

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
