/**
 * @module libService
 * @author gabriel.sodre
 * @since 1.0.0
 */

/**
 * Mapeamento dos tipos de scripts suportados pela biblioteca.
 * @typedef {Object} ScriptMapping
 * @property {'db'} db - Tipo de script para banco de dados.
 * @property {'messages'} messages - Tipo de script para mensagens.
 * @property {typeof QueryService} db - Referência à classe QueryService.
 * @property {typeof MessageService} messages - Referência à classe MessageService.
 */
type ScriptMapping = {
  'db': typeof QueryService,
  'messages': typeof MessageService,
};

/**
 * Classe responsável pelo carregamento de scripts suportados pela biblioteca.
 * @class
 * @name libService
 */
declare class libService {
/**
   * Método estático para carregamento de scripts suportados pela biblioteca.
   * @method loadScript
   * @static
   * @template T
   * @param {T} scriptName - Nome do script a ser carregado.
   * @returns {ScriptMapping[T]} - Objeto com o tipo de script e a referência à classe correspondente.
   * @example
   * const queryService = libService.loadScript('db');
   * const messageService = libService.loadScript('messages');
   */
   static loadScript<T extends keyof ScriptMapping>(scriptName: T): ScriptMapping[T];
}

/**
 * Referência à instância da classe libService.
 * @type {libService}
 */
declare const lib: libService;
