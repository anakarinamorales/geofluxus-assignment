'use client';
import { Flex, Form, Layout, Select, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Container from '@/components/Container';
import Report from '@/components/Report';
import {
  REPORT_OPTS,
  ReportFormValues,
  reportOptions,
} from '@/utils/constants';

import withTheme from '../../theme';

const Home = function Home() {
  const { Title } = Typography;
  const [form] = Form.useForm();

  const onFinish = (values: ReportFormValues) => {
    alert(values.reportType);
  };

  const handleChange = () => {
    form.submit(); // Manually triggers the form submission
  };

  return withTheme(
    <Layout>
      <Layout>
        <Content>
          <Container noBorderBottom paddingSize='lg'>
            <Flex vertical>
              <Title level={2}>Bekijk rapport</Title>
              <p>
                Selecteer een rapport dat je wilt verkennen voor een dieper
                inzicht in het afvalbeheer van uw organisatie.
              </p>
            </Flex>
          </Container>
          <Container paddingSize='lg'>
            <Flex vertical>
              <Form
                form={form}
                key='report-form'
                layout='vertical'
                onFinish={onFinish}
              >
                <Form.Item
                  label='Rapporttype'
                  labelAlign='left'
                  name='reportType'
                >
                  <Select
                    onChange={handleChange}
                    options={reportOptions}
                    placeholder='Selecteer een rapporttype'
                    size='large'
                  />
                </Form.Item>
              </Form>
            </Flex>
          </Container>
          <Report type={REPORT_OPTS.AFVAL} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
