import { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/header-bg.jpg";
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";

// re usable components

class Home extends Component{

    render(){
        return(
            <div>
                <Header  
                    title="This is Title Props"
                    subtitle="This is SubTitle Props"
                    buttonText="This is buttonText"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services/>
            </div>
        )
    }
}

export default Home;