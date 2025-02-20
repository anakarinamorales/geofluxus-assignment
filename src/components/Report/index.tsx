import { Flex } from 'antd';
import Container from '@/components/Container';
import { CONTAINER_THEMES, REPORT_OPTS } from '@/utils/constants';
import Content from './Content';

export default function Report({ type }: { type?: REPORT_OPTS }) {
    return (
        <Container theme={CONTAINER_THEMES.GREY1} noBorderTop paddingSize='lg'>
            <Flex gap='var(--spacing-24)' vertical>
                <Content type={type} />
            </Flex>
        </Container>
    );
}
