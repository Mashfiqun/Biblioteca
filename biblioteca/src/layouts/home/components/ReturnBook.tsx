import React from "react";

export const ReturnBook = () => {
    return (
        <div className="col-xs-6 col-sm-6 col-lg-3 mb-3">
            <div className="text-center">
                <img src={require("../../../Images/BooksImages/gatsby.jpg")} alt="Gatsby book cover"
                    width='151' height='233' />

                <h6 className="mt-2">The Great Gatsby</h6>
                <p>F. Scott Fitzgerald</p>
                <a href="" className="btn main-color text-white">Reserve</a>
            </div>
        </div>
    );
}