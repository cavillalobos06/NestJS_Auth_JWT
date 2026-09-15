import { Repository } from 'typeorm';
import { Product } from './entities/product.entity.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): string;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
