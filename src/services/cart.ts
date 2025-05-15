import { axiosInstance } from './instance';
import { CartDTO } from './dto/cart.dto';

/**
 * 
 * @returns 
 */
export const getCart = async (): Promise<CartDTO> => {
  return (await axiosInstance.get<CartDTO>('/cart')).data;
};
