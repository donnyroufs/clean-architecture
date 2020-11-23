export class ValidationException extends Error {
  constructor(public message: string, public type: string) {
    super();
  }
}
