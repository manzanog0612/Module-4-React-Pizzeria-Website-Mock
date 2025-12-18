import {useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContext } from '../contexts/UserContext';

export default function RegistrerPage(){
    const {register} = useContext(UserContext)

    const [email, setEmail] = useState('') 
    const [contraseña, setContraseña] = useState('')
    const [confContraseña, setConfContraseña] = useState('')

    const onClickHandler = async (event)=>{
        event.preventDefault()

        if (contraseña != confContraseña)
        {
          alert("Formulario no enviado, la confirmación de la contraseña no es igual a la contraseña")
        }
        else
        {
          await register(email, contraseña);      
          console.log({email, contraseña});
        }
    }
    return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="mb-4 text-center">Register</h3>
        <form onSubmit={onClickHandler}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              required
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input 
              type="password"
               className="form-control"
              placeholder="Confirm Password" 
              required
              value={confContraseña}
              onChange={(e) => setConfContraseña(e.target.value)}
            />
          </div>
        
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}