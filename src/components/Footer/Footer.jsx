import React from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="upperFooter" style={{display: 'flex' , justifyContent: 'space-between'}}>
          <div>
          <h2 style={{ color: "#f4ae1a", marginLeft: 30}}>1-80025-8221</h2>
          <h5 style={{ color: "whitesmoke" , marginTop: 10 , marginLeft: 30}}>
            Monday - Friday, 8:00 am - 6:00 pm EST
          </h5>
          </div>
          <div>
          <button> <KeyboardDoubleArrowUpIcon style={{color: 'blue' , backgroundColor: 'whitesmoke'}}/> </button>
          </div>
        </div>
        <div className="lowerFooter">
          <div className="sections">
            <div className="section1">
              <table>
                <td>
                  <th style={{ textAlign: "start" }}>Account</th>
                  <tr>Customer Login</tr>
                  <tr>Order history</tr>
                  <tr>Returns</tr>
                  <tr>Ordering shipping and Payment</tr>
                  <tr>Help and Support</tr>
                </td>
                <td>
                  <tr>
                    <b>Dawnloads</b>
                  </tr>
                  <tr>Catalogs and Brochures</tr>
                  <tr>RGA</tr>
                  <tr>Qoute Request Forms</tr>
                  <tr></tr>
                  <tr></tr>
                </td>
                <td>
                  <tr>
                    <b>Company</b>
                  </tr>
                  <tr>About us</tr>
                  <tr>carrers</tr>
                  <tr>Customer support</tr>
                  <tr>Privacy Policy</tr>
                  <tr>Request Information</tr>
                </td>
                <td>
                  <th>
                    {" "}
                    <h3 style={{ color: "#428BCA" }}>FIND A DISTRIBUTOR</h3>
                  </th>
                </td>
                <td>
                  <h3>WE'RE SOCIAL</h3>
                  <div className="socialIcons">
                    <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" />
                    <img src="https://img.icons8.com/sf-regular-filled/48/000000/instagram-new.png" />
                    <img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" />
                    <img src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v1.png" />
                  </div>
                </td>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
