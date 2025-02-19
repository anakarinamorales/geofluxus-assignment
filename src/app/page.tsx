'use client';
import { Flex, Form, Layout, Select } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Menu from 'antd/es/menu/menu';
import { Content, Header } from 'antd/es/layout/layout';
import { ItemType } from 'antd/es/menu/interface';
import { Typography } from 'antd';
import DashboardSection from '@/components/DashboardSection';

import withTheme from '../../theme';

// mock menu items
const menuItems = [
  { label: 'GEOFLUXUS' },
  { label: 'Home' },
  { label: 'Reporting' },
  { label: 'Dashboard' },
  { label: 'Kaart' },
  { label: 'Verwerkingsmethoden' },
  { label: 'Alternatieve verwerkers' },
  { label: 'Plan nieuwe stromen' },
  { label: 'Data' },
  { label: 'View beheer' },
  { label: 'Company' },
  { label: 'Taal' },
  { label: 'Name Lastname' },
] as ItemType[];

const reportOptions = [
  { value: 'afval', label: 'Afval rapport' },
  { value: 'benchmark', label: 'Benchmark rapport' },
  { value: 'csrd', label: 'CSRD rapport' },
];

const Home = function Home() {
  const { Paragraph, Title } = Typography;

  return withTheme(
    <Layout>
      <Sider breakpoint='lg' collapsedWidth='0' style={{ height: '100vh' }}>
        <Menu theme='dark' mode='inline' items={menuItems} />
      </Sider>

      <Layout>
        <Header>
          <Title level={1}>Reporting</Title>
        </Header>
        <Content>
          <DashboardSection>
            <Flex vertical gap='8px'>
              <Title level={2}>Bekijk rapport</Title>
              <p>
                Selecteer een rapport dat je wilt verkennen voor een dieper
                inzicht in het afvalbeheer van uw organisatie.
              </p>
            </Flex>
          </DashboardSection>
          <DashboardSection>
            <Flex vertical>
              <Form layout='vertical'>
                <Form.Item label='Rapporttype' labelAlign='left'>
                  <Select
                    placeholder='Selecteer een rapporttype'
                    options={reportOptions}
                    size='large'
                    onSelect={(value: string) => {
                      console.log(value);
                    }}
                  />
                </Form.Item>
              </Form>
            </Flex>
          </DashboardSection>
          <DashboardSection theme="grey1">
            <Flex vertical>
              <Paragraph type='secondary'>
                Er zijn momenteel geen rapporten geselecteerd. Kies een rapport
                om de details te bekijken.
              </Paragraph>
            </Flex>
          </DashboardSection>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
