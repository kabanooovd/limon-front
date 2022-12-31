import React from 'react';
import { useDispatch } from 'react-redux';
import { ItemsController } from './api/controllers.ts/ItemsController';
import './App.css';
import { Toaster } from './components/Toaster';
import { onGetItemsList } from './redux/items/items-reducer';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(onGetItemsList({}))
  }, [])
  return (
    <div>
      <Toaster />
      limon app
    </div>
  );
}

export default App;
