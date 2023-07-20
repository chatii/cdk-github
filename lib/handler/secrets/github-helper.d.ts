import { Octokit } from '@octokit/core';
export declare const getOwner: (octokit: Octokit, owner: string | undefined) => Promise<string>;
