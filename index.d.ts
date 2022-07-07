import { Client } from 'discord.js-selfbot-v13';
export declare class Fisher {
    protected options: FisherOptions;
    protected client: Client;
    constructor(client: Client, options: FisherOptions);
    start(): void;
}

export interface FisherOptions {
    channelId: string;
    autoSell?: boolean;
}
export declare class MultiToolClient extends Client {
    protected option: MultiToolClientOptions;
    constructor(option: MultiToolClientOptions);
    loginToUser(): Promise<void>;
}
export interface MultiToolClientOptions {
    token: string;
    events: {
        ready: {
            logWhenReady?: boolean;
            messageCustom?: string;
        };
    };
}

export declare class AutoMessage {
    protected options: AutoMessageOptions;
    protected client: Client;
    constructor(client: Client, options: AutoMessageOptions);
    start(): Promise<void>;
}
export interface AutoMessageOptions {
    timeInterval?: number;
    channelId: string;
}
