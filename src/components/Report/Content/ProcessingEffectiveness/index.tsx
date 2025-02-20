import { Flex, Table, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Container from '@/components/Container';
import type { TableColumnsType } from 'antd';
import type { EffectivenessAnalysisData } from '@/components/Report/types';

import styles from './ProcessingEffectiveness.module.css';

interface AnalysisDataType {
    average: number;
    best: number;
    id: string;
    key: React.Key;
    title: string;
    under: number;
    unknown: number;
}

export const analysisTablecolumns: TableColumnsType = [
    {
        dataIndex: 'title',
        title: 'Afvalsoort',
        width: '75%',
    },
    {
        dataIndex: 'best',
        title: 'Beter',
        width: '6.25%',
    },
    {
        dataIndex: 'average',
        title: 'Gemiddeld',
        width: '6.25%',
    },
    {
        dataIndex: 'under',
        title: 'Onder',
        width: '6.25%',
    },
    {
        dataIndex: 'unknown',
        title: 'Onbekend',
        width: '6.25%',
    },
];

export const dataSource = [
    {
        average: 0,
        best: 91.5,
        key: '1',
        title: '080111 -Afval van verf en lak dat organische oplosmiddelen of andere gevaarlijke stoffen bevat',
        under: 0,
        unknown: 8.5,
    },
    {
        average: 0,
        best: 100,
        key: '2',
        title: '080314 -Inktslib dat gevaarlijke stoffen bevat',
        under: 0,
        unknown: 0,
    },
] as AnalysisDataType[];

const { Title, Text } = Typography;

export default function ProcessingEffectiveness({
    data,
}: {
    data: EffectivenessAnalysisData;
}) {
    return (
        <Container>
            <Flex gap='var(--spacing-16)' vertical>
                <Title level={4}>{data?.title}</Title>
                <Text className='tertiaryText'>{data?.description}</Text>
                <Flex className={styles.innerContent} vertical>
                    <Header className={styles.secondary}>
                        {`${data?.analysis?.['08'].id} - ${data?.analysis?.['08'].title}`}
                    </Header>
                    <Table
                        columns={analysisTablecolumns}
                        dataSource={dataSource}
                        pagination={false}
                        size='small'
                        className={styles.borderlessTable}
                    />
                </Flex>
            </Flex>
        </Container>
    );
}
