export class CustomError extends Error {
  public message: string;
  public statusCode: number;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}
