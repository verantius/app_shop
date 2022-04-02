import { useState } from "react"
import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './Login.css'

const Login = () => {
    //const [UserName, setUserName] = useState('')
    //const [password, setUserPassword] = useState('')
    return (
        <div>
            <div className="row jutify-content-center">
                <div className="col-md-6">
                    <form >
                        <input 
                            type="text" 
                            placeholder="wpisz nazwe uzytkownika" 
                            className="form-control"
                            //onChange={(e) => setUserName(e.target.value)}
                            //value={userName}
                        />        
                        <input 
                            type="password" 
                            placeholder="wpisz haslo" 
                            className="form-control"
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