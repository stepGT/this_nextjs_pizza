import { Container, Filters, ProductCard, ProductsGroupList, Title } from '@/components/shared';
import { TopBar } from '@/components/shared/top-bar';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    items: [{ price: 299 }],
                  },
                  {
                    id: 2,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    items: [{ price: 299 }],
                  },
                  {
                    id: 3,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    items: [{ price: 299 }],
                  },
                  {
                    id: 4,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    items: [{ price: 299 }],
                  },
                  {
                    id: 5,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    items: [{ price: 299 }],
                  },
                  {
                    id: 6,
                    name: 'Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif',
                    items: [{ price: 299 }],
                  },
                ]}
                categoryID={1}
              />

              <ProductsGroupList
                title="Завтрак"
                items={[
                  {
                    id: 1,
                    name: 'Додстер с ветчиной',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7970259D888E98B6407EE6B994D9.avif',
                    items: [{ price: 209 }],
                  },
                  {
                    id: 2,
                    name: 'Додстер с ветчиной',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7970259D888E98B6407EE6B994D9.avif',
                    items: [{ price: 209 }],
                  },
                  {
                    id: 3,
                    name: 'Додстер с ветчиной',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7970259D888E98B6407EE6B994D9.avif',
                    items: [{ price: 209 }],
                  },
                  {
                    id: 4,
                    name: 'Додстер с ветчиной',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7970259D888E98B6407EE6B994D9.avif',
                    items: [{ price: 209 }],
                  },
                  {
                    id: 5,
                    name: 'Додстер с ветчиной',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7970259D888E98B6407EE6B994D9.avif',
                    items: [{ price: 209 }],
                  },
                  {
                    id: 6,
                    name: 'Додстер с ветчиной',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:584x584/11EE7970259D888E98B6407EE6B994D9.avif',
                    items: [{ price: 209 }],
                  },
                ]}
                categoryID={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
