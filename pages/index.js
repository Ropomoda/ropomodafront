import ShopLayout from '../Components/layout/shopLayout';
import Carousel from '../Components/carousel';

export default function Home() {
  return (
    <ShopLayout>
      <Carousel
        title="حراجی!"
        type='special'
        containerClassName="pt-12 pb-4"
        items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]}
      />

      <Carousel
        title="جدید‌ترین محصولات"
        containerClassName="pt-12 pb-4"
        items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]}
      />

      <Carousel
        title="تک سایزها"
        containerClassName="pt-12 pb-4"
        items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]}
      />

    </ShopLayout>
  );
}