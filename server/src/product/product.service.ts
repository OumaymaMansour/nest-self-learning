import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient, Product as PrismaProduct } from '@prisma/client'; 

@Injectable()
export class ProductService {
  private readonly prisma = new PrismaClient()

  async getAll(): Promise<PrismaProduct[]> {
    return this.prisma.product.findMany({
      include: {
        images: true,
      },
    });
  }


  async getOne(id: number): Promise<PrismaProduct> {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  async create(product: PrismaProduct): Promise<PrismaProduct> {
    return this.prisma.product.create({
      data: product,
    });
  }

  async update (id : number,data: Prisma.ProductUpdateInput): Promise<PrismaProduct> {
    return this.prisma.product.update({
      where: { id },
      data
    });
  }

//   async deleteAll(): Promise<{ message: string }> {
//     await this.prisma.product.deleteMany(); 
//     return { message: 'All products have been deleted' };
//   }


}
