var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity.js';
let ProductDao = class ProductDao {
    productRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async save(createProductDto) {
        const productInstance = this.productRepository.create(createProductDto);
        return await this.productRepository.save(productInstance);
    }
    async findAll() {
        return await this.productRepository.find({
            relations: {
                user: true,
            },
            select: {
                user: {
                    id: true,
                    name: true,
                    role: true
                }
            }
        });
    }
    async findById(id) {
        return await this.productRepository.findOne({
            where: { id },
            relations: { user: true },
            select: {
                user: {
                    id: true,
                    name: true,
                    role: true
                }
            }
        });
    }
    async update(id, updateProductDto) {
        await this.productRepository.update(id, updateProductDto);
    }
    async delete(id) {
        await this.productRepository.delete(id);
    }
};
ProductDao = __decorate([
    Injectable(),
    __param(0, InjectRepository(Product)),
    __metadata("design:paramtypes", [Repository])
], ProductDao);
export { ProductDao };
//# sourceMappingURL=product.dao.js.map