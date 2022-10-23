import './App.scss';
import { Drawer, Header, Main } from './components';

export default function App() {
  return (
    <div className="App-container">
      <Drawer />
      <Header />
      <Main />
    </div>
  );
}