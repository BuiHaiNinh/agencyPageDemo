import { Component } from "react";
import PortfolioItem from "./PortfolioItem";
import image from "../assets/img/portfolio/4.jpg";

const portfolios = [
    {title: "PF title", subtitle: "PF subtitle", image: image },
    {title: "PF title", subtitle: "PF subtitle", image: image },
    {title: "PF title", subtitle: "PF subtitle", image: image },
    {title: "PF title", subtitle: "PF subtitle", image: image },
    {title: "PF title", subtitle: "PF subtitle", image: image },
    {title: "PF title", subtitle: "PF subtitle", image: image }
]

class Portfolio extends Component{

    render(){
        return(
            //<!-- Portfolio Grid-->
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Portfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {portfolios.map((item, i) => {
                            return <PortfolioItem {...item} key={i} />
                        })}
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;