import { Component } from "react";
import Header from "../Common/Header";
import image from "../assets/img/about.png";
import Timeline from "../Common/Timeline";
import Team from "../Common/Team";
import Services from "../Common/Services";
import Portfolio from "../Common/Portfolio";


class About extends Component{

    render(){
        return(
            <div>
                <Header  
                    title="ABOUT PAGE Title Props"
                    subtitle="ABOUT PAGE SubTitle Props"
                    showButton={false}
                    image={image}
                />
                <Timeline />
                <Team />
                
            </div>
        )
    }

}

export default About;