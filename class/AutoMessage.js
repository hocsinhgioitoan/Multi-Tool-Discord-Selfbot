const Discord = require('discord.js-selfbot-v13');
const axios = require('axios').default;

class AutoMessage {
    /**
     *
     * @param {import('..').MultiToolClient} client
     * @param {import('..').AutoMessageOptions} AutoMessageOptions
     */
    constructor(client, AutoMessageOptions) {
        this.options = AutoMessageOptions;
        this.client = client;
    }
    start() {
        if (!this.options.channelId) throw Error('Missing id channel');
        if (typeof this.options.channelId !== 'string')
            throw Error('Id channel must be string');
        const channel = this.client.channels.cache.get(this.options.channelId);
        if (!channel) throw Error('Invalid channel please check again');
        async function send() {
            axios
                .get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
                .then((data) => {
                    console.log(data.data.data[0].quoteText);
                    channel.send({
                        content: `${data.data.data[0].quoteText}`,
                    });
                });
        }
        send();
        const time =
            this.options.timeInterval < 10000
                ? 10000
                : this.options.timeInterval;
        setInterval(send, time);
    }
}
module.exports = AutoMessage;
