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
      <div style={{
        background: '#141414',
        height: '300px',
        display: "flex",
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <div className="moreInfo">
          <h3 className="title">Дэлгэрэнгүй мэдээлэл</h3>
          <ul>
            <li>Асуулт хариулт</li>
            <li>Гишүүнчлэл</li>
            <li>Хаяг байршил</li>
            <li>Холбоо барих</li>
          </ul>
        </div>
        <div className="moreInfo">
          <ul>
            <h3 className="title">Категори</h3>
            <li>Муур</li>
            <li>Нохой</li>
            <li>Усан гахай</li>
            <li>Туулай</li>
          </ul>
        </div>
        <div className="moreInfo">
          <h3 className="title">Захиа илгээх</h3>
          <div >
            <form action="" style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '30px'
            }}>
              <input type="text" placeholder="Enter your email" style={{
                padding: '10px'
              }} />
              <input type="submit" name="" id="" style={{
                marginTop: '10px'
              }} />
            </form>
          </div>
        </div>
        <div className="moreInfo">

          <ul>
            <h3 className="title">Холбоо барих</h3>
            <li>pets124@gmail.com
              <br />
              Улаанбаатао хот
              <br />
              office : +12 34 995 0792</li>

          </ul>
        </div>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <p>© 2022 Амьтны дэлгүүр, Ч.Чинбат </p>
      </div>
    </>
  );
}

export default Footer;
