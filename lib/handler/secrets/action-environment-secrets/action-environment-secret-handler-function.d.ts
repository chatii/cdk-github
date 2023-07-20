import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
/**
 * Props for ActionEnvironmentSecretHandlerFunction
 */
export interface ActionEnvironmentSecretHandlerFunctionProps extends lambda.FunctionOptions {
}
/**
 * An AWS Lambda function which executes src/handler/secrets/action-environment-secrets/action-environment-secret-handler.
 */
export declare class ActionEnvironmentSecretHandlerFunction extends lambda.Function {
    constructor(scope: Construct, id: string, props?: ActionEnvironmentSecretHandlerFunctionProps);
}
