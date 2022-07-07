const Discord = require('discord.js-selfbot-v13');
class MultiToolClient extends Discord.Client {
    /**
     *
     * @param {import('..').MultiToolClientOptions} multiToolOptions
     */
    constructor(multiToolOptions) {
        super();
        this.MToptions = multiToolOptions;
    }
    async loginToUser() {
        if (!this.MToptions.token) {
            throw Error(`Missing Token`);
        }
        await this.login(this.MToptions.token).catch((e) => {
            throw Error(`Invalid Token`);
        });
        if (this.MToptions?.events?.ready?.logWhenReady) {
            this.once('ready', () => {
                const messageCustom =
                    this.MToptions?.events?.ready?.messageCustom ||
                    '<user> is ready to online!';
                console.log(
                    messageCustom.replace('<user>', this.user.username)
                );
            });
        }
    }
}
module.exports = MultiToolClient;
