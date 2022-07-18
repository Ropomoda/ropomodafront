import ShopLayout from '../components/layout/shopLayout';
import Carousel from '../components/carousel';

export default function Home() {
  return (
    <ShopLayout>
      <Carousel
        title="حراجی!"
        type='special'
        containerClassName="pt-12 pb-4"
        items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        colorHex="#2dcbb2"
      />

      <Carousel
        title="جدید‌ترین محصولات"
        containerClassName="pt-12 pb-4"
        items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        colorHex="#ffe25b"
        badgeText="جدید"
      />

      <Carousel
        title="تک سایزها"
        containerClassName="pt-12 pb-4"
        items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        colorHex="#F9AFEC"
        badgeText="تک سایز"
      />
    </ShopLayout>
  );
}