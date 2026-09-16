import { ProductDao } from './dao/product.dao.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './entities/product.entity.js';
export declare class ProductsService {
    private readonly productDao;
    constructor(productDao: ProductDao);
    create(createProductDto: CreateProductDto, userLogueado: any): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
