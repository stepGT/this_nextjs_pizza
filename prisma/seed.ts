import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';
import { ingredients, categories, products } from './constants';
import { Prisma } from '@prisma/client';

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

const generateProductItem = ({
  productID,
  pizzaType,
  size,
}: {
  productID: number;
  pizzaType?: 1 | 2;
  size?: 20 | 30 | 40;
}) => {
  return {
    productID,
    price: randomDecimalNumber(190, 600),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput;
};

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User',
        email: 'user@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@test.ru',
        password: hashSync('111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: 'Пепперони фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D61304FAF5A98A6958F2BB2D260.webp',
      categoryID: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: 'Сырная',
      imageUrl:
        'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
      categoryID: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: 'Чоризо фреш',
      imageUrl:
        'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
      categoryID: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      // Пицца "Пепперони фреш"
      generateProductItem({ productID: pizza1.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productID: pizza1.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productID: pizza1.id, pizzaType: 2, size: 40 }),

      // Пицца "Сырная"
      generateProductItem({ productID: pizza2.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productID: pizza2.id, pizzaType: 1, size: 30 }),
      generateProductItem({ productID: pizza2.id, pizzaType: 1, size: 40 }),
      generateProductItem({ productID: pizza2.id, pizzaType: 2, size: 20 }),
      generateProductItem({ productID: pizza2.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productID: pizza2.id, pizzaType: 2, size: 40 }),

      // Пицца "Чоризо фреш"
      generateProductItem({ productID: pizza3.id, pizzaType: 1, size: 20 }),
      generateProductItem({ productID: pizza3.id, pizzaType: 2, size: 30 }),
      generateProductItem({ productID: pizza3.id, pizzaType: 2, size: 40 }),

      // Остальные продукты
      generateProductItem({ productID: 1 }),
      generateProductItem({ productID: 2 }),
      generateProductItem({ productID: 3 }),
      generateProductItem({ productID: 4 }),
      generateProductItem({ productID: 5 }),
      generateProductItem({ productID: 6 }),
      generateProductItem({ productID: 7 }),
      generateProductItem({ productID: 8 }),
      generateProductItem({ productID: 9 }),
      generateProductItem({ productID: 10 }),
      generateProductItem({ productID: 11 }),
      generateProductItem({ productID: 12 }),
      generateProductItem({ productID: 13 }),
      generateProductItem({ productID: 14 }),
      generateProductItem({ productID: 15 }),
      generateProductItem({ productID: 16 }),
      generateProductItem({ productID: 17 }),
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userID: 1,
        totalAmount: 0,
        token: '11111',
      },
      {
        userID: 2,
        totalAmount: 0,
        token: '222222',
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemID: 1,
      cartID: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
