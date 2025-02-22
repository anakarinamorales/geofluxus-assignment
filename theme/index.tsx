'use client';

import { ConfigProvider } from 'antd';

export default function withTheme(node: React.ReactNode) {
    return (
        <ConfigProvider
            theme={{
                token: {
                    borderRadius: 2,
                    colorBorder: 'var(--color-border)',
                    colorPrimary: 'var(--color-primary)',
                    colorText: 'var(--color-text-primary)',
                    colorTextDescription: 'var(--color-text-secondary)',
                    colorTextHeading: 'var(--color-text-heading)',
                    fontFamily: 'var(--font-roboto), sans-serif',
                    fontSize: 16,
                    fontSizeHeading1: 38,
                    fontSizeHeading2: 30,
                    fontSizeHeading3: 24,
                    fontSizeHeading4: 20,
                    fontSizeHeading5: 16,
                    lineHeightHeading1: 46 / 38,
                    lineHeightHeading2: 38 / 30,
                    lineHeightHeading3: 32 / 24,
                    lineHeightHeading4: 28 / 20,
                    lineHeightHeading5: 24 / 16,
                },
                components: {
                    Card: {
                        bodyPadding: 24,
                        bodyPaddingSM: 16,
                    },
                    Form: {
                        labelColor: 'var(--color-primary)',
                        labelFontSize: 16,
                    },
                    Layout: {
                        bodyBg: 'var(--color-background)',
                        headerBg: 'var(--color-white)',
                        headerColor: 'var(--color-text-heading)',
                        headerHeight: 'auto',
                        headerPadding: 'var(--spacing-16) var(--spacing-24)',
                        siderBg: 'var(--color-blue)',
                    },
                    Menu: {
                        darkItemBg: 'var(--color-blue)',
                    },
                    Select: {
                        activeBorderColor: 'var(--color-primary)',
                        activeOutlineColor:
                            '0px 0px 0px 2px var(--color-input-box-shadow)',
                        hoverBorderColor: 'var(--color-border)',
                        optionActiveBg: 'var(--color-highlight-primary)',
                        optionFontSize: 16,
                        optionPadding: 'var(--spacing-4) var(--spacing-12)',
                        optionSelectedBg: 'var(--color-highlight-primary)',
                        optionSelectedFontWeight: 'var(--font-weight-500)',
                    },
                    Table: {
                        cellFontSizeSM: 12,
                        cellPaddingBlockSM: 0,
                        cellPaddingInlineSM: 0,
                        headerBg: 'var(--color-fill-secondary)',
                        headerBorderRadius: 0,
                        headerColor: 'var(--color-text-heading)',
                        headerSplitColor: 'transparent',
                        selectionColumnWidth: 500,
                    },
                    Typography: {
                        titleMarginBottom: 0,
                        titleMarginTop: 0,
                    },
                },
            }}
        >
            {node}
        </ConfigProvider>
    );
}
