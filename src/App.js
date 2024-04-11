import React from 'react';
import './App.css';
import NhMFuncDemo from './component/NHM_Funcdemo'; 
import NHMClassComp from './component/NHM_ClassComp'; 

function App() {
  const users = {
    userName: "K22CNTT3",
    password: "14092004",
    fistName: "Ngo Hoang",
    lastName: "Minh",
  };

  function formatName(user) {
    return <h2>Xin Chào, {user.fistName} {user.lastName}</h2>;
  }

  return (
    <div className="App">
      <div>
        <p>FullName: {users.fistName} {users.lastName}</p>
        {formatName(users)}
      </div>
      <div>
        <NhMFuncDemo/>
        <NhMFuncDemo userName="NHM" fullName="Ngo Hoang Minh" age="45" />
      </div>
      <div>
        <NHMClassComp/>
        <NHMClassComp company="123" course="Mingo"/>
      </div>
    </div>
  );
}

export default App;
