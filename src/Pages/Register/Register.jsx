import React from "react";
import imagem from "../../assets/Rectangle.png";
import "./Register.css"


const Register = () => {
    return (
        <div className="flex-container">

          <div className="rectangle1">
          <img src={imagem} alt="foto"></img>
          </div>
          <div className="rectangle2">
         <form className="rectangle3">
                  <h1 className="sign_in">Sign In</h1>
                  <input  className="rectangle4"placeholder="First Name" name='primeiroNome' type='primeiroNome'/>
                  <input className="rectangle4" placeholder="Last Name" name='segundooNome' type='segundoNome'/>
                  <input className="rectangle4" placeholder="E-mail" name='email' type='email'/>
                  <input className="rectangle4"placeholder="Password" name='senha' type='password'/>
                <input className="rectangle4"placeholder="Re-enter the Password" name='senha' type='password'/>
                <button type='button' className="sign">Sign in</button>

                <p>Already have an account? Sign In</p>
         </form>
          </div>
     
      </div>
    );
};

export default Register;