import React from "react";
import BookModel from "../../../models/BookModel";
import { Link } from "react-router-dom";

export const ReturnBook: React.FC<{book: BookModel}> = (props) => {
    return (
        <div className="col-xs-6 col-sm-6 col-lg-3 mb-3">
            <div className="text-center">
                {props.book.img ?
                    <img src={props.book.img} alt="Gatsby book cover"
                    width='151' height='233' />
                    :
                    <img src={require("../../../Images/BooksImages/gatsby.jpg")} alt="Gatsby book cover"
                    width='151' height='233' />
                }
                

                <h6 className="mt-2">{props.book.title}</h6>
                <p>{props.book.author}</p>
                <Link to={`checkout/${props.book.id}`} className="btn main-color">Reserve</Link>
            </div>
        </div>
    );
}