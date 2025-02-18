import Image from "next/image";
import {
  Button,
  Space,
  Divider,
} from 'antd';

const Home = function Home() {
  return (
    <>
      <section style={{ marginBottom:40, marginTop:48, padding:100, textAlign:'center' }}>
        <Space align='start'>
          <Image
            alt='Ant Design'
            height={40}
            src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            width={40}
          />
          <h2 style={{ marginBottom: 0 }}>
            Ant Design (Without Sub Components)
          </h2>
        </Space>
        <Divider style={{ marginBottom: 60 }}>Divider</Divider>
        <Button type='primary' block href='/with-sub-components'>With Sub Components Page</Button>
      </section>
    </>
  );
}

export default Home;
