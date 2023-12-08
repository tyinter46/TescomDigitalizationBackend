import dotenv from 'dotenv';

dotenv.config();

export default class SMSService {
  private termiiApiKey = process.env.TERMII_API_KEY;
  //   private senderId =

  public async sendCode(params: { phoneNumer: string; code: string }) {
    const data = {
      api_key: this.termiiApiKey,
      message_type: 'NUMERIC',
      to: `${params.phoneNumer}`,
      from: 'N-Alert',
      channel: 'dnd',
      pin_attempts: 10,
      pin_time_to_live: 5,
      pin_length: 6,
      pin_placeholder: `< ${params.code} >`,
      message_text: `Your TESCOM authentication code is ${params.code}. it expires in 15 minutes`,
      pin_type: 'NUMERIC',
    };
    console.log(params.code,params.phoneNumer)
    const options = {
      method: 'POST',
      url: 'https://api.ng.termii.com/api/sms/otp/send',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      let fetchRes = fetch(options.url, options);
      fetchRes
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
    } catch (err) {
      throw new Error(err?.toString());
    }
  }
}

//  const smsService : SMSService = new SMSService ()
//  smsService.sendCode({phoneNumer:'+2348035640336', code:'12345'})