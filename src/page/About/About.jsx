import React from "react";
import Container from "../../components/container/Container";
import './About.style.scss'



const About = ()=>{

    return(
        <Container>
             <div className={'about'}>
                 <h2>
                     {'درباره فروشگاه'}
                 </h2>
                 <p>
                     {'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.'}
                 </p>
             </div>
        </Container>
    );
}



export default About;