import { Flex } from 'antd';
import { Typography } from 'antd';
import TrendInsights from './TrendInsights';
import ProcessingEffectiveness from './ProcessingEffectiveness';
import MaterialFlowAnalysis from './MaterialFlowAnalysis';
const { Paragraph, Title, Text } = Typography;

export default function Content({ type }: { type?: string }) {
    return (
        <>
            {!type && (
                <Paragraph type='secondary'>
                    Er zijn momenteel geen rapporten geselecteerd. Kies een
                    rapport om de details te bekijken.
                </Paragraph>
            )}

            {type && (
                <>
                    <Flex gap='var(--spacing-16)' vertical>
                        <Title level={4}>{type} rapport</Title>
                        <Text className='secondaryText'>
                            In dit afval rapport vindt u een overzicht van alle
                            afvalstromen, de bijbehorende hoeveelheden afval en
                            de gebruikte verwerkingsmethodes. Daarnaast wordt
                            aangegeven wie het afval heeft verwerkt en welke
                            materialen er in het afval aanwezig zijn.
                        </Text>
                        <TrendInsights />
                        <ProcessingEffectiveness />
                        <MaterialFlowAnalysis />
                    </Flex>
                </>
            )}
        </>
    );
}
