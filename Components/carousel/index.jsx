import { Card } from "antd"
import styles from './styles.module.scss';

const Home = ({ children, containerClassName }) => {
  return (
    <div className={`container mx-auto ${containerClassName}`}>
      <Card className={`${styles["carousel-wrapper"]}`}>
        <div className="flex flex-row">
          {children}
        </div>
      </Card>
    </div>
  )
}

export default Home