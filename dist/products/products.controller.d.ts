import { ProductsService } from './products.service.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto, user: any): Promise<import("./entities/product.entity.js").Product>;
    findAll(): Promise<import("./entities/product.entity.js").Product[]>;
    findOne(id: number): Promise<import("./entities/product.entity.js").Product>;
    update(id: number, updateProductDto: UpdateProductDto): Promise<import("./entities/product.entity.js").Product>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
