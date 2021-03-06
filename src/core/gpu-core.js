'use strict';

const UtilsCore = require("./utils-core");

/**
 * This is a minimalistic version of GPU.js used 
 * to run precompiled GPU.JS code.
 *
 * This intentionally excludes the JS AST compiller : which is 400kb alone/
 *
 * @class GPUCore
 */
module.exports = class GPUCore {

	/**
	 * @name validateKernelObj
	 * @function
	 * @static
	 * @memberOf GPUCore
	 *
	 * @description Validates the KernelObj to comply with the defined format
	 * Note that this does only a limited sanity check, and does not  
	 * gurantee a full working validation.
	 *
	 * For the kernel object format see : <kernelObj-format>
	 *
	 * @param {Object|String} kernelObj - KernelObj used to validate
	 *
	 * @returns {Object} The validated kernel object, converted from JSON if needed
	 *
	 */
	static validateKernelObj(kernelObj) {

		// NULL validation
		if (kernelObj == null) {
			throw "KernelObj being validated is NULL";
		}

		// String JSON conversion
		if (typeof kernelObj === "string") {
			try {
				kernelObj = JSON.parse(kernelObj);
			} catch (e) {
				console.error(e);
				throw "Failed to convert KernelObj from JSON string";
			}

			// NULL validation
			if (kernelObj == null) {
				throw "Invalid (NULL) KernelObj JSON string representation";
			}
		}

		// Check for kernel obj flag
		if (kernelObj.isKernelObj != true) {
			throw "Failed missing isKernelObj flag check";
		}

		// Return the validated kernelObj
		return kernelObj;
	}

	/**
	 * @name loadKernelObj
	 * @function
	 * @static
	 * @memberOf GPUCore
	 *
	 * @description Loads the precompilled kernel object. For GPUCore this is the ONLY way to create the kernel.
	 * To generate the kernelObj use <Kernel.exportKernelObj>
	 *
	 * Note that this function calls <validateKernelObj> internally, and throws an exception if it fails.
	 *
	 * @see GPUCore.validateKernelObj
	 * @see	Kernel.exportKernelObj
	 *
	 * @param {Object} kernelObj - The precompilled kernel object
	 * @param {Object} inOpt - [Optional] the option overrides to use
	 *
	 * @returns {Function} The kernel function
	 * 
	 */
	static loadKernelObj(kernelObj, inOpt) {

		// Validates the kernelObj, throws an exception if it fails
		kernelObj = validateKernelObj(kernelObj);


	}
}