var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDao } from './dao/product.dao.js';
let ProductsService = class ProductsService {
    productDao;
    constructor(productDao) {
        this.productDao = productDao;
    }
    async create(createProductDto, userLogueado) {
        const newProductData = {
            ...createProductDto,
            user: { id: userLogueado.sub },
        };
        return await this.productDao.save(newProductData);
    }
    async findAll() {
        return await this.productDao.findAll();
    }
    async findOne(id) {
        const product = await this.productDao.findById(id);
        if (!product) {
            throw new NotFoundException(`El producto con ID ${id} no existe`);
        }
        return product;
    }
    async update(id, updateProductDto) {
        await this.findOne(id);
        await this.productDao.update(id, updateProductDto);
        return await this.findOne(id);
    }
    async remove(id) {
        await this.findOne(id);
        await this.productDao.delete(id);
        return { message: `Producto con ID ${id} eliminado correctamente` };
    }
};
ProductsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ProductDao])
], ProductsService);
export { ProductsService };
//# sourceMappingURL=products.service.js.map