// WF Interface
export interface WFInterface {
    buckets: WFBucketsInterface[],
    buttons: WFButtonsInterface[];
};

// WF Buckets Interface
export interface WFBucketsInterface {
    id: string;
    label?: string;
    percentage?: number;
    checkboxes?: WFBucketCheckboxInterface[];
    content?: any;
};

// WF Bucket Checkbox Interface
export interface WFBucketCheckboxInterface {
    key: string;
    value: number;
    selected: boolean;
}

// WF Buttons Interface
export interface WFButtonsInterface {
    id: string;
    label: string;
    dependsOnBucket: string;
}
