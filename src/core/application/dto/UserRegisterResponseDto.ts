export class UserRegisterResponseDto {
  public success: boolean;

  constructor({ success }) {
    this.success = success;
  }
}
