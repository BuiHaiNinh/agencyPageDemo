import { Component } from "react";
import SingleService from "./SingleService";

const services = [
    {title: "Service Title Prop", description: "Service Description Prop", icon: "fa-shopping-cart"},
    {title: "Service Title Prop", description: "Service Description Prop", icon: "fa-laptop"},
    {title: "Service Title Prop", description: "Service Description Prop", icon: "fa-lock"}
]

class Services extends Component{

    render(){
        return(
            // <!-- Services-->
            <section className="page-section" id="services">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row text-center">
                        {services.map((service, index) => {
                            return <SingleService {...service} key={index}/>
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Services;