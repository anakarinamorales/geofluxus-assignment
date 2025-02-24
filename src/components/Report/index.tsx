import { Flex, Card } from 'antd';
import { REPORT_TYPES } from '@/utils/constants';
import Content from './Content';

export default function Report({ type }: { type?: REPORT_TYPES }) {
    return (
        <Flex
            align='center'
            component={Card}
            flex='1 0 100%'
            gap='var(--spacing-24)'
            justify='center'
            vertical
        >
            <Content type={type} />
        </Flex>
    );
}
