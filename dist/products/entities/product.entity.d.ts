import { User } from "../../users/entities/user.entity.js";
export declare class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    stock: number;
    createdAt: Date;
    user: User;
}
