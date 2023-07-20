import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';
import { IGitHubRepository } from '../types/exported';
export interface ActionSecretProps {
    /**
     * The AWS secret in which the OAuth GitHub (personal) access token is stored
     */
    readonly githubTokenSecret: ISecret;
    /**
     * The GitHub repository information (owner and name)
     */
    readonly repository: IGitHubRepository;
    /**
     * The GitHub secret name to be stored
     */
    readonly repositorySecretName: string;
    /**
     * This AWS secret value will be stored in GitHub as a secret (under the name of repositorySecretName)
     */
    readonly sourceSecret: ISecret;
    /**
     * The key of a JSON field to retrieve in sourceSecret.
     * This can only be used if the secret stores a JSON object.
     *
     * @default - returns all the content stored in the Secrets Manager secret.
     */
    readonly sourceSecretJsonField?: string;
}
export declare class ActionSecret extends Construct {
    constructor(scope: Construct, id: string, props: ActionSecretProps);
}
