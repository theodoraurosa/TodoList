
import"./Login.css"
import React from "react";
import imagem from "../../assets/Rectangle.png";


const Login = () => {
    return (
        <div className="flex-container" >

          <div className="rectangle1">
          <img src={imagem} alt="foto"></img>
          </div>
          <div className="rectangle2">

         <form className="rectangle3">
         <h1 className="sign_in">Sign In</h1>
         <input className="rectangle4" placeholder="E-mail" name='email' type='email'/>
         <input className="rectangle4"placeholder="Senha" name='senha' type='password'/>
         <button type='button' className="sign">Sign in</button>


         <div class="social-login">
            
            <a href="https://accounts.google.com/" class="social-button google" title="Login com Google">
                <i class="fab fa-google"></i>
            </a>
          
            <a href="https://www.facebook.com/login" class="social-button facebook" title="Login com Facebook">
                <i class="fab fa-facebook-f"></i>
            </a>
        </div>
         <p>Don't have an account? Sign up</p>
         </form>
          </div>
         
     

     
      </div>
    );
};

export default Login;