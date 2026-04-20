import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Duangxill@outlook.com" data-cursor="disable">
                Duangxill@outlook.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+19872056336" data-cursor="disable">
                +198 7205 6336
              </a>
            </p>
          </div>
          <div className="contact-box">
  <h4>Social</h4>

  {/* QQ */}
  <a
    href="tencent://message/?uin=532527489"
    target="_blank"
    rel="noreferrer"
    data-cursor="disable"
    className="contact-social"
  >
    QQ <MdArrowOutward />
  </a>

  {/* 微信 */}
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      alert("GSarite6184");
    }}
    data-cursor="disable"
    className="contact-social"
  >
    微信 <MdArrowOutward />
  </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>DUBINGYANG </span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
