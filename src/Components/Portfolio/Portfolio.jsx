import Child from "../Child/Child";
import { useEffect } from "react";
function Portfolio() {
    useEffect(() => {
        document.title = 'Portfolio Page';
    }, []);
    const imageLinks = [
        "https://images.freeimages.com/images/large-previews/6d4/little-cat-1409488.jpg",
        "https://media.istockphoto.com/id/1467703406/photo/very-fluffy-fluffball-orange-scottish-fold-straight-cat-kitten-loaf.jpg?s=2048x2048&w=is&k=20&c=zT2biW8nl9ilzWSOZQE1d44BNxkl9RP0YRs3t9Q7b3U=",
        "https://images.freeimages.com/images/large-previews/c7d/sleeping-cat-1531012.jpg",
        "https://images.freeimages.com/images/large-previews/515/cat-story-2-1394652.jpg",
        "https://media.istockphoto.com/id/1311193375/photo/beautiful-photograph-of-a-cat-silhouette-at-sunset.jpg?s=1024x1024&w=is&k=20&c=mKkd051He8_fLg89AymKWsNiC4O54HrFTWA74soKeaU=",
        "https://media.istockphoto.com/id/1208470518/photo/gray-striped-cat-with-womans-hand-on-a-brown-background.jpg?s=2048x2048&w=is&k=20&c=6GQYDEAJ6skx4k4HW34ymNuAUfikDGEdJwBmcbEGIO8="
    ];

    return (
        <div className="container">
            <div className="text-center">
                <h1 className="fw-bold">Portfolio Component</h1>
            </div>
            <p className="star-line d-flex align-items-center justify-content-center">
                <span className="border-bottom flex-grow-1 mx-2 border border-black"></span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <span className="border-bottom flex-grow-1 mx-2 border border-black"></span>
            </p>
            <div className="p-2">
                <div className="row gy-4">
                    <Child imageLinks={imageLinks} />
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
