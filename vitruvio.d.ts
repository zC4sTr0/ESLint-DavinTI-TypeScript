declare class Engine {
    /**
     * Método debug para log de mensagens no vitrúvio
     * @param message - A mensagem a ser logada pelo vitrúvio
     */
    debug(message: string): void;
    /**
     * Método OBSOLETO. Não utilizar
     * @deprecated Não utilize esta função. Use a lib messages ao invés disso
     */
    funcaoObsoleta(): void;
    /**
     * Método para obter o valor de um campo do Vitrúvio
     * @param field - O nome do campo a ser obtido - ex: "dbtUsuarios"
     * @return - O objeto do campo, ou undefined caso não exista
     */
    getField(field:String):Object;
    /**
     * Método para obter o numero da instância do processo em execução no Vitrúvio
     * @return - O número da instância do processo em execução no Vitrúvio
     * @example
     * ```javascript
     * // Retorna o ID do Processo do vitrúvio
     * const processInstanceId = engine.getProcessInstanceId();
     * ```
     */
    getProcessInstanceId():number;
}
// Declare the global `engine` object as an instance of the `Engine` class
declare const engine: Engine;
