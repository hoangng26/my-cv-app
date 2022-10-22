import GlobalStyles from './components/GlobalStyles';
import DefaultLayout from './components/Layouts';
import { HomePage } from './pages';

function App() {
  return (
    <div className="App">
      <GlobalStyles>
        <DefaultLayout>
          <HomePage />
        </DefaultLayout>
      </GlobalStyles>
    </div>
  );
}

export default App;
