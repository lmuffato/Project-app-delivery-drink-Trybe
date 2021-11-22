/**
 * @typedef {{
 * id: number;
 * name: string;
 * email: string;
 * role: 'customer' | 'seller' | 'administrator'
 * }} User
 */

/**
 * @typedef {{
 * id: number;
 * price: number;
 * urlImage: string;
 * name: string;
 * }} Product
 */

/**
 *  @typedef {User & {token: string}} OkLogin
 */

/**
 *  @typedef {{message: string}} ErrorResponse
 */

/**
 * @typedef {{
 *  login: (email: string, password: string) => Promise<Login>
 * }} Api
 */
