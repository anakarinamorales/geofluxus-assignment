// Since the current page uses sub-components,
// the use of sub-components in non-client components
// is not currently supported in the app router mode of next.js.
// So we need to add "use client";
// Markers. If the component you use in your page does not contain sub-components such as Select.Option,
// you do not need to add this tag to the page.
// More about without sub-components example see: src/app/page.tsx
'use client';

import Image from 'next/image';
import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
} from 'antd';
import withTheme from '../../../theme';

const { Option } = Select;
const { Title } = Typography;

const Home = function Home() {
  return (
    <>
      <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
        <Space align='start'>
          <Image
            alt='Ant Design'
            height={40}
            src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
            width={40}
          />
          <Title level={2} style={{ marginBottom: 0 }}>
            Ant Design (With Sub Components)
          </Title>
        </Space>
      </section>
      <Divider style={{ marginBottom: 60 }}>Form</Divider>
      <Form labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Form.Item label='numberInput'>
          <InputNumber min={1} max={10} defaultValue={3} />
          <span className='ant-form-text'> Machines </span>
          <a href='https://ant.design'>Link text</a>
        </Form.Item>
        <Form.Item label='switchInput'>
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label='sliderInputBar'>
          <Slider defaultValue={70} />
        </Form.Item>
        <Form.Item label='selectInput'>
          <Select defaultValue='lucy' style={{ width: 192 }}>
            <Option value='jack'>jack</Option>
            <Option value='lucy'>lucy</Option>
            <Option value='disabled' disabled>
              disabled
            </Option>
            <Option value='yiminghe'>yiminghe</Option>
          </Select>
        </Form.Item>
        <Form.Item label='dateInput'>
          <DatePicker />
        </Form.Item>
        <Form.Item label='dateRangeInput'>
          <DatePicker.RangePicker />
        </Form.Item>
        <Form.Item label='ratingInput'>
          <Rate defaultValue={5} />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8, offset: 8 }}>
          <Space>
            <Button type='primary' htmlType='submit'>
              Submit
            </Button>
            <Button>Cancel</Button>
            <Button ghost href='/'>
              Back
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
};

const HomePage = () => {
  return withTheme(<Home />);
};

export default HomePage;
