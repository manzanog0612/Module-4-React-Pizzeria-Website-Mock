export default function Profile() {
  const email = "randomemail@gmail.com"
      return (
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="p-4" style={{ width: '100%', maxWidth: '400px' }}>
          <h3 className="mb-4 text-center">Profile</h3>
          <div>
            <div className="mb-3">
              <label className="form-label">{email}</label>
            </div>  
            <button type="submit" className="btn btn-primary w-100">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    );
}
