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
     *
     * Para obter o login do usuário ao invés do e-mail, utilize o método {@link getLogin}
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
     *
     * Para obter o nome do usuário ao invés do login, utilize o método {@link getName}
     * @function getLogin
     * @memberOf UserDTO
     * @returns {string} uma string com o login do usuário.
     * @example
     * ```javascript
     * var login_usuario_logado = engine.getLoggedUser().getLogin();
     * if (login_usuario_logado !== '') {
     *   engine.debug('O login do usuário logado é: ' + login_usuario_logado);
     * }
     * ```
     * @summary Obtém o login do usuário.
     */
    getLogin(): string;
    /**
     * Obtém o nome do usuário. O nome do usuário é definido no cadastro do usuário no sistema.
     *
     * Para obter o e-mail do usuário ao invés do nome, utilize o método {@link getEmail}
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
     * Verifica se o usuário está ativo. Um usuário inativo não pode logar no sistema.
     *
     * Para modificar o status ativo do usuário, utilize o método {@link setActive}
     * @function isActive
     * @memberOf UserDTO
     * @returns {boolean} Retorna true se o usuário estiver ativo, false caso contrário.
     * @example
     * ```javascript
     * var usuario_logado = engine.getLoggedUser();
     * if (usuario_logado.isActive()) {
     *  engine.debug('O usuário está ativo.');
     * } else {
     * engine.debug('O usuário está inativo.');
     * }
     * ```
     * @summary Verifica se o usuário está ativo.
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
     * Define a data de expiração da conta. Uma conta expirada não pode logar no sistema.
     * @function setAccountExpiration
     * @memberOf UserDTO
     * @param {Date} accountExpiration - A nova data de expiração da conta.
     */
    setAccountExpiration(accountExpiration: Date): void;
    /**
     * Modifica o status ativo do usuário (ativo ou inativo). Um usuário inativo não pode logar no sistema.
     *
     * Para verificar o status ativo do usuário, utilize o método {@link isActive}
     * @function setActive
     * @memberOf UserDTO
     * @param {boolean} active - True para ativar o usuário, false para desativar.
     * @example
     * ```javascript
     * var usuario_logado = engine.getLoggedUser();
     * usuario_logado.setActive(false); // Desativa o usuário logado
     * ```
     */
    setActive(active: boolean): void;
    /**
     * Define o endereço de e-mail do usuário.
     *
     * Para definir o login do usuário ao invés do e-mail, utilize o método {@link setLogin}
     * @function setEmail
     * @memberOf UserDTO
     * @param {string} email - O novo endereço de e-mail do usuário.
     * @example
     * ```javascript
     * var usuario_logado = engine.getLoggedUser();
     * usuario_logado.setEmail('exemplo@davinti.com.br'); // Altera o e-mail do usuário logado
     * ```
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
     *
     * Para definir o nome do usuário ao invés do login, utilize o método {@link setName}
     * @function setLogin
     * @memberOf UserDTO
     * @param {string} login - O novo login do usuário.
     * @example
     * ```javascript
     * var usuario_logado = engine.getLoggedUser();
     * usuario_logado.setLogin('novo_login'); // Altera o login do usuário logado
     * ```
     */
    setLogin(login: string): void;
    /**
     * Define o nome do usuário.
     *
     * Para definir o login do usuário ao invés do nome, utilize o método {@link setLogin}
     * @function setName
     * @memberOf UserDTO
     * @param {string} name - O novo nome do usuário.
     * @example
     * ```javascript
     * var usuario_logado = engine.getLoggedUser();
     * usuario_logado.setName('João Vitor'); // Altera o nome do usuário logado para 'João Vitor'
     * ```
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
     * Define os grupos do usuário. Os grupos são utilizados para definir as permissões de acesso do usuário.
     * @function setRoles
     * @memberOf UserDTO
     * @param {string[]} roles - Os novos papéis do usuário.
     */
    setRoles(roles: string[]): void;
}
declare const User: UserDTO;