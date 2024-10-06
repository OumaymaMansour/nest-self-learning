
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // Create some suppliers
    const supplier1 = await prisma.supplier.create({
        data: { name: 'TechSupply Co' },
    });

    const supplier2 = await prisma.supplier.create({
        data: { name: 'Global Electronics Ltd' },
    });

    // Create some categories
    const wirelessCategory = await prisma.category.create({
        data: { name: 'Wireless' },
    });

    // Create some products
    const product1 = await prisma.product.create({
        data: {
            name: 'Wireless Headphones',
            description: 'High-quality noise-cancelling wireless headphones.',
            price: 199.99,
            quantity: 50,
            categories: { connect: { id: wirelessCategory.id } },
            supplier: { connect: { id: supplier1.id } },
            images: {
                create: [{ url: 'https://cdn.thewirecutter.com/wp-content/media/2021/11/wirelessearbuds-2048px-8831.jpg' }],
            },
        },
    });

    const product2 = await prisma.product.create({
        data: {
            name: 'Wireless Router',
            description: 'Dual-band router with high-speed internet connectivity.',
            price: 89.99,
            quantity: 30,
            categories: { connect: { id: wirelessCategory.id } },
            supplier: { connect: { id: supplier2.id } },
            images: {
                create: [{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Linksys-Wireless-G-Router.jpg/2389px-Linksys-Wireless-G-Router.jpg' }],
            },
        },
    });

    const product3 = await prisma.product.create({
        data: {
            name: 'Wireless Mouse',
            description: 'Ergonomic wireless mouse with long battery life.',
            price: 29.99,
            quantity: 100,
            categories: { connect: { id: wirelessCategory.id } },
            supplier: { connect: { id: supplier1.id } },
            
        },
    });

    console.log({ product1, product2, product3 });
}


// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });