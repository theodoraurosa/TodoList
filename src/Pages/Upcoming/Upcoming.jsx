
import React, { useEffect, useState } from "react";
import "./Upcoming.css"

import axios from "axios";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InputAdornment from '@mui/material/InputAdornment';
import Grid from '@mui/material/Grid2';
import { CgSearch, CgFormatJustify, CgChevronDoubleRight, CgMenuBoxed ,  CgAlbum ,  CgFormatCenter,  CgAdd } from "react-icons/cg";
import {  FaSignOutAlt } from "react-icons/fa";
import { BiCalendarEvent, BiTask } from "react-icons/bi";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';

const Upcoming = () => {
  const [tasksWeek, setTasksWeek] = useState([])
  const [taskstoday, setTasksToday] = useState([])
  const [tasksTomorrow, setTasksTomorrow] = useState([])
  const [texto, setTexto] = useState('');
  const [textoTomorrow, setTextoTomorrow] = useState('');
  const [textoWeek, setTextoWeek] = useState('');

    const deleteTaskToday = async (id)=>{
      await deleteTaskAPI(id)
      setTasksToday((prevTasks) => prevTasks.filter(task => task.id !== id))
    }
    const deleteTaskTomorrow = async (id)=>{
      await deleteTaskAPI(id)
      setTasksTomorrow((prevTasks) => prevTasks.filter(task => task.id !== id))
    }
    const deleteTaskWeek = async (id)=>{
      await deleteTaskAPI(id)
      setTasksWeek((prevTasks) => prevTasks.filter(task => task.id !== id))
    }

    const handleChangeWeel = (event) => {
        setTextoWeek(event.target.value);
    };
    const handleChangeToday = (event) => {
        setTexto(event.target.value);
    };
    const handleChangeTomorrow = (event) => {
        setTextoTomorrow(event.target.value);
    };

    const handleKeyPressToday = (event) => {
        if (event.key === 'Enter') {
            // Chamar a API quando a tecla Enter for pressionada
            enviarTextoParaAPIToday(texto);
            setTexto(''); // Limpar o campo após o envio
            console.log("TEXTO ENVIADO");
            
        }
    };
    const handleKeyPressTomorrow = (event) => {
        if (event.key === 'Enter') {
            // Chamar a API quando a tecla Enter for pressionada
            enviarTextoParaAPITodmorrow(textoTomorrow);
            setTextoTomorrow(''); // Limpar o campo após o envio
            console.log("TEXTO ENVIADO");
            
        }
    };
    const handleKeyPressWeek = (event) => {
        if (event.key === 'Enter') {
            // Chamar a API quando a tecla Enter for pressionada
            enviarTextoParaAPIWeek(textoWeek);
            setTextoWeek(''); // Limpar o campo após o envio
            console.log("TEXTO ENVIADO");
            
        }
    };

    const enviarTextoParaAPIToday = async (texto) => {
        try {
            const response = await axios.post('http://localhost:3000/tasks', 
              { title: texto, category: "today" });
            console.log('Resposta da API:', response.data);
            // Atualizar o estado de tarefas com a nova tarefa
            setTasksToday((prevTasks) => [...prevTasks, response.data]); // Adiciona a nova tarefa ao estado
        } catch (error) {
            console.error('Erro ao enviar a tarefa:', error);
        }
    };
    const enviarTextoParaAPITodmorrow = async (texto) => {
        try {
            const response = await axios.post('http://localhost:3000/tasks', 
              { title: texto, category: "tomorrow" });
            console.log('Resposta da API:', response.data);
            // Atualizar o estado de tarefas com a nova tarefa
            setTasksTomorrow((prevTasks) => [...prevTasks, response.data]); // Adiciona a nova tarefa ao estado
        } catch (error) {
            console.error('Erro ao enviar a tarefa:', error);
        }
    };
    const enviarTextoParaAPIWeek = async (texto) => {
        try {
            const response = await axios.post('http://localhost:3000/tasks', 
              { title: texto, category: "week" });
            console.log('Resposta da API:', response.data);
            // Atualizar o estado de tarefas com a nova tarefa
            setTasksWeek((prevTasks) => [...prevTasks, response.data]); // Adiciona a nova tarefa ao estado
        } catch (error) {
            console.error('Erro ao enviar a tarefa:', error);
        }
    };
    const deleteTaskAPI= async (id) => {
        try {
            const response = await axios.delete('http://localhost:3000/tasks/'+id);
            console.log('Resposta da API:', response.data);
            // Atualizar o estado de tarefas com a nova tarefa
             // Adiciona a nova tarefa ao estado
        } catch (error) {
            console.error('Erro ao enviar a tarefa:', error);
        }
    };

  useEffect(() => {
    axios.get('http://localhost:3000/tasks?filter=today')
    .then(response => {
      setTasksToday(response.data.items) 
    })
    .catch(error => {
      console.error(error);
    })
    axios.get('http://localhost:3000/tasks?filter=tomorrow')
    .then(response => {
      setTasksTomorrow(response.data.items) 
    })
    .catch(error => {
      console.error(error);
    })
    axios.get('http://localhost:3000/tasks?filter=week')
    .then(response => {
      setTasksWeek(response.data.items) 
    })
    .catch(error => {
      console.error(error);
    })

  },[])

    return (
      <div >
          
          <header className="header">
            <h1>Upcoming <span className="badge">18</span></h1>
          </header>

          <Grid container spacing={2}>
            <Grid item size={{sx: 12, sm: 12, md: 12}}>
            <div className="task-box">
            <h2>Today</h2>
              <ul>
                
                <TextField 
                    sx={{marginBottom: 2}}
                    id="outlined-search"  type="search" 
                    label="Add new task"
                    size="small"
                    fullWidth 
                    slotProps={{
                        input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <AddCircleOutlineIcon />
                            </InputAdornment>
                        ),
                        },
                    }}
                    value={texto}
                onChange={handleChangeToday}
                onKeyPress={handleKeyPressToday} // Adiciona o manipulador de tecla
                    variant="outlined"
                />
                {
                  taskstoday.map(item=>{
                    return <li><input type="checkbox" />{item.title}
                    <ClearIcon color="error" onClick={()=>deleteTaskToday(item.id)}/>
                    </li>
                    
                  
                  })
                }
              </ul>
            </div>
            </Grid>
            <Grid item size={{sx: 12, sm: 12, md: 6}}>
              <div className="task-box" >
              <h2>This Week</h2>
                <ul>
                <TextField 
                      sx={{marginBottom: 2}}
                      id="outlined-search"  type="search" 
                      label="Add new task"
                      size="small"
                      fullWidth 
                      slotProps={{
                          input: {
                          startAdornment: (
                              <InputAdornment position="start">
                                  <AddCircleOutlineIcon />
                              </InputAdornment>
                          ),
                          },
                      }}
                      value={textoWeek}
                      onChange={handleChangeWeel}
                      onKeyPress={handleKeyPressWeek}
                      variant="outlined"
                  />
                  {
                    tasksWeek.map(item=>{
                      return <li><input type="checkbox" />{item.title}   
                          <ClearIcon color="error" onClick={()=>deleteTaskToday(item.id)}/>
                        
                      </li>
                    })
                  }
                </ul>
              </div>
            </Grid>
            <Grid item size={{sx: 12, sm: 12, md: 6}}>
              <div className="task-box">
              <h2>Tomorrow</h2>
                <ul>
                  <TextField 
                      sx={{marginBottom: 2}}
                      id="outlined-search"  type="search" 
                      label="Add new task"
                      size="small"
                      fullWidth 
                      slotProps={{
                          input: {
                          startAdornment: (
                              <InputAdornment position="start">
                                  <AddCircleOutlineIcon />
                              </InputAdornment>
                          ),
                          },
                      }}
                      value={textoTomorrow}
                      onChange={handleChangeTomorrow}
                  onKeyPress={handleKeyPressTomorrow}
                      variant="outlined"
                  />
                  {
                    tasksTomorrow.map(item=>{
                      return <li><input type="checkbox" />{item.title}   
                      <ClearIcon color="error" onClick={()=>deleteTaskToday(item.id)}/>

                      </li>
                    })
                  } 
                </ul>

              </div>
            </Grid>
          </Grid>
           
      </div>
    );
  };
  
  export default Upcoming;
  