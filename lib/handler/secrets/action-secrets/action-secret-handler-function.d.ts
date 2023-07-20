import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
/**
 * Props for ActionSecretHandlerFunction
 */
export interface ActionSecretHandlerFunctionProps extends lambda.FunctionOptions {
}
/**
 * An AWS Lambda function which executes src/handler/secrets/action-secrets/action-secret-handler.
 */
export declare class ActionSecretHandlerFunction extends lambda.Function {
    constructor(scope: Construct, id: string, props?: ActionSecretHandlerFunctionProps);
}
