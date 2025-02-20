import { CONTAINER_THEMES } from '@/utils/constants';
import { ContainerProps, ContainerThemeOptions } from './types';

import styles from './Container.module.css';

export const getThemeStyle = (theme: ContainerThemeOptions): string => {
    switch (theme) {
        case CONTAINER_THEMES.GREY1:
            return styles.greyPrimary;
        case CONTAINER_THEMES.GREY2:
            return styles.greySecondary;
        case CONTAINER_THEMES.GREY3:
            return styles.greyTertiary;
        default:
            return styles.light;
    }
};

export const getBorderStyle = (
    noBorderBottom: boolean,
    noBorderTop: boolean
): string => {
    let style = '';

    if (noBorderBottom) {
        style = styles.noBorderBottom;
    }

    if (noBorderTop) {
        style = style + styles.noBorderTop;
    }

    return style;
};

export default function Container({
    children,
    noBorderBottom = false,
    noBorderTop = false,
    noMargin = false,
    paddingSize = 'md',
    theme = CONTAINER_THEMES.LIGHT,
}: ContainerProps) {
    const currentTheme = getThemeStyle(theme);
    const currentBorderStyle = getBorderStyle(noBorderBottom, noBorderTop);
    const paddingStyle =
        paddingSize === 'lg' ? styles.paddingLG : styles.paddingMD;
    const marginStyle = noMargin ? styles.noMargin : '';

    return (
        <section
            className={`${styles.container} ${currentTheme} ${currentBorderStyle} ${paddingStyle} ${marginStyle}`}
        >
            {children}
        </section>
    );
}
