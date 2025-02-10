import api, { EndPoints } from 'app/api/axios';

export type UserModel = {
  email: string;
  password: string;
};

export async function loginAxios(userModel: UserModel) {
  return await api.post<{ accessToken: string }>(EndPoints.login, userModel);
}

export type RegisterModel = {
  email: string;
  password: string;
  name: string;
  mobile: string;
  policy: boolean;
};

export async function registerAxios(registerModel: RegisterModel) {
  return await api.post<{ accessToken: string }>(
    EndPoints.register,
    registerModel,
  );
}
