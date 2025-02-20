'use client';
import { useState } from 'react';
import { Flex, Form, Layout, Select, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Container from '@/components/Container';
import Report from '@/components/Report';
import {
    REPORT_TYPES,
    ReportFormValues,
    selectReportOptions,
} from '@/utils/constants';

const { Text, Title } = Typography;

import withTheme from '../../theme';

const Home = function Home() {
    const [form] = Form.useForm();
    const [currentReportType, setCurrentReportType] =
        useState<REPORT_TYPES | null>();
    const onFinish = (values: ReportFormValues) => {
        setCurrentReportType(values.reportType);
    };

    const handleChange = () => {
        form.submit(); // Manually triggers the form submission
    };

    return withTheme(
        <Layout>
            <Layout>
                <Content>
                    <Container noBorderBottom paddingSize='lg'>
                        <Flex gap='var(--spacing-8)' vertical>
                            <Title level={2}>Bekijk rapport</Title>
                            <Text className='primaryText'>
                                Selecteer een rapport dat je wilt verkennen voor
                                een dieper inzicht in het afvalbeheer van uw
                                organisatie.
                            </Text>
                        </Flex>
                    </Container>
                    <Container paddingSize='lg'>
                        <Flex vertical>
                            <Form
                                form={form}
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
                                        options={selectReportOptions}
                                        placeholder='Selecteer een rapporttype'
                                        size='large'
                                    />
                                </Form.Item>
                            </Form>
                        </Flex>
                    </Container>
                    <Report type={currentReportType as REPORT_TYPES} />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Home;
