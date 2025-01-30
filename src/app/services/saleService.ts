import api, { EndPoints } from 'app/api/axios';
import { SaleType } from 'app/models/sale-type';

export async function getSalesAxios() {
  return await api.get<SaleType[]>(EndPoints.sales);
}
