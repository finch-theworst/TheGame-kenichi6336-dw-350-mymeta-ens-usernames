// DRY
export const WEB_PATH_JOIN_GUILD = 'join/guild';

export const DISCORD_BOT_CLIENT_ID = '804609082308034560';
export const JOIN_GUILD_DISCORD_BOT_PERMISSIONS = '66560'; // Read Messages/View Channels, View Message History
export const JOIN_GUILD_DISCORD_OAUTH_SCOPES = 'bot identify';
export const DISCORD_OAUTH_CALLBACK_PATH = `${WEB_PATH_JOIN_GUILD}/auth`;
export const METAFAM_DISCORD_GUILD_ID = '629411177947987986';
export const METAFAM_DISCORD_PROPS_CHANNEL_ID = '718557002221224037';
export const METAFAM_DISCORD_CHAMPS_RING_CHANNEL_ID = '760181556765130752';

export const SC_OUTPUT_BASE =
  'https://raw.githubusercontent.com/MetaFam/XP/gh-pages/';
export const SC_ACCOUNTS_FILE = `${SC_OUTPUT_BASE}output/accounts.json`;

export const {
  NEXT_PUBLIC_IMGIX_TOKEN: IMGIX_TOKEN,
  NEXT_PUBLIC_IMGIX_DOMAIN: IMGIX_DOMAIN = 'metafam.imgix.net',
} = process.env;
export const IPFS_LINK_PATTERN =
  process.env.NEXT_PUBLIC_IPFS_LINK_PATTERN ||
  'https://w3s.link/ipfs/{cid}/{path}' || // returns svg as application/xml
  'https://ipfs.io/ipfs/{cid}/{path}' ||
  'https://{v1cid}.ipfs.dweb.link/{path}';

export const PSEED_ADDRESS = '0x8a8fcd351ed553fc75aecbc566a32f94471f302e';
export const PSEED_DECIMALS = 18;
export const PSEED_FOR_QUEST =
  process.env.NEXT_PUBLIC_APP_ENV === 'production' ? 100 : 0;
