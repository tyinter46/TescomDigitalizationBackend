import { createTransport, Transporter } from "nodemailer";
import dotenv from 'dotenv';
import {ClientBaseUrl} from '../../config/app';
import { I2FACode, IConfirmationMail, IForgotPassword } from "./model";
import { AUTH_CODE_SUBJECT, CONFIRM_ACCOUNT_SUBJECT, ACCOUNT_SUCCESS_SUBJECT, PASSWORD_RESET_HELP } from "../../utils/constants";
import authCodeTemplate from "../../templates/authCodeTemplate";
import confirmAccount from "../../templates/confirmAccount";
import forgotPassword from '../../templates/forgetPasswordTemplate';
import accountSuccessMail from '../../templates/accountSuccessTemplate'

dotenv.config();

const transporter: Transporter = createTransport ({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken : process.env.GMAIL_USER_REFRESH_TOKEN
    },
});

class MailService {
    
    private transporter : Transporter = transporter;
    private user : string = process.env.GOOGLE_USER;
    private client_base_url = ClientBaseUrl;


    public async sendAccountActivationRequest(params: IConfirmationMail){
        const html = confirmAccount(params.confirmationCode, this.client_base_url);
        try {
          const verifyTransporter =  await this.transporter.verify();
           console.log(verifyTransporter)
            this.transporter.sendMail({
                from: this.user,
                to: params.email,
                subject: CONFIRM_ACCOUNT_SUBJECT,
                html : html,
            },
            (error)=>{
                if (error) throw new Error(error.toString());
                else return true;
            }
            )
        } catch (err: any){
            throw new Error(err.toString())
        }
    }

    public async send2FAAuthCode (params: I2FACode){
        const html = authCodeTemplate({name: params.name, code: params.code });
       try {
        await this.transporter.verify();
        this.transporter.sendMail({
            from: this.user,
            to: params.email,
            subject: AUTH_CODE_SUBJECT,
            html: html
        },
        (error)=>{
    if(error) throw new Error(error.toString());
    else return true
       }
    )   
       } catch (error){
        throw new Error(error);
       }
    }

public async sendAccountSuccessEmail(params: Partial<IConfirmationMail>){
    const html = accountSuccessMail(this.client_base_url);
    try{
        await this.transporter.verify();
        this.transporter.sendMail({
            from: this.user,
            to: params.email,
            subject: ACCOUNT_SUCCESS_SUBJECT,
            html: html,
        },
        (error) => {
            if (error) throw new Error(error.toString());
            else return true
        }
        )
    } catch (err: any){
        throw new Error(err.toString())
    }
}

public  async sendPasswordReset (params: IForgotPassword){
    const html = forgotPassword(params.token, this.client_base_url, params.name)
    try{
        await this.transporter.verify();
        this.transporter.sendMail({
           from: this.user,
           to: params.email,
           subject: PASSWORD_RESET_HELP,
           html: html,
        },
        (error)=>{
            if (error) throw new Error(error.toString());
            else return true
        })
    }   catch (error){
         throw new Error(error)
    }
}

}

export default MailService;