
import React, { useState, useEffect } from "react";
import "./TodayPage.css";
import TextField from '@mui/material/TextField';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";

const TodayPage = () => {
  
  const [taskstoday, setTasksToday] = useState([])
  const [texto, setTexto] = useState('');

  const handleChangeToday = (event) => {
      setTexto(event.target.value);
  };

  const handleKeyPressToday = (event) => {
      if (event.key === 'Enter') {
          // Chamar a API quando a tecla Enter for pressionada
          enviarTextoParaAPIToday(texto);
          setTexto(''); // Limpar o campo após o envio
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

  useEffect(() => {
    axios.get('http://localhost:3000/tasks?filter=today')
    .then(response => {
      setTasksToday(response.data.items) 
    })
    .catch(error => {
      console.error(error);
    }) 

  },[])
    return (
      <div >
          
          <header className="header">
            <h1>Today <span className="badge">18</span></h1>
          </header>
          <section className="tasks-section">
             
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
                    return <li><input type="checkbox" />{item.title}</li>
                  })
                }
              </ul>
            </div>
            </section> 
      </div>
    );
  };
  
  export default TodayPage;
  