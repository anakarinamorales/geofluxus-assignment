import { Flex } from 'antd';
import { Typography } from 'antd';
import BigText from '@/components/BigText';
import Card from '@/components/Card';
import Container from '@/components/Container';
import type { TrendingAnalysis } from '@/components/Report/types';
const { Title, Text } = Typography;

export default function TrendInsights({ data }: { data: TrendingAnalysis }) {
    return (
        <Container>
            <Flex gap='var(--spacing-16)' vertical>
                <Title level={4}>{data?.title}</Title>
                <Text className='tertiaryText'>{data?.description}</Text>
                <Flex flex='0 0 50%' gap='var(--spacing-24)' justify='center'>
                    <Card>
                        <BigText>{data?.statistics?.average}%</BigText>
                        <Text>
                            Gemiddeld per jaar (sinds {data?.firstMeasureYear})
                        </Text>
                    </Card>
                    <Card>
                        <BigText>{data?.statistics?.['2022']?.q4}%</BigText>
                        <Text>In vergelijking met 2022 Q4</Text>
                    </Card>
                    <Card>
                        <BigText>
                            {data?.statistics?.renewableMaterialQtd}%
                        </BigText>
                        <Text>
                            van het afval bevat voornamelijk hernieuwbare
                            materialen
                        </Text>
                    </Card>
                </Flex>
            </Flex>
        </Container>
    );
}
