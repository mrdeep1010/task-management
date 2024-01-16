// store/reducer.ts
import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from './actions';
import { AppState } from './types';

const initialState: AppState = {
    tasks: [],
};

const reducer = (state = initialState, action: any): AppState => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        case COMPLETE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                ),
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;
