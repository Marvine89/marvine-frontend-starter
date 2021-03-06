import { IProduct } from './product.interface';

export interface IUser {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  phone: string;
  avatar: string;
  email: string;
  address: IAddress;
  role: 'ADMIN' | 'CUSTOMER';
}

interface IAddress {
  country: string;
  city: string;
  zip: string;
  street: string;
}

export interface IUserProduct extends IProduct {
  quantity: number;
}
