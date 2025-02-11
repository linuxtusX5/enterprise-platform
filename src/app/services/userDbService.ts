import api, { EndPoints } from 'app/api/axios';
import { UserType } from 'app/models/usertype';

export async function getUserByIdFromDbAxios(id: string) {
  return await api.get<UserType>(`${EndPoints.usersDb}/${id}`);
}

export async function putUserFromDbAxios(user: UserType) {
  return await api.put<UserType>(`${EndPoints.usersDb}/${user.id}`, user);
}
