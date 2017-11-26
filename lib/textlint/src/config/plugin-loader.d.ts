import { TextLintModuleResolver } from "../engine/textlint-module-resolver";
/**
 * get plugin names from `configFileRaw` object
 * @param configFileRaw
 * @returns {Array}
 */
export declare function getPluginNames(configFileRaw: {
    plugins: any;
}): any[];
/**
 * get pluginConfig object from `configFileRaw` that is loaded .textlintrc
 * @param {Object} configFileRaw
 * @returns {Object}
 * @example
 * ```js
 * "plugins": {
 *   "pluginA": {},
 *   "pluginB": {}
 * }
 * ```
 *
 * to
 *
 * ```js
 * {
 *   "pluginA": {},
 *   "pluginB": {}
 * }
 * ```
 *
 *
 *
 * ```js
 * "plugins": ["pluginA", "pluginB"]
 * ```
 *
 * to
 *
 * ```
 * // `true` means turn on
 * {
 *   "pluginA": true,
 *   "pluginB": true
 * }
 * ```
 */
export declare function getPluginConfig(configFileRaw: {
    [index: string]: any;
}): {
    [index: string]: any;
};
export declare function loadAvailableExtensions(pluginNames: string[] | undefined, moduleResolver: TextLintModuleResolver): string[];