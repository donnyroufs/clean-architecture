export class DomainValidationException extends Error {
  constructor(public message: string, public type: string) {
    super();
  }
}
