import {
  ISOCodeEnum,
  ReportStatusEnum,
  DealTypeEnum,
} from 'src/app/core/infrastructure/enums';

export interface IReport {
  dealId: number;
  dealType: DealTypeEnum;
  participant: string;
  partner: string;
  isocode: ISOCodeEnum;
  volume: number;
  rate: number;
  dealDate: string;
  calculationDate: string;
  status: ReportStatusEnum;
}
