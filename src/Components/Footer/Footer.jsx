import React from "react";

export default function Footer() {
    return (
        <footer className="footer bg-dark text-white text-center py-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3 className="text-uppercase">Location</h3>
                        <div className="p-3">
                            315 John Daniel Drive
                            Clark, MO 65343
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="text-uppercase">Around the Web</h3>
                        <div className="p-2">
                            <i className="fab fa-facebook p-2 fs-3"></i>
                            <i className="fab fa-twitter p-2 fs-3"></i>
                            <i className="fab fa-linkedin p-2 fs-3"></i>
                            <i className="fas fa-globe p-2 fs-3"></i>
                        </div>
                    </div>
                    <div className="col">
                        <h3 className="text-uppercase">About Freelancer</h3>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom bg-dark text-white text-center">
                <div className="container py-2">
                    <p className="m-0">Copyright © Your Website 2021</p>
                </div>
            </div>
        </footer>
    );
}
