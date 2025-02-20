import { Flex } from 'antd';
import { Typography } from 'antd';
import { ANALYSIS_TYPES, REPORT_TYPES } from '@/utils/constants';
import getReportData from '@/utils/api';
import MaterialFlowAnalysis from './MaterialFlowAnalysis';
import ProcessingEffectiveness from './ProcessingEffectiveness';
import TrendInsights from './TrendInsights';

import type {
    EffectivenessAnalysisData,
    MaterialFlowAnalysisData,
    ReportData,
    TrendingAnalysis,
} from '@/components/Report/types';
import { useEffect, useState } from 'react';

const { Paragraph, Title, Text } = Typography;

export default function Content({ type }: { type?: REPORT_TYPES }) {
    const [reportData, setReportData] = useState<ReportData>(
        () => ({} as ReportData)
    );

    const trendInsightsData = reportData?.analysis?.[
        ANALYSIS_TYPES.TRENDS
    ] as TrendingAnalysis;
    const benchmarkData = reportData?.analysis?.[
        ANALYSIS_TYPES.WASTE_PROCESSING_VS_NATIONAL
    ] as unknown as EffectivenessAnalysisData;
    const materialsData = reportData?.analysis?.[
        ANALYSIS_TYPES.MATERIALS
    ] as MaterialFlowAnalysisData;

    useEffect(() => {
        const data = getReportData(type);
        if (type) {
            setReportData(data);
        }
    }, [type]);

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
                        <Title level={4}>{reportData?.title} rapport</Title>
                        <Text className='secondaryText'>
                            {reportData?.description}
                        </Text>
                        <TrendInsights data={trendInsightsData} />
                        <ProcessingEffectiveness data={benchmarkData} />
                        <MaterialFlowAnalysis data={materialsData} />
                    </Flex>
                </>
            )}
        </>
    );
}
