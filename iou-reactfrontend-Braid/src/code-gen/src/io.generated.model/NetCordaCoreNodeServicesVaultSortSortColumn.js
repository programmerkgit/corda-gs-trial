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

import ApiClient from '../ApiClient';

/**
 * The NetCordaCoreNodeServicesVaultSortSortColumn model module.
 * @module io.generated.model/NetCordaCoreNodeServicesVaultSortSortColumn
 * @version 1.0.0
 */
class NetCordaCoreNodeServicesVaultSortSortColumn {
    /**
     * Constructs a new <code>NetCordaCoreNodeServicesVaultSortSortColumn</code>.
     * @alias module:io.generated.model/NetCordaCoreNodeServicesVaultSortSortColumn
     * @param direction {module:io.generated.model/NetCordaCoreNodeServicesVaultSortSortColumn.DirectionEnum} 
     */
    constructor(direction) { 
        
        NetCordaCoreNodeServicesVaultSortSortColumn.initialize(this, direction);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, direction) { 
        obj['direction'] = direction;
    }

    /**
     * Constructs a <code>NetCordaCoreNodeServicesVaultSortSortColumn</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:io.generated.model/NetCordaCoreNodeServicesVaultSortSortColumn} obj Optional instance to populate.
     * @return {module:io.generated.model/NetCordaCoreNodeServicesVaultSortSortColumn} The populated <code>NetCordaCoreNodeServicesVaultSortSortColumn</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NetCordaCoreNodeServicesVaultSortSortColumn();

            if (data.hasOwnProperty('sortAttribute')) {
                obj['sortAttribute'] = ApiClient.convertToType(data['sortAttribute'], Object);
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Object} sortAttribute
 */
NetCordaCoreNodeServicesVaultSortSortColumn.prototype['sortAttribute'] = undefined;

/**
 * @member {module:io.generated.model/NetCordaCoreNodeServicesVaultSortSortColumn.DirectionEnum} direction
 */
NetCordaCoreNodeServicesVaultSortSortColumn.prototype['direction'] = undefined;





/**
 * Allowed values for the <code>direction</code> property.
 * @enum {String}
 * @readonly
 */
NetCordaCoreNodeServicesVaultSortSortColumn['DirectionEnum'] = {

    /**
     * value: "ASC"
     * @const
     */
    "ASC": "ASC",

    /**
     * value: "DESC"
     * @const
     */
    "DESC": "DESC"
};



export default NetCordaCoreNodeServicesVaultSortSortColumn;

