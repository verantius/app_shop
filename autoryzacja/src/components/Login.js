import { useState } from "react"
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Login.css'
import swal from 'sweetalert'

const Login = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const validate = (e) => {
        e.preventDefault()
        if (userName === 'admin' && password === 'admin123'){
            swal('witaj adminie', "witamy na naszej stronie", "success")
        }else{
            swal('zle dane logowania',"wpisz poprawny username","error")
        }
    }
    
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>Autoryzacja uzydkownika</h1>
                    <form onSubmit={validate}>
                        <input 
                            type="text" 
                            placeholder="wpisz nazwe uzytkownika" 
                            className="form-control"
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            />        
                            <input 
                            type="password" 
                            placeholder="wpisz haslo" 
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />        
                        <input 
                            type="submit" 
                            className="btn btn-primary"
                        />        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login