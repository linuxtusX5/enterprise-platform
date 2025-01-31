import api, { EndPoints } from 'app/api/axios';
import { SaleType } from 'app/models/sale-type';
import { ProductType } from 'app/models/product-type';

export async function getSalesAxios() {
  return await api.get<SaleType[]>(EndPoints.sales);
}
