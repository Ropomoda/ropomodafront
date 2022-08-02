import { DotChartOutlined } from "@ant-design/icons"
import { Avatar, Card, Skeleton, Space } from "antd"
import Image from "next/image"
import { getS3Image } from "../../utils/utils"

function Home() {
  return (<div className="ml-3">
    <Card bordered={false}>
      <div className="w-full h-40 flex justify-center items-center bg-gray-100 rounded-xl mb-2">
        <Image className="opacity-50" width={50} height={50} src={getS3Image("logo-black-white.png")} alt="ropomoda logo loading" />
      </div>
      <div className="mt-4">
        <Skeleton paragraph={false} loading active />
        <Skeleton paragraph={false} loading active />
      </div>
    </Card>
  </div>
  )
}

export default Home