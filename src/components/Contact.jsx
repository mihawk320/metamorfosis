import React, { useState } from "react";
import emailjs from "emailjs-com";
const App = () => {
  const frmContact = {
    userName: "",
    userEmail: "",
    userSecondname: "",
    userNumber: "",
    emailDetails: "",
  };
  const [contact, setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "default_service",
        "metamorfosis",
        contact,
        "user_sB3TUiQhSBqTCSH02rrPG"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div className="container pt-2">
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4">
              <h3 className="letra_blanca">
                ¿Necesitas alguno de nuestros servicios? <b>Contáctanos</b>
              </h3>
              <p className="letra_blanca">
                Puedes escribirnos al correo llenando este formulario o también
                escribenos
                <br />
                por whatsapp :{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=573008203819"
                  style={{ textDecoration: "none" }}
                >
                  +57 3008203819,{" "}
                </a>
                <br />
                también siguenos en instagram y facebook
                <br />
                como <b>Metamorfosis</b>
                <br />
              </p>
            </div>

            <div className="col-md-6 mt-4">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        value={contact.userName}
                        name="userName"
                        onChange={handleChange}
                        placeholder="Nombres"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {" "}
                      <input
                        type="text"
                        className="form-control"
                        value={contact.userSecondname}
                        name="userSecondname"
                        onChange={handleChange}
                        placeholder="Apellido"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      {" "}
                      <input
                        required
                        type="email"
                        className="form-control"
                        value={contact.userEmail}
                        name="userEmail"
                        onChange={handleChange}
                        placeholder="Correo"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      {" "}
                      <textarea
                        required
                        placeholder="Asunto"
                        className="form-control"
                        value={contact.emailDetails}
                        name="emailDetails"
                        onChange={handleChange}
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      {" "}
                      <input
                        type="number"
                        className="form-control"
                        value={contact.userNumber}
                        name="userNumber"
                        onChange={handleChange}
                        placeholder="Número de teléfono (opcional)"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-primary full-width">
                      Enviar
                    </button>
                  </div>
                  <br />
                  {showMessage ? (
                    <div
                      className="alert alert-success col-md-5 mx-auto"
                      role="alert"
                    >
                      Correo enviado satisfactoriamente
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default App;
