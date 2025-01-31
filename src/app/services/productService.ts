import api, { EndPoints } from 'app/api/axios';
import { ProductType } from 'app/models/product-type';

export async function getProductsAxios() {
  return await api.get<ProductType[]>(EndPoints.products);
}

export async function postProductAxios(product: ProductType) {
  return await api.post<ProductType>(EndPoints.products, product);
}
