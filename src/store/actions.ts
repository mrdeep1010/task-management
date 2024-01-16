import { Task } from "./types";

// store/actions.ts
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (task: Task) => ({
    type: ADD_TASK,
    payload: task,
});

export const completeTask = (taskId: number) => ({
    type: COMPLETE_TASK,
    payload: taskId,
});

export const deleteTask = (taskId: number) => ({
    type: DELETE_TASK,
    payload: taskId,
});
