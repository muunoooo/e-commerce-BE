import { Injectable } from '@nestjs/common';
import { Product } from './product.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  findAll(): Product[] {
    return this.products;
  }

  findById(id: string): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  findByCategory(category: string): Product[] {
    return this.products.filter((p) => p.category === category);
  }

  findByName(name: string): Product[] {
    return this.products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  create(productData): Product {
    const product: Product = {
      ...productData,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.products.push(product);
    return product;
  }

  update(id: string, updateData): Product | null {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return null;
    this.products[index] = {
      ...this.products[index],
      ...updateData,
      updatedAt: new Date(),
    };
    return this.products[index];
  }

  delete(id: string): boolean {
    const index = this.products.findIndex((p) => p.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }
}
