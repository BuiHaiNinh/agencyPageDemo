import { Component } from "react";

import mem1 from "../assets/img/team/2.jpg";
import TeamMember from "./TeamMember";

const members = [
    {name: "A", role: "Role 1", image: mem1},
    {name: "A", role: "Role 1", image: mem1},
    {name: "A", role: "Role 1", image: mem1}
]

class Team extends Component{

    render(){
        return(
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {members.map((member, index) => {
                        return <TeamMember {...members} key={index}/>
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        )
    }
}

export default Team;