import ShopLayout from '../components/layout/shopLayout';
import Collection from '../components/collection';
import { NextPage } from 'next';

interface Props {

}

const Home: NextPage<Props> = () => {
  return (
    <ShopLayout>
      <Collection
        title="حراجی!"
        type='special'
        containerClassName="pt-12 pb-4"
        colorHex="#2dcbb2"
      />

      <Collection
        title="جدید‌ترین محصولات"
        containerClassName="pt-12 pb-4"
        colorHex="#ffe25b"
        badgeText="جدید"
      />

      <Collection
        title="تک سایزها"
        containerClassName="pt-12 pb-4"
        colorHex="#F9AFEC"
        badgeText="تک سایز"
      />
    </ShopLayout>
  );
}
export default Home;