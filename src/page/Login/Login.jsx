import Input from "../../components/Input/Input";
import {useState} from "react";
import "./Login.style.scss"
import {Link} from "react-router-dom";

const Login = ()=>{
    const [info , setInfo] = useState([
        {username:"" , pass:""},
    ])
     const manageSubmit = (e)=>{
         e.preventDefault();
         alert("با موفقیت وارد شدید")
         setInfo({...info})
     }

     const manageChange = (e)=>{
        setInfo({...info , [e.target.name]: e.target.value});
     }
    return(
        <div className={"LoginPage"}>
            <h2>به فروشگاه خوش آمدید</h2>
            <form onSubmit={manageSubmit}>
                <Input onChane={manageChange} value={info.username}/>
                <Input onChane={manageChange} value={info.pass}/>
                <button type={"submit"}>
                    {"ورود به فروشگاه"}
                </button>
            </form>
            <Link to={"/"} className={"signUp"}>
                {"عضو جدید هستید؟! عضویت"}
            </Link>
        </div>
    );
}


export default Login;