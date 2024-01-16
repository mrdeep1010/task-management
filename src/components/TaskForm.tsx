// components/TaskForm.tsx
import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { Task } from '../store/types';
import { addTask } from '../store/actions';
import { connect } from 'react-redux';
import { showAlert } from '../Common/sweetalert2';
import { useNavigate } from 'react-router-dom';

interface TaskFormProps {
    onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const navigate = useNavigate();

    const handleAddTask = () => {
        onAddTask({
            id: Date.now(),
            title,
            description,
            dueDate,
            completed: false,
        });
        showAlert("Save successfully");

        setTitle('');
        setDescription('');
        setDueDate('');
        navigate('/');
    };

    return (
        <Grid container style={{ marginTop: '20px' }} spacing={2}>
            <Grid item xs={6}>
                <TextField
                    label="Title"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Description"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <TextField
                    type="date"
                    fullWidth
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="primary" onClick={handleAddTask}>
                    Add Task
                </Button>
            </Grid>
        </Grid>
    );
};

const mapDispatchToProps = {
    onAddTask: addTask,
};

export default connect(null, mapDispatchToProps)(TaskForm);
