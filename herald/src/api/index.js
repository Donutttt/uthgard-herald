import axios from 'axios';

import config from '../config/config';

/**
 * Just adds the url provided onto the base url
 * @param {string} url the end part of the url, without a preceeding /
 * @returns {string} a useable url
 */
const buildUrl = url => `${config.baseUrl}${url}`;

/**
 * Gets a promise of data from the api based on the url provided
 * @param {string} url the end part of the url, without the preceeding /
 * @returns {promise} returns data from the api once available.
 */
const getFromApi = url => axios.get(buildUrl(url))

/**
 * Gets a promise of player data based on the name provided.
 * @param {string} playerName the name of the player for which data is required
 * @returns {promise} returns data from the api once available.
 */
export const getPlayer = playerName => {
  return getFromApi(`player/${playerName}`);
};

/**
 * Gets a promise of guild data based on the name provided.
 * @param {string} guildName the name of the guild for which data is required
 * @returns {promise} returns data from the api once available.
 */
export const getGuild = guildName => {
  return getFromApi(`guild/${guildName}`);
};

/**
 * Gets search results for a player name.
 * @param {string} playerName the player name to search by.
 * @returns {promise} a promise of player data matching the search query.
 */
export const getPlayerSearchResults = playerName => getFromApi(`search/player/${playerName}`);


/**
 * Gets search results for a guild name.
 * @param {string} guildName the guild name to search by.
 * @returns {promise} a promise of guild data matching the search query.
 */
export const getGuildSearchResults = guildName => getFromApi(`search/guild/${guildName}`);

export default {
  getPlayer,
  getGuild,
  getPlayerSearchResults,
  getGuildSearchResults,
};
