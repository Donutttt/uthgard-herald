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
