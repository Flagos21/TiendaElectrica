export interface UserI {
    nombre: string;
    email: string;
    password: string;
    perfil: 'usuario' | 'admin';
  }
export interface Sales {
    idClient: string;
    nameClient:string;
    date: string;
    order: number;
    direction: string;
    phone: string;
    idVendor: string;
    nameVendor: string;
    nameProduct: string;
    stockPSales: number;
    discount: number;
    unitPrice: number;
    totalPSales: number;
}
  