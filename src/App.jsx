import React, { useState, useEffect } from 'react';

    function App() {
      const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
      });
      const [newTask, setNewTask] = useState('');
      const [filter, setFilter] = useState('all');
      const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

      useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, [tasks]);

      useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
        }
      }, [theme]);

      const addTask = () => {
        if (newTask.trim() !== '') {
          setTasks([...tasks, { text: newTask, completed: false, id: Date.now() }]);
          setNewTask('');
        }
      };

      const completeTask = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
      };

      const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
      };

      const filteredTasks = () => {
        let currentTasks = [...tasks];
        if (filter === 'all') {
          currentTasks.sort((a, b) => {
            if (a.completed && !b.completed) {
              return 1;
            } else if (!a.completed && b.completed) {
              return -1;
            }
            return 0;
          });
        } else if (filter === 'pending') {
          currentTasks = tasks.filter(task => !task.completed);
        } else if (filter === 'completed') {
          currentTasks = tasks.filter(task => task.completed);
        }
        return currentTasks;
      };

      const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      };

      useEffect(() => {
        createStars();
      }, []);

      const createStars = () => {
        const numStars = 200;
        const starsContainer = document.createElement('div');
        starsContainer.className = 'starry-bg';
        for (let i = 0; i < numStars; i++) {
          const star = document.createElement('span');
          star.className = 'star';
          star.style.width = `${Math.random() * 2 + 1}px`;
          star.style.height = star.style.width;
          star.style.top = `${Math.random() * 100}%`;
          star.style.left = `${Math.random() * 100}%`;
          star.style.opacity = `${Math.random() * 0.5 + 0.3}`;
          if (Math.random() < 0.2) {
            star.style.filter = 'blur(1px)';
          }
          starsContainer.appendChild(star);
        }
        document.body.appendChild(starsContainer);
      };

      const CheckmarkIcon = () => (
        <svg className="w-4 h-4 text-neon-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.2929 4.29289C20.6834 4.68342 20.6834 5.31658 20.2929 5.70711L9 17L3.70711 11.7071C3.31658 11.3166 2.68342 11.3166 2.29289 11.7071C1.90237 12.0976 1.90237 12.7308 2.29289 13.1213L8.29289 19.1213C8.68342 19.5118 9.31658 19.5118 9.70711 19.1213L20.2929 8.53553C20.6834 8.145 20.6834 7.51184 20.2929 7.12132L9 17L20.2929 4.29289Z" fill="currentColor"/>
        </svg>
      );

      const DeleteIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      );

      const InstagramIcon = () => (
        <svg className="h-3 w-3 inline-block align-middle mr-1 text-gray-500 hover:text-neon-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2.00005C15.0609 2.00005 15.395 2.01145 16.632 2.06083C17.8833 2.11083 18.875 2.44583 19.508 3.07983C20.142 3.71283 20.477 4.70455 20.527 5.95583C20.5763 7.19283 20.588 7.52694 20.588 10.588C20.588 13.649 20.5763 13.9831 20.527 15.2203C20.477 16.4716 20.142 17.4633 19.508 18.0963C18.875 18.7293 17.8833 19.0643 16.632 19.1143C15.395 19.1637 15.0609 19.175 12 19.175C8.93913 19.175 8.60503 19.1637 7.36797 19.1143C6.11667 19.0643 5.125 18.7293 4.492 18.0963C3.858 17.4633 3.523 16.4716 3.473 15.2203C3.42373 13.9831 3.41206 13.649 3.41206 10.588C3.41206 7.52694 3.42373 7.19283 3.473 5.95583C3.523 4.70455 3.858 3.71283 4.492 3.07983C5.125 2.44583 6.11667 2.11083 7.36797 2.06083C8.60503 2.01145 8.93913 2.00005 12 2.00005ZM12 4.41205C8.21402 4.41205 4.41206 4.42939 4.41206 10.588C4.41206 16.7466 4.4294 16.764 10.588 16.764C16.7466 16.764 16.764 16.7466 16.764 10.588C16.764 4.42939 16.7466 4.41205 10.588 4.41205C10.588 4.41205 12 4.41205 12 4.41205ZM18.294 5.14705C18.713 5.14705 19.041 5.47505 19.041 5.89405C19.041 6.31305 18.713 6.64105 18.294 6.64105C17.875 6.64105 17.547 6.31305 17.547 5.89405C17.547 5.47505 17.875 5.14705 18.294 5.14705ZM12 7.17505C10.009 7.17505 7.17506 10.009 7.17506 12C7.17506 13.991 10.009 16.825 12 16.825C13.991 16.825 16.825 13.991 16.825 12C16.825 10.009 13.991 7.17505 12 7.17505Z" fill="currentColor"/>
        </svg>
      );

      const GithubIcon = () => (
        <svg className="h-3 w-3 inline-block align-middle mr-1 text-gray-500 hover:text-neon-blue" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 15.76 4.854 18.944 8.74 20.584C9.116 20.656 9.264 20.424 9.264 20.224V18.216C6.148 19.008 5.444 16.784 5.444 15.904C5.08 15.136 4.488 13.44 5.444 12.28C5.444 12.28 6.804 11.92 8.056 13.232C8.432 13.344 8.58 13.12 8.58 12.848C6.42 12.576 4.14 11.736 4.14 9.248C4.14 8.192 4.56 7.36 5.176 6.784C5.176 6.784 6.16 6.528 8.58 8.048C9.42 7.816 10.34 7.688 11.26 7.688C12.18 7.688 13.1 7.816 13.94 8.048C16.36 6.528 17.344 6.784 17.344 6.784C17.96 7.36 18.376 8.192 18.376 9.248C18.376 11.736 16.096 12.576 13.936 12.848C13.936 13.12 14.084 13.344 14.46 13.232C15.712 11.92 17.072 12.28 17.072 12.28C18.028 13.44 17.436 15.136 17.072 15.904C17.072 16.784 16.368 19.008 13.252 18.216V20.224C13.252 20.424 13.4 20.656 13.776 20.584C17.66 18.944 20.514 15.76 20.514 12C20.514 6.477 16.037 2 10.5 2H12Z" fill="currentColor"/>
        </svg>
      );


      return (
        <div className="relative min-h-screen flex flex-col items-center justify-center p-4 font-lato">
          <div className="absolute top-4 right-4">
            <button onClick={toggleTheme} className="bg-glass-dark backdrop-blur-glass hover:bg-glass-light text-gray-300 p-2 rounded-xl transition-colors duration-200 shadow-glass text-xs">
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>

          <div className="bg-glass-dark backdrop-blur-glass p-5 rounded-xl shadow-glass w-full max-w-md flex flex-col">
            <h1 className="text-xl font-bold text-white absolute top-5 left-5">
              My Tasks
            </h1>

            <div className="mt-10">
              <div className="flex  mb-5 bg-input-bg backdrop-blur-glass rounded-xl px-3 py-1 shadow-input border border-input-border transition-shadow duration-200 focus-within:shadow-glass">
                <input
                  type="text"
                  className="bg-transparent text-gray-300 flex-grow mr-2 py-1 focus:outline-none placeholder-gray-500 text-sm"
                  placeholder="Add a new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' ? addTask() : null}
                  style={{maxWidth: 'calc(100% - 60px)'}}
                />
                 <button
                  onClick={addTask}
                  className="bg-neon-blue text-dark-bg font-bold py-1.5 px-4 rounded-xl hover:bg-cyan-300 transition-colors duration-200 disabled:opacity-50 shadow-md text-sm ml-2 flex-shrink-0"
                  disabled={newTask.trim() === ''}
                >
                  Add
                </button>
              </div>

              <div className="flex justify-around mb-6 space-x-3">
                {['all', 'pending', 'completed'].map(f => (
                  <button
                    key={f}
                    className={`py-1 px-3 rounded-xl focus:outline-none text-gray-300 hover:text-white transition-colors duration-200 text-sm ${filter === f ? 'text-white border-b-2 border-neon-blue rounded-none' : ''}`}
                    onClick={() => setFilter(f)}
                  >
                    {f.toUpperCase()}
                  </button>
                ))}
              </div>

              <div className="mb-8">
                {filteredTasks().map(task => (
                  <div key={task.id} className="bg-task-bg hover:bg-task-hover rounded-xl mb-2 flex items-center justify-between px-3 py-2 transition-colors duration-200 shadow-sm">
                    <button
                      onClick={() => completeTask(task.id)}
                      className="mr-3 focus:outline-none"
                    >
                      {task.completed ? <CheckmarkIcon /> : <div className="w-4 h-4 rounded-md border border-gray-500"></div>}
                    </button>
                    <span className={`${task.completed ? 'line-through opacity-50 text-gray-400' : 'text-gray-300'} text-sm flex-grow`}>
                      {task.text}
                    </span>
                    <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
                      <DeleteIcon />
                    </button>
                  </div>
                ))}
                {filteredTasks().length === 0 && <p className="text-gray-500 text-center text-sm">No tasks here.</p>}
              </div>

              <footer className="text-center text-gray-500 mt-4 pt-3 border-t border-gray-700">
                Made by Osayeed <br/>
                <a href="https://www.instagram.com/simplyosayed/" className="hover:text-neon-blue text-xs"><InstagramIcon />Instagram</a>  · <a href="https://github.com/Osayeed" className="hover:text-neon-blue text-xs"><GithubIcon />GitHub</a>
              </footer>
            </div>
          </div>
        </div>
      );
    }

    export default App;
