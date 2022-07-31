import { Button, Col, Row } from 'antd';
import ShopLayout from '../../components/layout/shopLayout';
import Basket from '../../components/cart';
import { connect } from 'react-redux';
import Link from 'next/link';



function Home({ account }) {
  return (
    <ShopLayout>
          <Basket />
    </ShopLayout>
  )
}


const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)