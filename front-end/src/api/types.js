/**
 *  @typedef {{
 *  id: number;
 *  name: string;
 *  email: string;
 *  role: 'customer' | 'seller' | 'administrator'
 *  token: string;
 * }} OkLogin
 */

/**
 *  @typedef {{message: string}} ErrorLogin
 */

/**
 * @typedef {{
 *  login: (email: string, password: string) => Promise<Login>
 * }} Api
 */
