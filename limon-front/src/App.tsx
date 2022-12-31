import React from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from './components/Toaster';
import { onGetItemsList } from './redux/items/items-reducer';
import { AppStyledWrapper } from './styles/appStyledWrapper';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(onGetItemsList({}))
  }, [])
  return (
    <AppStyledWrapper>
      <Toaster />
      limon app  - приложение лимона?
    </AppStyledWrapper>
  );
}

export default App;
