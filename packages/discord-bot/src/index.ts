import { Client, Intents } from 'discord.js';

import { CONFIG } from './config.js';

export const createDiscordClient = async (): Promise<Client> => {
  const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS],
  });

  await client.login(CONFIG.discordBotToken);
  return client;
};

export * from './auth.js';
export * from './types.js';
