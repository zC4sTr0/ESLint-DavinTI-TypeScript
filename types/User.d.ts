/**
 * @module UserDTO
 * @author gabriel.sodre
 * @since 1.0.0
 */

declare class UserDTO {
    /**
     * Obtém a data de expiração da conta.
     * @function getAccountExpiration
     * @memberOf UserDTO
     * @returns {Date} A data de expiração da conta.
     */
    getAccountExpiration(): Date;
    /**
     * Obtém o endereço de e-mail do usuário.
     * @function getEmail
     * @memberOf UserDTO
     * @returns {string} uma string com o endereço de e-mail registrado do usuário.
     * @example
     * ```javascript
     * var email_usuario_logado = engine.getLoggedUser().getEmail();
     * if (email_usuario_logado !== '') {
     *    engine.debug('O email do usuário logado é: ' + email_usuario_logado);
     * }
     * ```
     */
    getEmail(): string;
    /**
     * Obtém o script de inicialização do usuário.
     * @function getInitScript
     * @memberOf UserDTO
     * @returns {string} O script de inicialização do usuário.
     */
    getInitScript(): string;
    /**
     * Obtém o login do usuário.
     * @function getLogin
     * @memberOf UserDTO
     * @returns {string} O login do usuário.
     */
    getLogin(): string;
    /**
     * Obtém o nome do usuário.
     * @function getName
     * @memberOf UserDTO
     * @returns {string} O nome do usuário.
     */
    getName(): string;
    /**
     * Obtém os papéis do usuário.
     * @function getRoles
     * @memberOf UserDTO
     * @returns {string[]} Os papéis do usuário.
     */
    getRoles(): string[];
    /**
     * Verifica se o usuário está ativo.
     * @function isActive
     * @memberOf UserDTO
     * @returns {boolean} Retorna true se o usuário estiver ativo, false caso contrário.
     */
    isActive(): boolean;
    /**
     * Verifica se o painel é a tela principal.
     * @function isPainelAsMain
     * @memberOf UserDTO
     * @returns {boolean} Retorna true se o painel for a tela principal, false caso contrário.
     */
    isPainelAsMain(): boolean;
    /**
     * Define a data de expiração da conta.
     * @function setAccountExpiration
     * @memberOf UserDTO
     * @param {Date} accountExpiration - A nova data de expiração da conta.
     */
    setAccountExpiration(accountExpiration: Date): void;
    /**
     * Define se o usuário está ativo.
     * @function setActive
     * @memberOf UserDTO
     * @param {boolean} active - True para ativar o usuário, false para desativar.
     */
    setActive(active: boolean): void;
    /**
     * Define o endereço de e-mail do usuário.
     * @function setEmail
     * @memberOf UserDTO
     * @param {string} email - O novo endereço de e-mail do usuário.
     */
    setEmail(email: string): void;
    /**
     * Define o script de inicialização do usuário.
     * @function setInitScript
     * @memberOf UserDTO
     * @param {string} initScript - O novo script de inicialização do usuário.
     */
    setInitScript(initScript: string): void;
    /**
     * Define o login do usuário.
     * @function setLogin
     * @memberOf UserDTO
     * @param {string} login - O novo login do usuário.
     */
    setLogin(login: string): void;
    /**
     * Define o nome do usuário.
     * @function setName
     * @memberOf UserDTO
     * @param {string} name - O novo nome do usuário.
     */
    setName(name: string): void;
    /**
     * Define se o painel é a tela principal.
     * @function setPainelAsMain
     * @memberOf UserDTO
     * @param {boolean} painelAsMain - True para definir o painel como tela principal, false caso contrário.
     */
    setPainelAsMain(painelAsMain: boolean): void;
    /**
     * Define os papéis do usuário.
     * @function setRoles
     * @memberOf UserDTO
     * @param {string[]} roles - Os novos papéis do usuário.
     */
    setRoles(roles: string[]): void;
}
// Declara o objeto global `engine` como uma instância da classe `Engine`.
declare const User: UserDTO;