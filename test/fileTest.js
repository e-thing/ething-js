
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

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
            
            assert.isNumber(resource.size());
            
            expect(resource.expireAfter()).to.satisfy(function(val){
                return (typeof val === 'number') || val === null;
            });
            
            assert.isString(resource.mime());
            
            assert.instanceOf(resource.contentModifiedDate(), Date);
            
            expect(resource.thumbnailLink()).to.satisfy(function(val){
                return (typeof val === 'string') || val === null;
            });
            
            assert.isString(resource.getContentUrl());
            
            assert.isBoolean(resource.isText());
            
            assert.isBoolean(resource.isScript());
            
            done();
            
        }).fail(function(err){
            done(err);
        });
        
    });
    
    it("create with content", function(done) {
        
        var content = 'hello world';
        
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
    
    it("create with binary content", function(done) {
        
        var content = Buffer.from('hello world');
        
        EThing.File.create({
            name: "foobar.txt",
            content: content
        }).done(function(resource){
            assert.instanceOf(resource, EThing.File);
            
            resource.read(true).done(function(bin){
                assert(content.equals(bin))
                done();
            }).fail(function(err){
                done(err)
            })
            
        }).fail(function(err){
            done(err);
        });
        
    });
    
    it("write content", function(done) {
        
        var content = 'hello world';
        
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
    
    it("write binary content", function(done) {
        
        var content = Buffer.from('hello world');
        
        EThing.File.create({
            name: "foobar.txt"
        }).done(function(resource){
            assert.instanceOf(resource, EThing.File);
            
            resource.write(content).done(function(resource){
                
                assert.instanceOf(resource, EThing.File);
                
                // read it back
                resource.read(true).done(function(bin){
                    assert(content.equals(bin))
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
