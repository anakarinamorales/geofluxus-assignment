import { Flex } from 'antd';
import { Typography } from 'antd';
import Container from '@/components/Container';
import { CONTAINER_THEMES } from '@/utils/constants';

export default function Content({ type }: { type?: string }) {
  const { Paragraph, Title, Text } = Typography;

  return (
    <>
      {!type && (
        <Paragraph type='secondary'>
          Er zijn momenteel geen rapporten geselecteerd. Kies een rapport om de
          details te bekijken.
        </Paragraph>
      )}

      {type && (
        <Flex gap='var(--spacing-16)' vertical>
          <Title level={4}>{type} rapport</Title>
          <Text>
            In dit afval rapport vindt u een overzicht van alle afvalstromen, de
            bijbehorende hoeveelheden afval en de gebruikte verwerkingsmethodes.
            Daarnaast wordt aangegeven wie het afval heeft verwerkt en welke
            materialen er in het afval aanwezig zijn.
          </Text>
          <Container>
            <Flex gap='var(--spacing-16)' vertical>
              <Title level={4}>Trends afvalproductie</Title>
              <Text>
                Sinds begin 2016 stijgt de afvalproductie van uw organisatie
                gemiddeld met 5,14% per jaar. Bovendien is er in Q4 2021 sinds
                vorig kwartaal een vermindering van 51,82% te zien in
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
        </Flex>
      )}
    </>
  );
}
