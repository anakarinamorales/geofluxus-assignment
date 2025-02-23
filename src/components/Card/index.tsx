import { Card } from 'antd';
import { CARD_THEMES } from '@/utils/constants';

import styles from './Card.module.css';

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
    theme = CARD_THEMES.GREY,
    ...props
}: {
    children: React.ReactNode;
    theme?: CARD_THEMES;
}) {
    const style = getThemeStyle(theme);

    return (
        <Card {...props} className={styles.customCard + ' ' + style}>
            {children}
        </Card>
    );
}
