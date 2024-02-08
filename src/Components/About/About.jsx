import { useEffect } from "react";
function About() {
    useEffect(() => {
        document.title = "About Page";
    }, []);
    return (
        <div className="container p-5">
            <div className="row justify-content-center mt-5 p-4">
                <div className="col-lg-9 mt-5">
                    <div className="text-center">
                        <h1 className="fw-bold">About Component</h1>
                    </div>
                    <p className="star-line d-flex align-items-center justify-content-center">
                        <span className="border-bottom flex-grow-1 mx-2 border border-black"></span>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <span className="border-bottom flex-grow-1 mx-2 border border-black"></span>
                    </p>
                    <div className="row p-4 mt-2 fw-semibold">
                        <div className="col">
                            Freelancer is a free bootstrap theme created by Route. The
                            download includes the complete source files including HTML, CSS,
                            and JavaScript as well as optional SASS stylesheets for easy
                            customization.
                        </div>
                        <div className="col">
                            Freelancer is a free bootstrap theme created by Route. The
                            download includes the complete source files including HTML, CSS,
                            and JavaScript as well as optional SASS stylesheets for easy
                            customization.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
