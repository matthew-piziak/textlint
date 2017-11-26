import { IgnoreReportedMessage, LintReportedMessage } from "../task/textlint-core-task";
import { TextlintMessage } from "../textlint-kernel-interface";
export declare type PreMessageProcessor = (messages: Array<LintReportedMessage | IgnoreReportedMessage>) => Array<LintReportedMessage | IgnoreReportedMessage>;
export declare type MessageProcessor = (messages: TextlintMessage[]) => TextlintMessage[];
export default class MessageProcessManager {
    private _preProcessors;
    private _processors;
    /**
     * Preprossor
     */
    constructor(preProcessors: PreMessageProcessor[]);
    add(messageProcessor: MessageProcessor): void;
    remove(process: MessageProcessor): void;
    /**
     * process `messages` with registered processes
     * @param {TextlintMessage[]} messages
     * @returns {TextlintMessage[]}
     */
    process(messages: Array<LintReportedMessage | IgnoreReportedMessage>): TextlintMessage[];
}