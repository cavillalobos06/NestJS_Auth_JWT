import { Product } from "../../products/entities/product.entity.js";
export declare class User {
    id: number;
    name: string;
    role: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    products: Product[];
}
