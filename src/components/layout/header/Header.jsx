import React from "react";
import './Header.style.scss'
import Container from "../../container/Container";
import bottle from '../../../assets/images/bottle.webp';
import cosmetic from '../../../assets/images/cosmetic.jpg';
import hero from '../../../assets/images/hero.png';



const Header = ()=>{

    return(
        <header className={'header'}>
            <Container>
                <div className={'header__content'}>
                    <div className={'header__details'}>
                        <h1>عنوان</h1>
                        <p>تبلیغات</p>
                        <a href={'#'}>دسته بندی محصولات</a>
                    </div>
                    <div className={'header__gallery'}>
                        <div className={'header__secondary_image'}>
                            <img width={280} height={380} src={bottle}/>
                        </div>
                        <div className={'header__secondary_image_1'}>
                            <img width={202} height={187} src={cosmetic}/>
                        </div>
                        <div className={'header__secondary_image_2'}>
                            <img width={202} height={187} src={hero}/>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}


export default Header;