import { Provider } from 'react-redux';
import NavigationStack from './navigationstack/navigationStack';
import { reduxStore } from './redux/store/store';

function App() {
  return (
      <Provider store={reduxStore}>
      < NavigationStack/>
      </Provider>
  );
}

export default App;
