import { Body, Controller,Delete,Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product as PrismaProduct } from '@prisma/client';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

@Get ('allproducts')
getAll ()   {
    return this.productService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.productService.getOne(+id);
  }

  @Post()
  async create(@Body() product: PrismaProduct) {
    return this.productService.create(product);
  }

//   @Delete()
//   async delete() {
//     return this.productService.deleteAll();
//   }
}





