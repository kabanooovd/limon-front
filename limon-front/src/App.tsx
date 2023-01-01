import { Toaster } from './components';
import { AppRoutes } from './Routes';
import { AppStyledWrapper } from './styles/appStyledWrapper';

function App() {
  return (
    <AppStyledWrapper>
      <Toaster />
      {/* limon app  - приложение лимона? */}
      <AppRoutes />
    </AppStyledWrapper>
  );
}

export default App;
