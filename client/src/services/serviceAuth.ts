import { login, register } from 'api/auth';
import { ILoginResponse, IRegisterResponse } from 'domains/interfaces/api';
import { ILogin } from 'domains/interfaces/login';
import { IRegister } from 'domains/interfaces/register';

const onLogin = async (credentials: ILogin, navigate: any) => {
  const response: ILoginResponse | undefined = await login({
    mail: credentials.mail,
    password: credentials.password,
  });
  if (!response) {
    return;
  }
  navigate('/home');
};

const onRegister = async (credentials: IRegister, navigate: any) => {
  const response: IRegisterResponse | undefined = await register({
    name: credentials.name,
    mail: credentials.mail,
    password: credentials.password,
  });

  if (!response) {
    return;
  }

  await onLogin(
    {
      mail: credentials.mail,
      password: credentials.password,
    },
    navigate,
  );
};

export default { onLogin, onRegister };
