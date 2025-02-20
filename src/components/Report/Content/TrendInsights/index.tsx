import { Flex } from 'antd';
import { Typography } from 'antd';
import Container from '@/components/Container';
import { CONTAINER_THEMES } from '@/utils/constants';
import type { TrendingAnalysis } from '@/components/Report/types';
const { Title, Text } = Typography;

export default function TrendInsights({ data }: { data: TrendingAnalysis }) {
    return (
        <Container>
            <Flex gap='var(--spacing-16)' vertical>
                <Title level={4}>{data?.title}</Title>
                <Text className='tertiaryText'>{data?.description}</Text>
                <Flex gap='var(--spacing-24)'>
                    <Container theme={CONTAINER_THEMES.GREY2} noMargin>
                        <Title level={1}>{data?.statistics?.average}%</Title>
                        <Text>
                            Gemiddeld per jaar (sinds {data?.firstMeasureYear})
                        </Text>
                    </Container>
                    <Container theme={CONTAINER_THEMES.GREY2} noMargin>
                        <Title level={1}>
                            {data?.statistics?.['2022']?.q4}%
                        </Title>
                        <Text>In vergelijking met 2022 Q4</Text>
                    </Container>
                    <Container theme={CONTAINER_THEMES.GREY2} noMargin>
                        <Title level={1}>
                            {data?.statistics?.renewableMaterialQtd}%
                        </Title>
                        <Text>
                            van het afval bevat voornamelijk hernieuwbare
                            materialen
                        </Text>
                    </Container>
                </Flex>
            </Flex>
        </Container>
    );
}
