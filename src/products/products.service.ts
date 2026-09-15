import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductDao } from './dao/product.dao.js';
import { CreateProductDto } from './dto/create-product.dto.js';
import { UpdateProductDto } from './dto/update-product.dto.js';
import { Product } from './entities/product.entity.js';

@Injectable()
export class ProductsService {
  constructor(private readonly productDao: ProductDao) {}

  async create(
    createProductDto: CreateProductDto,
    userLogueado: any,
  ): Promise<Product> {
    const newProductData = {
      ...createProductDto,
      user: { id: userLogueado.sub },
    };
    return await this.productDao.save(newProductData);
  }

  async findAll(): Promise<Product[]> {
    return await this.productDao.findAll();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productDao.findById(id);
    if (!product) {
      throw new NotFoundException(`El producto con ID ${id} no existe`);
    }
    return product;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    await this.findOne(id);
    await this.productDao.update(id, updateProductDto);
    return await this.findOne(id);
  }

  async remove(id: number): Promise<{ message: string }> {
    await this.findOne(id);
    await this.productDao.delete(id);
    return { message: `Producto con ID ${id} eliminado correctamente` };
  }
}
