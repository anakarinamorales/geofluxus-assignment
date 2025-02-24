import { Card } from 'antd';
import { CARD_THEMES } from '@/utils/constants';

import styles from './Card.module.css';
import { CardSize } from 'antd/es/card/Card';

const getThemeStyle = (theme: CARD_THEMES) => {
    switch (theme) {
        case CARD_THEMES.GREY:
            return styles.grey;
        default:
            return styles.default;
    }
};

export default function CustomCard({
    children,
    size = 'default',
    theme = CARD_THEMES.GREY,
    ...props
}: {
    children: React.ReactNode;
    size?: CardSize & 'large';
    theme?: CARD_THEMES;
}) {
    const style = getThemeStyle(theme);

    return (
        <Card
            {...props}
            className={styles.customCard + ' ' + style + ' ' + styles.large}
            size={size}
        >
            {children}
        </Card>
    );
}
