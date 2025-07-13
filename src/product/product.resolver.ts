import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { InputType, Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class ProductType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  category?: string;

  @Field()
  price: number;

  @Field()
  stock: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class ProductInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  category?: string;

  @Field()
  price: number;

  @Field()
  stock: number;
}

@Resolver(() => ProductType)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [ProductType])
  listAllProducts() {
    return this.productService.findAll();
  }

  @Query(() => ProductType, { nullable: true })
  getProductById(@Args('id') id: string) {
    return this.productService.findById(id);
  }

  @Query(() => [ProductType])
  getProductsByName(@Args('name') name: string) {
    return this.productService.findByName(name);
  }

  @Query(() => [ProductType])
  getProductsByCategory(@Args('category') category: string) {
    return this.productService.findByCategory(category);
  }

  @Mutation(() => ProductType)
  createProduct(@Args('input') input: ProductInput) {
    return this.productService.create(input);
  }

  @Mutation(() => ProductType, { nullable: true })
  updateProduct(@Args('id') id: string, @Args('input') input: ProductInput) {
    return this.productService.update(id, input);
  }

  @Mutation(() => Boolean)
  deleteProduct(@Args('id') id: string) {
    return this.productService.delete(id);
  }
}
