import { CdkCustomResourceResponse } from 'aws-lambda';
import type { OnEventRequest, ActionSecretEventProps } from '../../../types';
export declare const handler: (event: OnEventRequest<ActionSecretEventProps>) => Promise<CdkCustomResourceResponse>;
