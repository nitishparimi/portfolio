import React from "react";
import profile from './profile.jpg'
import './Navigation.css';

function Home(){
    return(
        <div>
             <section>
                <div class="para">
                <h1 class="h1">Welcome this is my portfolio</h1>

                   
                
               
                </div>
                <div class="image">
                <img class="profile" src={profile} alt="profile" />
                </div>
            </section>
        </div>
    );
}


export default Home;
