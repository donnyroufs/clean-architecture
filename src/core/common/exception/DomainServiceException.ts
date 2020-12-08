export class DomainServiceException extends Error {
  constructor(public message: string, public type: string) {
    super();
  }
}
