import ShopLayout from '../components/layout/shopLayout';
import Collection from '../components/collection';

export default function Home() {
  return (
    <ShopLayout>
      <Collection
        title="حراجی!"
        type='special'
        containerClassName="pt-12 pb-4"
        items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        colorHex="#2dcbb2"
      />

      <Collection
        title="جدید‌ترین محصولات"
        containerClassName="pt-12 pb-4"
        items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        colorHex="#ffe25b"
        badgeText="جدید"
      />

      <Collection
        title="تک سایزها"
        containerClassName="pt-12 pb-4"
        items={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        colorHex="#F9AFEC"
        badgeText="تک سایز"
      />
    </ShopLayout>
  );
}