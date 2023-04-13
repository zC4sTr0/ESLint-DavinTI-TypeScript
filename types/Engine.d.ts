/**
 * @module Engine
 * @author gabriel.sodre
 * @since 1.0.0
 */

declare class Engine {
    /**
     * Método para registrar mensagens de depuração no Vitrúvio.
     * @function debug
     * @memberOf Engine
     * @param {string} message - A mensagem a ser registrada no log do Vitrúvio.
     * @example
     * ```javascript
     * // Registrar uma mensagem de depuração
     * engine.debug("Mensagem de depuração");
     * ```
     */
    debug(message: string): void;

    /**
     * @deprecated Método OBSOLETO. Não utilizar. Utilize a biblioteca 'messages' em vez disso.
     */
    funcaoObsoleta(): void;
    /**
     * Método para obter o valor de um campo do Vitrúvio.
     * @function getField
     * @memberOf Engine
     * @param {string} fieldId - ID do campo a ser obtido. Exemplo: "dbtUsuarios".
     * @returns {Object|undefined} O objeto do campo ou undefined caso não exista.
     * @example
     * ```javascript
     * // Obter o campo 'dbtUsuarios'
     * const campoUsuarios = engine.getField("dbtUsuarios");
     * ```
     */
    getField(fieldId: string): Object | undefined;

    /**
     * Método para obter o número da instância do processo em execução no Vitrúvio.
     * @function getProcessInstanceId
     * @memberOf Engine
     * @returns {number} Retorna uma String com o ID da instância do processo em execução no Vitrúvio.
     * @example
     * ```javascript
     * // Retorna o ID da instância do processo em execução no Vitrúvio
     * const processInstanceId = engine.getProcessInstanceId();
     * ```
     */
    getProcessInstanceId(): number;

    /**
     * Constrói uma string com informações detalhadas sobre o contexto da engine.
     * @function buildEngineContextInfo
     * @memberOf Engine
     * @returns {string} Uma string contendo detalhes sobre o contexto da engine.
     * @example
     * ```javascript
     * // Obter informações do contexto da engine
     * const engineContextInfo = engine.buildEngineContextInfo();
     * engine.debug(engineContextInfo);
     * ```
     */
    buildEngineContextInfo(): string;

    /**
     * @function close
     * memberOf Engine
     * Solicita o fechamento do presenter, caso esteja disposto em uma janela.
     * @returns {boolean} Um booleano indicando se o fechamento foi realizado com sucesso.
     * @example
     * ```javascript
     * // fechar o formulário atual
     * var fechadoComSucesso = engine.close();
     * if (fechadoComSucesso) {
     *    engine.debug("Formulário fechado com sucesso!");
     * } else {
     *   engine.debug("Formulário não foi fechado!");
     * }
     * ```
     */
    close(): boolean;

    /**
     * Solicita o fechamento do presenter, caso esteja disposto em uma janela.
     * @param forceClose - Um booleano para forçar o fechamento do presenter.
     * @returns Um booleano indicando se o fechamento foi realizado com sucesso.
     */
    close(forceClose: boolean): boolean;

