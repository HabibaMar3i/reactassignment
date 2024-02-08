import { useEffect } from "react";
function Contact() {
    useEffect(() => {
        document.title = "Contact Page";
    }, []);
    return (
        <>
            <div className="container w-50">
                <h1 className="text-center p-3 fw-bold mt-4">Contact Section</h1>
                <div className="star-line d-flex align-items-center justify-content-center">
                    <span className="border-bottom flex-grow-1 mx-2 font-weight-bold border border-black"></span>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span className="border-bottom flex-grow-1 mx-2 font-weight-bold border border-black"></span>
                </div>
            </div>
            <form>
                <div className="container p-3 mt-4">
                    <div className="mb-3 col-md-4 container col-lg-9 p-3">
                        <input type="text" className="form-control border-0 bg-transparent" id="exampleInputName1" placeholder="UserName" />
                    </div>
                    <div className="mb-3 col-md-4 container col-lg-9 p-3 ">
                        <input type="number" className="form-control border-0 bg-transparent" id="exampleInputAge1" placeholder="UserAge" />
                    </div>
                    <div className="mb-3 col-md-4 container col-lg-9 p-3 ">
                        <input type="email" className="form-control border-0 bg-transparent" id="exampleInputEmail1" placeholder="UserEmail" />
                    </div>
                    <div className="mb-3 col-md-4 container col-lg-9 p-3 ">
                        <input type="password" className="form-control border-0 bg-transparent" id="exampleInputPassword1" placeholder="UserPassword" />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-secondary">Send Message</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Contact;

