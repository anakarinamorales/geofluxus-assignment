import { ANALYSIS_TYPES, REPORT_TYPES } from '@/utils/constants';

type StatisticsByYear = {
    [year: string | number]: { q1: number; q2: number; q3: number; q4: number };
};

export type TrendingAnalysis = {
    description: string;
    firstMeasureYear: string;
    statistics: StatisticsByYear & {
        average: number;
        renewableMaterialQtd: number;
    };
    title: string;
};

export type EffectivenessAnalysisData = {
    analysis: Record<
        string,
        {
            data: Record<
                string,
                {
                    average: number;
                    best: number;
                    under: number;
                    unknown: number;
                }
            >;
            id: string;
            title: string;
        }
    >;
    description: string;
    title: string;
};

export type MaterialFlowAnalysisData = {
    description: string[];
    title: string;
};

export type ProcessingEffectivenessAnalysis = {
    analysis: Record<string, EffectivenessAnalysisData>;
    description: string;
    firstMeasureYear: string;
    title: string;
};

export type ReportData = {
    analysis: Record<
        ANALYSIS_TYPES,
        | MaterialFlowAnalysisData
        | ProcessingEffectivenessAnalysis
        | TrendingAnalysis
    >;
    description: string;
    title: string;
};

export type Reports = Record<REPORT_TYPES, ReportData>;
