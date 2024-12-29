import PageB from "./pages/PageB";
import PageA from "./pages/PageA";
import PageC from "./pages/PageC";
import PageD from "./pages/PageD";
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
 

  return (

        <div>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageA/>}/>
            <Route path='/pageb' element={<PageB/>}/>
            <Route path='/pagec' element={<PageC/>}/>
            <Route path="/paged" element={<PageD/>}/>
            

          </Routes>
          </BrowserRouter>
        </div>
  )
}
export default App;
