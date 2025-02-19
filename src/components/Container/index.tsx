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
  noBorderBottom = false,
  noBorderTop = false,
  children,
  theme = CONTAINER_THEMES.LIGHT,
  paddingSize = 'md',
}: ContainerProps) {
  const currentTheme = getThemeStyle(theme);
  const currentBorderStyle = getBorderStyle(noBorderBottom, noBorderTop);
  const paddingStyle =
    paddingSize === 'lg' ? styles.paddingLG : styles.paddingMD;

  return (
    <section
      className={`${styles.container} ${currentTheme} ${currentBorderStyle} ${paddingStyle}`}
    >
      {children}
    </section>
  );
}
