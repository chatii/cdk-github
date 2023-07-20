import { CdkCustomResourceResponse } from 'aws-lambda';
import type { OnEventRequest, GitHubResourceEventProps } from '../../types';
export declare const handler: (event: OnEventRequest<GitHubResourceEventProps>) => Promise<CdkCustomResourceResponse>;
