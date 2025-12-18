import { useContext, useEffect } from "react";
import { UserContext } from "./contexts/UserContext";

export default function Profile() {
  const {getUserProfile, email, logout} = useContext(UserContext)

  useEffect(() => {
        getUser();
    }, []);

  const getUser = async () =>  {
    await getUserProfile();
  }

  return (
  <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="p-4" style={{ width: '100%', maxWidth: '400px' }}>
      <h3 className="mb-4 text-center">Profile</h3>
      <div>
        <div className="mb-3">
          <label className="form-label">{email == "" ? "Cargando usuario...": email}</label>
        </div>  
        <button className="btn btn-primary w-100" onClick={() => logout()}>
          Cerrar sesión
        </button>
      </div>
    </div>
  </div>
  );
}
