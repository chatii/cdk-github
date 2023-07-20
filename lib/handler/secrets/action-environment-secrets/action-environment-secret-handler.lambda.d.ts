import { CdkCustomResourceResponse } from 'aws-lambda';
import type { OnEventRequest, ActionEnvironmentSecretEventProps } from '../../../types';
export declare const handler: (event: OnEventRequest<ActionEnvironmentSecretEventProps>) => Promise<CdkCustomResourceResponse>;
