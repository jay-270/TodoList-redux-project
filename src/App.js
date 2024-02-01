import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";

const App = () => (
  <>
    <div class="jumbotron">
      <div class="container">
        <h1>Todo list</h1>
        <p>You can enter a task and complete it here</p>
      </div>
    </div>
    <div className="card">
      <div className="container">
        <div className="row">
          <AddTodo />
        </div>
        <div className="row">
          <VisibleTodoList />
        </div>
        <div className="row d-flex">
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default App;
