/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenapiJsClient);
  }
}(this, function(expect, OpenapiJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenapiJsClient.NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression', function() {
    it('should create an instance of NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression', function() {
      // uncomment below and update the code to test NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression();
      //expect(instance).to.be.a(OpenapiJsClient.NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression);
    });

    it('should have the property column (base name: "column")', function() {
      // uncomment below and update the code to test the property column
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression();
      //expect(instance).to.be();
    });

    it('should have the property predicate (base name: "predicate")', function() {
      // uncomment below and update the code to test the property predicate
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression();
      //expect(instance).to.be();
    });

    it('should have the property groupByColumns (base name: "groupByColumns")', function() {
      // uncomment below and update the code to test the property groupByColumns
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression();
      //expect(instance).to.be();
    });

    it('should have the property orderBy (base name: "orderBy")', function() {
      // uncomment below and update the code to test the property orderBy
      //var instane = new OpenapiJsClient.NetCordaCoreNodeServicesVaultCriteriaExpressionAggregateFunctionExpression();
      //expect(instance).to.be();
    });

  });

}));