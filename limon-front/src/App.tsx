import React from 'react';
import { useDispatch } from 'react-redux';
import { Toaster } from './components';
import { onGetItemsList } from './redux/items/items-reducer';
import { AppRoutes } from './Routes';
import { AppStyledWrapper } from './styles/appStyledWrapper';

function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(onGetItemsList({}))
  }, [])
  return (
    <AppStyledWrapper>
      <Toaster />
      {/* limon app  - приложение лимона? */}
      <AppRoutes />
    </AppStyledWrapper>
  );
}

export default App;
