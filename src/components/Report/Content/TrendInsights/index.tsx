import { Flex } from 'antd';
import { Typography } from 'antd';
import Container from '@/components/Container';
import { CONTAINER_THEMES } from '@/utils/constants';
const { Title, Text } = Typography;

export default function TrendInsights() {
    return (
        <Container>
            <Flex gap='var(--spacing-16)' vertical>
                <Title level={4}>Trends afvalproductie</Title>
                <Text className='tertiaryText'>
                    Sinds begin 2016 stijgt de afvalproductie van uw organisatie
                    gemiddeld met 5,14% per jaar. Bovendien is er in Q4 2021
                    sinds vorig kwartaal een vermindering van 51,82% te zien in
                    vergelijking met hetzelfde kwartaal vorig jaar.
                </Text>
                <Flex>
                    <Container theme={CONTAINER_THEMES.GREY2}>
                        <Title level={1}>-1,1%</Title>
                        <Text>Gemiddeld per jaar (sinds 2018)</Text>
                    </Container>
                    <Container theme={CONTAINER_THEMES.GREY2}>
                        <Title level={1}>-1,1%</Title>
                        <Text>Gemiddeld per jaar (sinds 2018)</Text>
                    </Container>
                    <Container theme={CONTAINER_THEMES.GREY2}>
                        <Title level={1}>-1,1%</Title>
                        <Text>Gemiddeld per jaar (sinds 2018)</Text>
                    </Container>
                </Flex>
            </Flex>
        </Container>
    );
}
