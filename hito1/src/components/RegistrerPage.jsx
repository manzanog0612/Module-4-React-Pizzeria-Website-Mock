import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // 👈 Importa Bootstrap

export default function RegistrerPage(){
    const [email, setEmail] = useState('') 
    const [contraseña, setContraseña] = useState('')
    const [confContraseña, setConfContraseña] = useState('')
    const onClickHandler = (event)=>{
        event.preventDefault()

        if (email == '' || contraseña == '' || confContraseña == '')
        {
            alert("Formulario no enviado, faltan completar datos")
        }
        else if (contraseña.length < 6)
        {
            alert("Formulario no enviado, la contraseña debe tener al menos 6 caracteres")
        }
        else if (contraseña != confContraseña)
        {
            alert("Formulario no enviado, la confirmación de la contraseña no es igual a la contraseña")
        }
        else
        {
            alert("Formulario enviado!")
        }

        console.log({
            email,
            contraseña,
            confContraseña
        })
    }
    return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="mb-4 text-center">Login</h3>
        <form onSubmit={onClickHandler}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
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
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmar Contraseña</label>
            <input 
              type="password"
               className="form-control"
              placeholder="Confirmar contraseña" 
              value={confContraseña}
              onChange={(e) => setConfContraseña(e.target.value)}
            />
          </div>
        
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}