    /**
     * Realiza o commit dos dados do formulário e retorna os dados atualizados.
     * @returns Os dados do formulário atualizados.
     */
    commitAndGetFormData(): void;
    /**
     * Registra uma mensagem de depuração no Vitrúvio com um objeto como argumento.
     * @param object - O objeto a ser registrado no log de depuração do Vitrúvio.
     */
    downloadUrl(url: string): void;
    /**
     * Executa o comando JavaScript no navegador hospedeiro do Vitrúvio.
     * @param script - O script JavaScript a ser executado.
     */
    executeClientSideJavaScript(script: string): void;
    /**
     * Executa o URL informado.
     * @param url - O URL a ser executado.
     */
    executeUrl(url: string): void;
    /**
     * Acessa o formKey.
     * @returns O formKey atual.
     */
    formKey(): string;
    /**
     * Gera um UUID.
     * @returns Um UUID gerado.
     */
    generateUUID(): string;
    /**
     * Obtém o UUID da engine.
     * @returns O UUID da engine atual.
     */
    getEngineUUID(): string;
    /**
     * Acessa um campo de dados pelo ID.
     * @param fieldId - ID do campo a ser obtido.
     * @returns O objeto Field<?> correspondente ou undefined caso não exista.
     * @example
     * ```javascript
     * // Obter o campo 'dbtUsuarios'
     * const campoUsuarios = engine.getField("dbtUsuarios");
     * ```
     */
    getField(fieldId: string): Object | undefined;
    /**
     * Coleta os IDs dos campos disponíveis na engine.
     * @returns Uma coleção de strings com os IDs dos campos disponíveis.
     */
    getFieldIds(): Object;
    /**
     * Obtém os dados do formulário.
     * @returns Os dados do formulário atual.
     */
    getFormData(): Object;
    /**
    * Obtém o FormDebugMode.
    * @returns O FormDebugMode atual.
    */
    getFormDebugMode(): Object;
    /**
     * Obtém o FormDebugOutput.
     * @returns O FormDebugOutput atual.
     */
    getFormDebugOutput(): Object;
    /**
     * Obtém a descrição parametrizada do formulário.
     * @returns A descrição do formulário ou NULL caso não esteja definida.
     */
    getFormDescription(): string | null | undefined;
    /**
     * Obtém o nome do formulário associado à engine.
     * @returns O nome do formulário.
     */
    getFormName(): string;
    /**
     * Acessa uma variável global definida no escopo da engine do formulário.
     * @param key - A chave da variável global.
     * @returns O valor da variável global ou undefined caso não exista.
     */
    getGlobalVariable(key: string): Object | undefined;
    /**
     * Acessa o processo histórico.
     * @returns A instância de HistoricTaskInstance correspondente ao processo.
     */
    getHistoricTask(): Object;
    /**
     * Obtém uma referência para o label informado.
     * @param id - O ID do label desejado.
     * @returns Uma instância de Label correspondente ao ID informado.
     */
    getLabel(id: string): Object;
    /**
     * Acessa o Wrapper de Layout pelo ID.
     * @param layoutId - O ID do layout desejado.
     * @returns Uma instância de LayoutWrapper correspondente ao ID informado.
     */
    getLayout(layoutId: string): Object;
    /**
     * Obtém uma coleção de painéis identificados.
     * @returns Uma coleção de strings contendo os IDs dos painéis identificados.
     */
    getLayoutIds(): Object;
    /**
     * Acessa o usuário logado.
     * @returns Uma instância de UsuarioDTO correspondente ao usuário logado.
     */
    getLoggedUser(): UserDTO;
    /**
     * Obtém uma relação de todos os campos modificados.
     * @param fieldId - O ID do campo a ser verificado.
     * @returns Uma coleção de strings contendo os IDs dos campos modificados.
     */
    getModifiedFields(fieldId: string): Object;
    /**
     * Obtém o ID da definição do processo.
     * @returns Uma string contendo o ID da definição do processo.
     */
    getProcessDefinitionId(): string;
    /**
     * Acessa as variáveis do processo.
     * @returns Um mapa contendo as variáveis do processo.
     */
    getProcessVariables(): Object;
    /**
     * Acessa a tarefa vigente.
     * @returns Uma instância de Task correspondente à tarefa atual.
     */
    getTask(): Object;
    /**
     * Obtém o ID da tarefa.
     * @returns Uma string contendo o ID da tarefa.
     */
    getTaskId(): string;
    /**
    * Obtém um validador por ID.
    * @param id - O ID do validador desejado.
    * @returns Uma instância de Validator correspondente ao ID informado.
    */
    getValidator(id: string): Object;

