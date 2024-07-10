import React, { useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

function App() {
  const [activeUserId, setActiveUserId] = useState(null);

  return (
    <div className='App'>
      {/* Active User ID = {activeUserId}; */}
      <div>
        <UserList setActiveUserId={setActiveUserId}/>
      </div>
      {activeUserId && (
        <div>
        <UserDetail activeUserId={activeUserId}/>
      </div>
      )}
    </div>
  );
}

exportdefault App;.
