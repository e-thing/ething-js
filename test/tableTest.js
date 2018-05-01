
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var EThing = require('..');



describe("EThing.Table test", function() {
    
    it("exists", function() {
        assert.isFunction(EThing.Table);
    });
    
    it("create", function(done) {
        
        EThing.Table.create({
            name: "foobar"
        }).done(function(resource){
            assert.instanceOf(resource, EThing.Table);
            
            assert.isNumber(resource.length());
            
            expect(resource.maxLength()).to.satisfy(function(val){
                return (typeof val === 'number') || val === null;
            });
            
            expect(resource.expireAfter()).to.satisfy(function(val){
                return (typeof val === 'number') || val === null;
            });
            
            assert.isArray(resource.keys());
            
            assert.instanceOf(resource.contentModifiedDate(), Date);
            
            assert.isString(resource.getContentUrl());
            
            done();
            
        }).fail(function(err){
            done(err);
        });
        
    });
    
    it("create with content", function(done) {
        
        var content = [
            {
                "temperature": 12.5,
                "pressure": 101325,
                "text": "hello"
            }
       ];
        
        EThing.Table.create({
            name: "foobar.txt",
            content: content
        }).done(function(resource){
            assert.instanceOf(resource, EThing.Table);
            
            assert.equal(resource.length(), 1);
            
            resource.select().done(function(data){
                
                assert.equal(data.length, 1);
                
                assert.isObject(data[0]);
                
                assert.hasAllKeys(data[0], ['id','date','temperature','pressure','text']);
                
                assert.equal(data[0]['temperature'], 12.5);
                assert.equal(data[0]['pressure'], 101325);
                assert.equal(data[0]['text'], "hello");
                
                done();
            }).fail(function(err){
                done(err)
            })
            
        }).fail(function(err){
            done(err);
        });
        
    });
    
    it("import content", function(done) {
        
        var content = [
            {
                "temperature": 12.5,
                "pressure": 101325,
                "text": "hello"
            }
       ];
        
        EThing.Table.create({
            name: "foobar.txt",
        }).done(function(resource){
            assert.instanceOf(resource, EThing.Table);
            
            assert.equal(resource.length(), 0);
            
            resource.import(content).done(function(resource){
                
                resource.select().done(function(data){
                    assert.equal(data.length, 1);
                    
                    assert.isObject(data[0]);
                    
                    assert.hasAllKeys(data[0], ['id','date','temperature','pressure','text']);
                    
                    assert.equal(data[0]['temperature'], 12.5);
                    assert.equal(data[0]['pressure'], 101325);
                    assert.equal(data[0]['text'], "hello");
                    
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
    
    it("insert", function(done) {
        
        var content = {
            "temperature": 12.5,
            "pressure": 101325,
            "text": "hello"
        };
        
        EThing.Table.create({
            name: "foobar.txt",
        }).done(function(resource){
            assert.instanceOf(resource, EThing.Table);
            
            assert.equal(resource.length(), 0);
            
            resource.insert(content).done(function(resource){
                
                resource.select().done(function(data){
                    assert.equal(data.length, 1);
                    
                    assert.isObject(data[0]);
                    
                    assert.hasAllKeys(data[0], ['id','date','temperature','pressure','text']);
                    
                    assert.equal(data[0]['temperature'], 12.5);
                    assert.equal(data[0]['pressure'], 101325);
                    assert.equal(data[0]['text'], "hello");
                    
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
    
    
    it("replace row", function(done) {
        
        var content = [
            {
                "temperature": 12.5,
                "pressure": 101325,
                "text": "hello"
            }
       ];
        
        EThing.Table.create({
            name: "foobar.txt",
            content: content
        }).done(function(resource){
            assert.instanceOf(resource, EThing.Table);
            
            assert.equal(resource.length(), 1);
            
            resource.select().done(function(data){
                
                assert.equal(data.length, 1);
                
                var row_id = data[0]['id'];
                
                resource.replaceRow({
                    'id': row_id,
                    'pressure': 45
                }).done(function(row){
                    
                    assert.hasAllKeys(row, ['id','date','pressure']);
                    
                    assert.equal(row['pressure'], 45);
                    
                    done();
                }).fail(function(err){
                    done(err)
                });
                
            }).fail(function(err){
                done(err)
            })
            
        }).fail(function(err){
            done(err);
        });
        
    });
    
    it("remove row", function(done) {
        
        var content = [
            {
                "temperature": 12.5,
                "pressure": 101325,
                "text": "hello"
            }
       ];
        
        EThing.Table.create({
            name: "foobar.txt",
            content: content
        }).done(function(resource){
            assert.instanceOf(resource, EThing.Table);
            
            assert.equal(resource.length(), 1);
            
            resource.select().done(function(data){
                
                assert.equal(data.length, 1);
                
                var row_id = data[0]['id'];
                
                resource.removeRow(row_id).done(function(resource){
                    
                    assert.equal(resource.length(), 0);
                    
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