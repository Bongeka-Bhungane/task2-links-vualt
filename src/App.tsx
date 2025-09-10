
import './App.css'
import Header from './components/header';
import Form from './components/form';
import Viewer from './components/viewer';
// import Button from "./components/button";
// import { FaTrash, FaEdit, FaPlus } from "react-icons/fa";

function App() {

  return (
    <>
      <Header />
      <div className="main">
        <Form />
        <Viewer />
      </div>
      {/* <Button color="red" className="button" icon={<FaTrash />} />
      <Button color="red" className="button" icon={<FaEdit />} />
      <Button color="red" className="button" icon={<FaPlus />} /> */}
    </>
  );
}

export default App
