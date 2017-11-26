// LICENSE : MIT
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var textlint_core_task_1 = require("./textlint-core-task");
var TaskRunner = /** @class */ (function () {
    function TaskRunner() {
    }
    /**
     * Task and return promise
     * @param {TextLintCoreTask} task
     * @returns {Promise}
     */
    TaskRunner.process = function (task) {
        return new Promise(function (resolve, reject) {
            var messages = [];
            task.on(textlint_core_task_1.default.events.message, function (message) {
                messages.push(message);
            });
            task.on(textlint_core_task_1.default.events.error, function (error) {
                reject(error);
            });
            task.on(textlint_core_task_1.default.events.complete, function () {
                task.removeAllListeners();
                resolve(messages);
            });
            task.start();
        });
    };
    return TaskRunner;
}());
exports.default = TaskRunner;