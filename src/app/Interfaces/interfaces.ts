export interface UserI {
  nombre: string;
  email: string;
  password: string;
  perfil: 'usuario' | 'admin';
}

export interface Sales {
  idClient: string;
  nameClient: string;
  date: Date; // Cambiado a tipo Date
  order: number;
  direction: string;
  phone: string;
  email: string;
  idVendor: string;
  nameVendor: string;
  nameProduct: string;
  stockPSales: number;
  discount: number;
  unitPrice: number;
  totalPSales: number;
}
export interface Inventory {
  idProduct?: string;
  nameProduct: string;
  description: string;
  unitPrice: number;
  category: string;
  order: number;
  stock: number;
  stockMinimun: number;
}