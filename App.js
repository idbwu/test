import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="App">
      <Header />
      
      <section id="about">
        <h2>О себе</h2>
        <p>Детальная информация обо мне...</p>
      </section>

      <section id="projects">
        <h2>Проекты</h2>
        <div className="projects-list">
          <ProjectCard title="Проект 1" description="Описание проекта" />
          <ProjectCard title="Проект 2" description="Описание проекта" />
        </div>
      </section>

      <section id="contact">
        <h2>Контакты</h2>
        <form>
          <input type="text" placeholder="Ваше имя" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Сообщение"></textarea>
          <button type="submit">Отправить</button>
        </form>
      </section>
    </div>
  );
}

export default App;
