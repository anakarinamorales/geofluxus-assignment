import { CONTAINER_THEMES } from '@/utils/constants';

export type ContainerThemeOptions = CONTAINER_THEMES;
type ContainerPaddingSizesOptions = 'md' | 'lg';

export type ContainerProps = {
    children: React.ReactNode;
    noBorderBottom?: boolean;
    noBorderTop?: boolean;
    noMargin?: boolean;
    paddingSize?: ContainerPaddingSizesOptions;
    theme?: ContainerThemeOptions;
};
