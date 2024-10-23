import { IRegisteredForm } from './registeredform';
export interface Client extends IRegisteredForm {
    isMustChangePassword: boolean;
}