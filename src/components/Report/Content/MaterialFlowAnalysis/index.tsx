import { Flex } from 'antd';
import { Typography } from 'antd';
import Container from '@/components/Container';
const { Title, Text } = Typography;

import type { MaterialFlowAnalysisData } from '@/components/Report/types';

export default function MaterialFlowAnalysis({
    data,
}: {
    data: MaterialFlowAnalysisData;
}) {
    return (
        <Container>
            <Flex gap='var(--spacing-16)' vertical>
                <Title level={4}>{data?.title}</Title>
                {data?.description?.map((paragraph) => (
                    <Text className='tertiaryText' key={paragraph}>
                        {paragraph}
                    </Text>
                ))}
            </Flex>
        </Container>
    );
}
