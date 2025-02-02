export class FetchError extends Error {
  info?: unknown;
  status?: number;

  constructor(message: string, info?: unknown, status?: number) {
    super(message);
    this.name = "FetchError";
    this.info = info;
    this.status = status;
  }
}
