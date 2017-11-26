/**
 * detect that ruleCreator has linter function
 * @param {*} ruleCreator
 * @returns {boolean}
 */
export declare function hasLinter(ruleCreator: any): boolean;
/**
 * get linter function from ruleCreator
 * if not found, throw error
 * @param {Function|Object|any} ruleCreator
 * @returns {Function} linter function
 * @throws
 */
export declare function getLinter(ruleCreator: Function | object | any): Function;
/**
 * detect that ruleCreator has fixer function
 * @param {*} ruleCreator
 * @returns {boolean}
 */
export declare function hasFixer(ruleCreator: any): boolean;
/**
 * get fixer function from ruleCreator
 * if not found, throw error
 * @param {Function|Object|any} ruleCreator
 * @returns {Function} fixer function
 * @throws
 */
export declare function getFixer(ruleCreator: Function | object | any): Function;
/**
 * RuleModule should has either linter or fixer.
 * @param {*} ruleCreator
 * @returns {boolean}
 **/
export declare function isRuleModule(ruleCreator: any): boolean;
/**
 * Validate rule module.
 * if invalid throw error
 * @param {*} ruleModule
 * @param {string} key
 * @throws
 */
export declare function assertRuleShape(ruleModule: any, key?: string): void;
/**
 * get linter function from ruleCreator
 * if not found, throw error
 * @param {*} ruleCreator
 * @returns {Function} linter function
 * @throws
 */
export declare function getFilter(ruleCreator: any): Function;