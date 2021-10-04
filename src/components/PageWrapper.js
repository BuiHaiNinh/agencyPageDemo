import {Link} from 'react-router-dom';
import { Component } from "react";

class PageWrapper extends Component {

    render(){
        return(
            <div>
                {/* <!-- Navigation--> */}
                <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                    <div class="container">
                        <Link class="navbar-brand" to="/"><img src="assets/img/navbar-logo.svg" alt="..." /></Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i class="fas fa-bars ms-1"></i>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                                <li class="nav-item"><Link class="nav-link" to="/services">Services</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/portfolio">Portfolio</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/team">Team</Link></li>
                                <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* this.props.children will display whatever you include between the opening and closing tags when invoking a component. */}
                {this.props.children}
            </div>
        )
    }
}

export default PageWrapper;