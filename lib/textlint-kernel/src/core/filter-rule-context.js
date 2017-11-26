// LICENSE : MIT
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rule_error_1 = require("./rule-error");
var assert = require("assert");
/**
 * Rule context object is passed to each rule as `context`
 * @param {string} ruleId
 * @param {SourceCode} sourceCode
 * @param {function(ShouldIgnoreArgs)} ignoreReport
 * @constructor
 */
var FilterRuleContext = /** @class */ (function () {
    function FilterRuleContext(args) {
        var _this = this;
        this.shouldIgnore = function (range, optional) {
            if (optional === void 0) { optional = {}; }
            assert(Array.isArray(range) && typeof range[0] === "number" && typeof range[1] === "number", "shouldIgnore([number, number]); accept range.");
            _this._ignoreReport({ ruleId: _this._ruleId, range: range, optional: optional });
        };
        /**
         * get file path current processing.
         */
        this.getFilePath = function () {
            return _this._sourceCode.getFilePath();
        };
        /**
         * Gets the source code for the given node.
         * @param {TxtNode=} node The AST node to get the text for.
         * @param {int=} beforeCount The number of characters before the node to retrieve.
         * @param {int=} afterCount The number of characters after the node to retrieve.
         * @returns {string|null} The text representing the AST node.
         */
        this.getSource = function (node, beforeCount, afterCount) {
            return _this._sourceCode.getSource(node, beforeCount, afterCount);
        };
        /**
         * get config base directory path
         * config base directory path often is the place of .textlintrc
         *
         * e.g.) /path/to/dir/.textlintrc
         * `getConfigBaseDir()` return `"/path/to/dir/"`.
         *
         * When using textlint as module, it is specified by `configBaseDir`
         * If not found the value, return undefined.
         *
         * You can use it for resolving relative path from config dir.
         * @returns {string|undefined}
         */
        this.getConfigBaseDir = function () {
            return _this._configBaseDir;
        };
        this._ruleId = args.ruleId;
        this._sourceCode = args.sourceCode;
        this._ignoreReport = args.ignoreReport;
        this._configBaseDir = args.configBaseDir;
    }
    Object.defineProperty(FilterRuleContext.prototype, "id", {
        /**
         * Rule id
         * @returns {string}
         */
        get: function () {
            return this._ruleId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterRuleContext.prototype, "Syntax", {
        /**
         * Node's type values
         * @type {TextLintNodeType}
         */
        get: function () {
            return this._sourceCode.getSyntax();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilterRuleContext.prototype, "RuleError", {
        /**
         * CustomError object
         * @type {RuleError}
         */
        get: function () {
            return rule_error_1.default;
        },
        enumerable: true,
        configurable: true
    });
    return FilterRuleContext;
}());
exports.default = FilterRuleContext;