
// WorkFlow Items Interface
export interface WorkflowItemsInterface {
    label?: string;
    percentage?: number;
    all?: boolean;
    checkboxes?: WorkflowCheckboxInterface[];
    content?: any;
};

// WorkFlow Checkbox Interface
export interface WorkflowCheckboxInterface {
    key: string;
    value: number;
    selected: boolean;
}
