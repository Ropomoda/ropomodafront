import {
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserOutlined,
  SettingOutlined,
  OrderedListOutlined,
  EyeOutlined
} from '@ant-design/icons';
import { Button, Card, Divider, Menu, PageHeader } from 'antd';
import { useState } from 'react';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('داشبورد', '1', <PieChartOutlined />),
  getItem('محصولات', '2', <DesktopOutlined />),
  getItem('فاکتور ها', '3', <OrderedListOutlined />),
  getItem('کاربران', '4', <UserOutlined />),
  getItem('تنظیمات', '5', <SettingOutlined />),
  getItem(<a href="/" target="_blank" rel="noopener noreferrer">
    مشاهده سایت
  </a>, '6', <EyeOutlined />),
];

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div
        style={{
          width: 256,
        }}
      >
        <Button
          type="ghost"
          onClick={toggleCollapsed}

        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
    </div>
  );
};

export default Home;