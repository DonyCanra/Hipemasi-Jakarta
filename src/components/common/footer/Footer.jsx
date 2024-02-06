import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p>Hipemasi ialah perkumpulan mahasiswa & pelajar yang merantau ke jakarta </p>
            <i className="fa fa-envelope"></i>
            <span> hipemasi@gmail.com </span> <br />
            <i className="fa fa-headphones"></i>
            <span> +62 877-1345-3535</span>
          </div>
          <div className="box">
            <h3>INFO</h3>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <Link to={`/news/1`}>
                <p>Website Official Hipemasi Diresmikan</p>
              </Link>
            </div>
            <div className="item">
              <img src="../images/hero/hero2.jpg" alt="" />
              <Link to={`/news/2`}>
                <p>Membangun Hipemasi se-Jabodetabek</p>
              </Link>
            </div>
          </div>
          <div className="box">
            <h3>TERKINI</h3>
            <div className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <Link to={`/news/3`}>
                <p>Musyawarah Besar untuk Pelantikan Hipemasi 2023</p>
              </Link>
            </div>
            <div className="item">
              <img src="../images/hero/hero4.jpg" alt="" />
              <Link to={`/news/4`}>
                <p>Pelantikan Kepengurusan Hipemasi 2023</p>
              </Link>
            </div>
          </div>
          <div className="box">
            <h3>MEDIA SOCIAL</h3>
            {/* <i className="fa fa-chevron-right"></i> */}
            <ul>
              <li>
                <a href={"https://www.instagram.com/hipemasi_jakarta/"} target="_blank" rel="noreferrer noopener" style={{ color: "white" }}>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href={"https://www.facebook.com/hipemasi.hipemasi?mibextid=ZbWKwL"} target="_blank" rel="noreferrer noopener" style={{ color: "white" }}>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href={"https://youtube.com/@HIPEMASIJakarta?si=cOp5jUD0ryIWWknj"} target="_blank" rel="noreferrer noopener" style={{ color: "white" }}>
                  <span>Youtube</span>
                </a>
              </li>
              <li>
                <a href={"https://www.instagram.com/donycanra/"} target="_blank" rel="noreferrer noopener" style={{ color: "white" }}>
                  <span>Creator</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal  ">
        <div className="container flexSB">
          <p>© all rights reserved</p>
          <p>
            copyright with <i className="fa fa-phone"></i> @hipemasi
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
