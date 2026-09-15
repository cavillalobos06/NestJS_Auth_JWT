import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity.js';
import { UpdateProductDto } from '../dto/update-product.dto.js';
import { CreateProductDto } from '../dto/create-product.dto.js';

@Injectable()
export class ProductDao {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async save(createProductDto: CreateProductDto): Promise<Product> {
    const productInstance = this.productRepository.create(createProductDto);
    return await this.productRepository.save(productInstance);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({
      relations: {
        user: true,
      },
    });
  }

  async findById(id: number): Promise<Product | null> {
    return await this.productRepository.findOne({
      where: { id },
      relations: { user: true },
    });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<void> {
    await this.productRepository.update(id, updateProductDto);
  }

  async delete(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
