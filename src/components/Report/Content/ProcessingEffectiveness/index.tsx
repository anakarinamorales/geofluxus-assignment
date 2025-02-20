import { Flex, Table } from 'antd';
import { Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Container from '@/components/Container';
import type { TableColumnsType } from 'antd';

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

export default function ProcessingEffectiveness() {
    return (
        <Container>
            <Flex gap='var(--spacing-16)' vertical>
                <Title level={4}>
                    Afvalverwerking in vergelijking met landelijke praktijken
                </Title>
                <Text className='tertiaryText'>
                    In de onderstaande tabel analyseren we de toegepaste
                    verwerkingsmethoden per afvalsoort en vergelijken we deze
                    met de meest gebruikte methoden op nationaal niveau. Hierbij
                    categoriseren we elke verwerkingsmethode als beter, gelijk
                    aan, of minder effectief dan de landelijke standaard. Indien
                    de verwerkingsmethode onbekend is, wordt deze apart vermeld.
                    Dit biedt inzicht in hoe onze verwerkingspraktijken zich
                    verhouden tot de gangbare methoden en waar mogelijke
                    verbeterpunten liggen.
                </Text>
                <Flex className={styles.innerContent} vertical>
                    <Header className={styles.secondary}>
                        08 - Afval van bereiding, formulering, levering en
                        gebruik (BFLG) van coatings (verf, lak en email), lijm,
                        kit en drukinkt
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
