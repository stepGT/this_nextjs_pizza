import { notFound } from 'next/navigation';
import { prisma } from '../../../../prisma/prisma-client';
import { Container, ProductImage, Title, GroupVariants } from '@/components/shared';

export default async function ProductPage({ params: { id } }: { params: { id: string } }) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
      category: {
        include: {
          products: {
            include: {
              items: true,
            },
          },
        },
      },
      items: true,
    },
  });

  if (!product) return notFound();

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <ProductImage size={40} imageUrl={product.imageUrl} />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <Title text={product.name} size="md" className="font-extrabold mb-1" />
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quaerat explicabo nostrum
            accusamus quae nihil eaque sunt optio. Eos, rem! Ipsam sequi aliquam aspernatur ad
            tempora similique beatae voluptatum cum.
          </p>
          <GroupVariants
            value="2"
            items={[
              {
                name: 'Маленькая',
                value: '1',
              },
              {
                name: 'Средняя',
                value: '2',
              },
              {
                name: 'Большая',
                value: '3',
              },
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
