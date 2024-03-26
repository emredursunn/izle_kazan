import { Provider } from 'react-redux';
import RootStackNav from './src/navigation/RootStackNav';
import store from './src/redux/store';
import "expo-dev-client"

export default function App() {
  return (
    <Provider store={store}>
      <RootStackNav />
    </Provider>
  );
}

