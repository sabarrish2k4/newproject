// // import '../login.css'
// import headerCSS from './Header.module.css';
// // import {Link} from 'react-router-dom';
// const Header = ({username}) => {
//     return (
//         <>
//             <div className={headerCSS.header}>
//                 <div className={headerCSS.img1}>
//                     <img id="blobby-1" src="./CSS/nipponlogo2.png" alt="Blobby" />
//                 </div>

//                 <nav>
//                     <h3 style={{fontFamily: "cursive"}}>Hello {username}</h3> 
//                 {/* <Link to="/landing">Home</Link>

//                 <Link to="">Return</Link> */}
//                 </nav>
//             </div>
//         </>
//     );
// }
 
// export default Header;


import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";
import { Button, Layout } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const LoginP = () => {
    return (
        <Layout>
            <Header style={{ background: "#808080", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="header-content" style={{justifySelf: "left"}}  >
                    <img id="logo_img" title="Nippon Paint India" src="https://www.nipponpaint.co.in/wp-content/uploads/2021/08/Nippon-Logo-11-01-01.png" alt="Nippon Paint India" style={{ maxHeight: "81px" }} />

                </div>
                
            </Header>
        
        </Layout>
    );
};

export default LoginP;

