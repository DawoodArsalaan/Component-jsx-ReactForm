import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="/">Component JSX React Forms App</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>

                        <li class="nav-item active">
                            <Link class="nav-link" to="/createshop">Add Shop</Link>
                        </li>

                        <li class="nav-item active">
                            <Link class="nav-link" to="/createproduct">Add Product</Link>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}