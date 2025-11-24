export interface PropertyDetails {
  postcode: string;
  bedrooms: string;
  propertyType: string;
  condition: string;
  email: string;
  phone: string;
}

export interface MarketReportData {
  summary: string;
  traditionalVsCash: {
    pros: string[];
    cons: string[];
  };
  estimatedTimeOnMarket: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AppView {
  HOME = 'HOME',
  VALUATION_FORM = 'VALUATION_FORM',
  REPORT = 'REPORT',
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}