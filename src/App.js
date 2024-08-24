import { Fragment } from 'react';
import './App.css';
// import Header from './Component/Header';
import '../src/'
import Student from './Component/Student';

// import LearnComponents from './Components/LearnComponents';

function App() {
  return (
    <Fragment>
      {/* <Header/> */}
      <Student name="Guhan" age={22} isMarried={false}/>
      <Student name="Dhinesh" age={22} isMarried={false}/>
      <Student name="Mani" age={26} isMarried={false}/>
    </Fragment>
  );
}

export default App;
