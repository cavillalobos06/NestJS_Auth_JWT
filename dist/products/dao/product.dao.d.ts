import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity.js';
import { UpdateProductDto } from '../dto/update-product.dto.js';
import { CreateProductDto } from '../dto/create-product.dto.js';
export declare class ProductDao {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    save(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product | null>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<void>;
    delete(id: number): Promise<void>;
}
