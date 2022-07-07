const Discord = require('discord.js-selfbot-v13');
class Fisher {
    /**
     *
     * @param {import('..').MultiToolClient} client
     * @param {import("..").FisherOptions} options
     */
    constructor(client, options) {
        this.options = options;
        this.client = client;
        this.collection = new Discord.Collection();
        this.max_page = 0;
    }
    async start() {
        const botId = '574652751745777665';
        if (!this.options.channelId) throw Error('Missing id channel');
        if (typeof this.options.channelId !== 'string')
            throw Error('Id channel must be string');
        const channel = this.client.channels.cache.get(this.options.channelId);
        if (!channel) throw Error('Invalid channel please check again');
        channel.sendSlash(botId, 'fish');
        setInterval(() => {
            channel.sendSlash(botId, 'fish');
        }, randomInteger(5000, 7000));
        if (this.options?.autoSell) {
            channel.sendSlash(botId, 'sell', 'all');
            setInterval(() => {
                channel.sendSlash(botId, 'fish');
            }, randomInteger(60 * 1000 * 1, 60 * 1000 * 1 + 1));
        }
    }
}
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = Fisher;
