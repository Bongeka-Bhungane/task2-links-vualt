
import './App.css'
import Header from './components/header';
import Button from './components/button';

function App() {

  return (
    <>
      <Header />
      <Button name="save" color="#3FF32F" className="btn" />
      <Button name="🗑️" color="red" className="button" />
    </>
  );
}

export default App
