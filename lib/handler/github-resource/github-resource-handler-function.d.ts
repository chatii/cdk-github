import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
/**
 * Props for GithubResourceHandlerFunction
 */
export interface GithubResourceHandlerFunctionProps extends lambda.FunctionOptions {
}
/**
 * An AWS Lambda function which executes src/handler/github-resource/github-resource-handler.
 */
export declare class GithubResourceHandlerFunction extends lambda.Function {
    constructor(scope: Construct, id: string, props?: GithubResourceHandlerFunctionProps);
}
