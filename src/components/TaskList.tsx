// components/TaskList.tsx
import React from 'react';
import { List, ListItem, ListItemText, Checkbox, IconButton, Typography, Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { AppState, Task } from '../store/types';
import { completeTask, deleteTask } from '../store/actions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showAlert } from '../Common/sweetalert2';

interface TaskListProps {
    tasks: Task[];
    onTaskComplete: (taskId: number) => void;
    onDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskComplete, onDeleteTask }) => {
    const navigate = useNavigate();
    const addTask = () => {
        navigate('add-task');
    }

    const deletes = (id: any) => {
        onDeleteTask(id);
        showAlert("Delete successfully");
    }
    return (
        <div>
            {tasks.length === 0 ?
                (
                    <div className="no-data-container" >
                        <Grid container direction='column' alignItems='center' marginTop='200px' justifyContent='center'>
                            <Typography variant="h6" align="center">
                                No tasks to display
                            </Typography>
                            <Button variant="contained" style={{ justifyContent: 'center', justifyItems: 'center' }} color="primary" onClick={addTask}>
                                Add Task
                            </Button>
                        </Grid>
                    </div>
                ) : (
                    <List>
                        {tasks.map((task) => (
                            <ListItem key={task.id}>
                                <Checkbox
                                    checked={task.completed}
                                    onChange={() => onTaskComplete(task.id)}
                                    color="primary" />
                                <ListItemText primary={task.title} secondary={task.description} />
                                <IconButton onClick={() => deletes(task.id)} edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItem>
                        ))}
                    </List>
                )}
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    tasks: state.tasks,
});

const mapDispatchToProps = {
    onTaskComplete: completeTask,
    onDeleteTask: deleteTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
