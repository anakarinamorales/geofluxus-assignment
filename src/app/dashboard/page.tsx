'use client';
import { useState } from 'react';
import {
    Col,
    Divider,
    Flex,
    Form,
    Layout,
    Menu,
    Row,
    Select,
    Typography,
} from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import Report from '@/components/Report';
import {
    menuItems,
    REPORT_TYPES,
    ReportFormValues,
    selectReportOptions,
} from '@/utils/constants';

const { Text, Title } = Typography;

import withTheme from '../../../theme';
import Card from 'antd/es/card/Card';
import Sider from 'antd/es/layout/Sider';
import Link from 'next/link';
import styles from './page.module.css';

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
            <Sider
                breakpoint='lg'
                collapsedWidth='0'
                width='var(--size-menu-width)'
            >
                <Menu
                    className={styles.menu}
                    items={menuItems}
                    mode='inline'
                    theme='dark'
                />
            </Sider>
            <Layout>
                <Header>
                    <Title level={1}>Reporting</Title>
                    <Divider />
                    <Link href='/'>&#8592; Terug naar reporting</Link>
                </Header>
                <Layout>
                    <Content>
                        <Row className={styles.main} wrap={false}>
                            <Col className={styles.customContent} span={16}>
                                <Flex
                                    gap='var(--spacing-8)'
                                    vertical
                                    component={Card}
                                >
                                    <Title level={2}>Bekijk rapport</Title>
                                    <Text className='primaryText'>
                                        Selecteer een rapport dat je wilt
                                        verkennen voor een dieper inzicht in het
                                        afvalbeheer van uw organisatie.
                                    </Text>
                                </Flex>
                                <Flex vertical component={Card}>
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
                                <Report
                                    type={currentReportType as REPORT_TYPES}
                                />
                            </Col>
                            <Col flex={1} span={8}>
                                <div className={styles.reportingSettings}>
                                    sider
                                </div>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Home;
