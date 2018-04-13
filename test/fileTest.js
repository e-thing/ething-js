
var chai = require('chai');
var assert = chai.assert;

var EThing = require('..');



describe("EThing.File test", function() {
    
    it("exists", function() {
        assert.isFunction(EThing.File);
    });
    
    it("create", function(done) {
        
        EThing.File.create({
            name: "foobar.txt"
        }).done(function(resource){
            assert.instanceOf(resource, EThing.File);
            
            done();
            
        }).fail(function(err){
            done(err);
        });
        
    });
    
    it("create with content", function(done) {
        
        content = 'hello world';
        
        EThing.File.create({
            name: "foobar.txt",
            content: content
        }).done(function(resource){
            assert.instanceOf(resource, EThing.File);
            
            resource.read().done(function(text){
                assert.equal(content, text)
                done();
            }).fail(function(err){
                done(err)
            })
            
        }).fail(function(err){
            done(err);
        });
        
    });
    
    it("write content", function(done) {
        
        content = 'hello world';
        
        EThing.File.create({
            name: "foobar.txt"
        }).done(function(resource){
            assert.instanceOf(resource, EThing.File);
            
            resource.write(content).done(function(resource){
                
                assert.instanceOf(resource, EThing.File);
                
                // read it back
                resource.read().done(function(text){
                    assert.equal(content, text)
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
