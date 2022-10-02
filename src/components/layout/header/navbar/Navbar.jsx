import React from "react";
import Container from "../../../container/Container";
import {ReactComponent as UserIcon} from "../../../../assets/svg/user.svg";
import {ReactComponent as SearchIcon} from "../../../../assets/svg/search.svg";
import {ReactComponent as CartIcon} from "../../../../assets/svg/cart.svg";
import IconButton from "../../../IconButton/IconButton";
import './Navbar.style.scss'
import {Link} from "react-router-dom";

const menuItems = [
    {
    title:"فروشگاه",
    href:"/",
    },{
        title:"ارتباط با ما",
        href:"/contact-us",
    },{
        title:"درباره ما",
        href:"/about-us",
    }
]



const Navbar = ()=>{

    return(
        <nav className={'navbar'}>
           <Container>
              <div className={'navbarContent'}>
                  <ul>
                      {menuItems.map((item) =>(
                          <li key={item.title}>
                              <Link to={item.href}>{item.title}</Link>
                          </li>
                      ))}
                  </ul>
                  <ul>
                      <IconButton>
                          <Link to={"login"}>
                              <UserIcon/>
                          </Link>
                      </IconButton>

                      <IconButton>
                          <SearchIcon/>
                      </IconButton>
                      <IconButton>
                          <CartIcon/>
                      </IconButton>
                  </ul>
              </div>
           </Container>
        </nav>
    )
}


export default Navbar;