/**
 * @module QueryService
 * @author gabriel.sodre
 * @since 1.0.0
 */

declare class QueryService {
/**
   * Define os grupos do usuário. Os grupos são utilizados para definir as permissões de acesso do usuário.
   * @function setRoles
   * @memberOf QueryService
   */
   constructor(connectionName: string);
   queryRows(query: string): any[];
   update(query: string): void;
}

declare const queryLibrary: QueryService;