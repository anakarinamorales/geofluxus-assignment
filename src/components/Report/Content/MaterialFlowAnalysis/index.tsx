import { Flex } from 'antd';
import { Typography } from 'antd';
import Container from '@/components/Container';
const { Title, Text } = Typography;

export default function MaterialFlowAnalysis() {
    return (
        <Container>
            <Flex gap='var(--spacing-16)' vertical>
                <Title level={4}>Materialen</Title>
                <Text className='tertiaryText'>
                    De Rijksoverheid heeft plannen voor de transitie naar een
                    circulaire economie geformuleerd in 5 transitieagenda&apos;s
                    (TA&apos;s) die verschillende economische sectoren en ketens
                    behelzen: 1) Biomassa en Voedsel, 2) Kunststof, 3)
                    Maakindustrie, 4) Bouw, 5) Consumptiegoederen.
                </Text>
                <Text className='tertiaryText'>
                    In vergelijking met 2019 zijn de afvalstromen in de TAs
                    Biomassa & Voedsel en Consumptiegoederen licht gedaald,
                    daarentegen zijn de TAs &apos;onbekend&apos; en Bouw
                    toegenomen. Hoewel de biomassa- en voedselsectoren klein
                    lijken in vergelijking met de anderen, genereren ze
                    aanzienlijke negatieve effecten op het gebied van
                    landgebruik, broeikasgasemissies en degradatie van land en
                    water.
                </Text>
            </Flex>
        </Container>
    );
}
