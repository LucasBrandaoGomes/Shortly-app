
import  {  BrowserRouter ,  Routes ,  Route  }  from  'react-router-dom' ;
import  {  useState  }  from  'react' ;
import SignUp from './SignUp.js'
import SignIn from "./SignIn.js";
import Context from "../contexts/Context.js";
import Init from './Init.js'

export default function App(){
    
    const [infoLogin, setInfoLogin] = useState();
    
    return(
        <Context.Provider value = {{infoLogin , setInfoLogin}}>
            <BrowserRouter>
                   
                            <Routes>
                                <Route path="/" element= {<Init />}/>
                                <Route path="/signin" element={<SignIn />}/>
                                <Route path="/signup" element={<SignUp />}/>
                            </Routes>
                        
                    
            </BrowserRouter>
        </Context.Provider>
    )
}