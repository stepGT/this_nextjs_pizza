import { Container, Filters, ProductCard, Title } from '@/components/shared';
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
              <ProductCard id={0} name='Карбонара' price={500} imageUrl='https://media.dodostatic.net/image/r:292x292/11EE7D61389AB51A8F648A0DBA5B1689.jpg' />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
