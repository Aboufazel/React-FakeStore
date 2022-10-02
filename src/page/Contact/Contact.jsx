import Input from "../../components/Input/Input";
import React , {useState} from "react";
import './Contact.style.scss'


const Contact = ()=>{
 const [form , setForm] = useState([
     {
         name:"",
         mail:"",
         text:"",
     }
 ])
     const manageSubmit = (e)=>{

         e.preventDefault();
         alert("فرم تماس با موفقیت ارسال شد");
         setForm({...form , name:"" , mail:"" , text:""})
     }

     const manageForm = (e)=>{
     setForm({...form , [e.target.name]: e.target.value});
     }

    return(
        <div className={'ContactItems'}>
            <h2>
                {'ارتباط با فروشگاه'}
            </h2>
            <p>
                {'برای ارتباط با فروشگاه فرم زیر را تکمیل نمایید'}
            </p>
            <form onSubmit={manageSubmit} className={'ContactForm'}>
                <Input value={form.name} onChane={manageForm}/>
                <Input value={form.mail} onChane={manageForm}/>
                <Input value={form.text} onChane={manageForm}/>
                <button type={'submit'}>ارسال فرم تماس</button>
            </form>
        </div>
    )
}





export default Contact;