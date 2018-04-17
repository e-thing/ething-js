
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var EThing = require('..');



describe("EThing.App test", function() {
    
    it("exists", function() {
        assert.isFunction(EThing.App);
    });
    
    it("create", function(done) {
        
        var content = "<html><body>hello world !</body></html>";
        
        EThing.App.create({
            name: "foobar.txt",
            content: content,
            scope: "resource:read settings:read"
        }).done(function(resource){
            assert.instanceOf(resource, EThing.App);
            
            assert.isNumber(resource.size());
            
            expect(resource.version()).to.satisfy(function(val){
                return (typeof val === 'string') || val === null;
            });
            
            assert.isString(resource.scope());
            
            assert.instanceOf(resource.contentModifiedDate(), Date);
            
            expect(resource.iconLink()).to.satisfy(function(val){
                return (typeof val === 'string') || val === null;
            });
            
            assert.isString(resource.getContentUrl());
            
            resource.read().done(function(script){
                
                assert.equal(content, script)
                
                done();
                
            }).fail(function(err){
                done(err);
            });
            
        }).fail(function(err){
            done(err);
        });
        
    });
    
    it("write content", function(done) {
        
        var content = "<html><body>hello world !</body></html>";
        var newContent = "<html><body>hello Foobar !</body></html>";
        
        EThing.App.create({
            name: "foobar.txt",
            content: content,
            scope: "resource:read settings:read"
        }).done(function(resource){
            assert.instanceOf(resource, EThing.App);
            
            resource.write(newContent).done(function(resource){
                
                assert.instanceOf(resource, EThing.App);
                
                // read it back
                resource.read().done(function(script){
                    assert.equal(newContent, script)
                    done();
                }).fail(function(err){
                    done(err)
                })
                
            }).fail(function(err){
                done(err)
            })
            
        }).fail(function(err){
            done(err);
        });
        
    });
    
    
    
})
