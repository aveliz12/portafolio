import { Header } from "../../components/components";
import { contact } from "../../data/contact/contact";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import email from "../../assets/email.png";
import "../../styles/contact_styles.css";
const Contact = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Header />
      <div className="title-contact">
        <h1>Contacto</h1>
      </div>
      {contact.map((data) => (
        <div className="container-contact" key={1}>
          <div data-text="Teléfono" className="glass">
            <div className="glass-container">
              <img src={phone} alt="" width={60} height={60} />
              <p className="text-contact">{data.telf}</p>
            </div>
          </div>
          <div data-text="Ubicación" className="glass">
            <div className="glass-container">
              <img src={location} alt="" width={60} height={60} />
              <p className="text-contact">{data.location}</p>
            </div>
          </div>
          <div data-text="Correo electrónico" className="glass">
            <div className="glass-container">
              <img src={email} alt="" width={60} height={60} />
              <p className="text-contact">{data.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
