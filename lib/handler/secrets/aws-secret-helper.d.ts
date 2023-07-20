import { SecretsManager } from '@aws-sdk/client-secrets-manager';
export declare const getSecretString: (secretId: string, smClient: SecretsManager, jsonField?: string | undefined) => Promise<string>;
