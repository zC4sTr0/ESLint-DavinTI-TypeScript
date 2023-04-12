declare class Engine {
    /**
     * Debug method for logging messages.
     * @param message - The message to log.
     */
    debug(message: string): void;
    /**
     * Deprecated method.
     * @deprecated Use otherMethod() instead.
     */
    deprecatedMethod(): void;
    // Add other methods and properties as needed
}
// Declare the global `engine` object as an instance of the `Engine` class
declare const engine: Engine;