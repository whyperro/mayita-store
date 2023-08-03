import { getBillboards } from "@/actions/get-billboards";
import { getProducts } from "@/actions/get-products";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import { Container } from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("7a05fa15-5169-4490-9a80-2bd50cda8c3d");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-6 px-4 s:px-6 lg:px-8">
          <ProductList title="¡Últimos productos!" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
