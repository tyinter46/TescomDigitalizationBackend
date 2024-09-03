export interface IConfirmationMail {
  name: string;
  email: string;
  confirmationCode: string;
}

export interface IForgotPassword {
  token: string;
}

export interface I2FACode {
  name: string;
  email: string;
  code: string;
}