    /**
     * Acessa a coleção de validadores.
     * @returns Uma coleção de instâncias de Validator.
     */
    getValidators(): Object;
    /**
     * Obtém o acesso ao controlador de widget pelo ID.
     * @param id - O ID do controlador de widget desejado.
     * @returns Uma instância de WidgetController correspondente ao ID informado.
     */
    getWidgetController(id: string): Object;
    /**
     * Registra uma mensagem de depuração no Vitrúvio com informações de depuração.
     * @param data - A mensagem de depuração a ser registrada.
     */
    handleDebugInfo(data: string): void;
    /**
     * Verifica se a engine permite, neste momento, o cancelamento do formulário.
     * @returns Um booleano indicando se o cancelamento está habilitado.
     */
    isCancelEnabled(): boolean;
    /**
     * Determina se o campo sofreu modificação desde seu último estado comitado.
     * @param fieldId - O ID do campo a ser verificado.
     * @returns Um booleano indicando se o campo foi modificado.
     */
    isFieldModified(fieldId: string): boolean;
    /**
     * Verifica se a engine permite, neste momento, a conclusão do formulário.
     * @returns Um booleano indicando se a conclusão está habilitada.
     */
    isFinishEnabled(): boolean;
    /**
     * Verifica se o formulário está inicializado.
     * @returns Um booleano indicando se o formulário está inicializado.
     */
    isForInitialized(): boolean;
    /**
     * Retorna a análise de estado se o formulário foi alterado desde o último commit.
     * @returns Um booleano indicando se o formulário foi modificado.
     */
    isFormModified(): boolean;
    /**
     * Determina se a variável global existe.
     * @param key - A chave da variável global.
     * @returns Um booleano indicando se a variável global está definida.
     */
    isGlobalVariableSet(key: string): boolean;
    /**
     * Verifica se a engine permite, neste momento, salvar o formulário.
     * @returns Um booleano indicando se a ação de salvar está habilitada.
     */
    isSaveEnabled(): boolean;
    /**
     * Determina o estado da engine.
     * @returns Um booleano indicando se a engine está em modo estrito.
     */
    isStrictMode(): boolean;
    /**
     * Determina se a engine de formulários considera os campos válidos.
     * @returns Um booleano indicando se os campos são válidos.
     */
    isValid(): boolean;
    /**
     * Abre um URL no navegador padrão.
     * @param url - O URL a ser aberto.
     */
    openUrl(url: string): void;
    /**
     * Abre um URL na janela atual do navegador.
     * @param url - O URL a ser aberto.
     */
    openUrlCurrentWindow(url: string): void;
    /**
     * Registra um timer para execução de comandos com repetição.
     * @param miliSeconds - O intervalo em milissegundos entre as execuções.
     * @param runnable - A função a ser executada a cada intervalo.
     * @returns Uma instância de ClientSideTimerExtension.
     */
    registerRepeatingTimer(miliSeconds: number, runnable: Object): Object;
    /**
     * Registra um timer para execução de um comando, uma única vez.
     * @param miliSeconds - O tempo em milissegundos até a execução do comando.
     * @param runnable - A função a ser executada após o tempo especificado.
     * @returns Uma instância de ClientSideTimerExtension.
     */
    registerTimerCommand(miliSeconds: number, runnable: Object): Object;
    /**
     * Informa para a engine se é permitido cancelar o formulário atual.
     * @param enabled - Um booleano indicando se o cancelamento deve ser habilitado.
     */
    setCancelEnabled(enabled: boolean): void;

    /**
     * Habilita ou desabilita a ação de concluir o formulário.
     * @param enabled - Um booleano indicando se a ação de concluir deve ser habilitada.
     */
    setFinishEnabled(enabled: boolean): void;
    /**
     * Define uma variável com escopo na instância do formulário vigente.
     * @param key - A chave da variável global.
     * @param value - O valor da variável global.
     */
    setGlobalVariable(key: string, value: Object): void;
    /**
     * Habilita ou desabilita a ação de salvar o formulário.
     * @param enabled - Um booleano indicando se a ação de salvar deve ser habilitada.
     */
    setSaveEnabled(enabled: boolean): void;
    /**
     * Configura a engine em modo estrito.
     * @param strict - Um booleano indicando se o modo estrito deve ser habilitado.
     */
    setStrictMode(strict: boolean): void;
    /**
     * Remove a variável do escopo.
     * @param key - A chave da variável global a ser removida.
     */
    unsetGlobalVariable(key: string): void;
    /**
     * Métodos que executam tarefas em background podem necessitar atualizar a UI de referência da Engine.
     * @param runnable - A função a ser executada para atualizar a UI.
     */
    updateUI(runnable: Object): void;
}
// Declara o objeto global `engine` como uma instância da classe `Engine`.
declare const engine: Engine;
