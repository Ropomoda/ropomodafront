import { Button, Space, DatePicker, Card } from 'antd';

export default function Home() {
  const onChange = () => { };
  return (
    <div style={{ padding: 100 }}>
      <Button type="primary">افزودن به سبد خرید</Button>
      <Button type="ghost">Ghost Button</Button>
      <DatePicker onChange={onChange} />
    </div>
  );
}