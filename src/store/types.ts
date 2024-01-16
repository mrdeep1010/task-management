// store/types.ts
export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
}

export interface AppState {
    tasks: Task[];
}

export type AppAction =
    | { type: 'ADD_TASK'; payload: Task }
    | { type: 'COMPLETE_TASK'; payload: number }
    | { type: 'DELETE_TASK'; payload: number };

