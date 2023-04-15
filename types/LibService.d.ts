type ScriptMapping = {
  'db': typeof QueryService,
  'messages': typeof MessageService,
};

declare class libService {
    static loadScript<T extends keyof ScriptMapping>(scriptName: T): ScriptMapping[T];
}

declare const lib: libService;