export type ExecuteHandler = (value: string) => Promise<boolean>;
export class FileAppender {
  private executeHandler: ExecuteHandler;
  constructor(executeHandler: ExecuteHandler) {
    this.executeHandler = executeHandler;
  }
  execute(value: string) {
    this.executeHandler?.(value);
  }
}
