export interface OperationData {
    clientId: number;
    isConfirmed: boolean;
    isFinished: boolean;
    name: string;
    operationCode: string;
    requestId: number;
    startDate: Date;
    stepId: number;
    stepParams: StepParam[];
  }
  export interface StepParam {
    identifier: string;
    value: string | null;
    name: string;
    requirements: Requirement;
    type: string;
    values: string[];
  }
  
  export interface Requirement {
    mask: string | null;
    max: number | null;
    min: number | null;
    required: boolean;
  }
    