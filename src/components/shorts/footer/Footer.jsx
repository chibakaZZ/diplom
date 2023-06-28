import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsDownload } from "react-icons/bs";

function Footer() {
  return (
    // <div className="footer">
    //   <div className="footer1">
    //     <div className="footericons">
    //       <a target="_blank" href="https://facebook.com">
    //         <BsFacebook className="facebook" />
    //       </a>
    //     </div>
    //     <div></div>
    //   </div>
    //   <div className="footer2">
    //     <div className="footericons">
    //       <a target="_blank" href="https://www.instagram.com">
    //         <BsInstagram className="instagram" />
    //       </a>
    //     </div>
    //   </div>
    //   <div className="footer3">
    //     <div className="footericons">
    //       <a
    //         target="_blank"
    //         href="https://cdn.cloudflare.steamstatic.com/client/installer/SteamSetup.exe"
    //       >
    //         <BsDownload className="download" />
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <>
      <div >
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          background: '#141414',
          //  flexDirection: 'column',
           alignItems: 'center',
           height: '400px'
        }}>[]
          <div className="petsFooter" >
            <h4>Дэлгэрэнгүй мэдээлэл</h4>
            <ul>
              <li><a href="#">Хэрхэн захиалга өгөх вэ ?</a></li>
              <li><a href="#">Асуулт хариулт</a></li>
              <li><a href="contact.html">Хаяг байршил</a></li>
              <li><a href="#">Гишүүнчлэл</a></li>
            </ul>
          </div>
          <div className="petsFooter" >
            <h4>CATEGORIES</h4>
            <ul >
              <li><a href="#">Bed linen</a></li>
              <li><a href="#">Cushions</a></li>
              <li><a href="#">Duvets</a></li>
              <li><a href="#">Pillows</a></li>
              <li><a href="#">Protectors</a></li>
            </ul>
          </div>
          <div className="petsFooter"  style={{marginBottom: '70px'}}>
            <h4>NEWSLETTER</h4>
            <div className="stay agileinfo">
              <div className="stay-left wthree">
                <form action="#" method="post">
                  <input type="text" placeholder="Enter your email " required="" />
                </form>
              </div>
              <div className="btn-1 w3-agileits">
                <form action="#" method="post">
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
          <div className="petsFooter" >
            <h4>CONTACT US</h4>
            <p>Contrary to popular belief</p>
            <p>The standard chunk</p>
            <p>office :  +12 34 995 0792</p>
          </div>
        </div>

        <div style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         width: '100vw'
      }}>
        <p>© 2023s Амьтны дэлгүүр Ч.Чинбат </p>
       </div>
      </div>
     
      );
    </>
  );
}

export default Footer;
