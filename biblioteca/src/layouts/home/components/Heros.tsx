import React from "react";

export const Heros = () => {
    return (
        <div>
            <div className="d-none d-lg-block">
                <div className="row g-0 mt-5">
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-left"></div>
                    </div>
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                The Biblioteca team would like to know what you have been reading.
                                Whether it is to learn a new skill or grow within one, we will be able to provide the top content for you!
                            </p>
                            <a href="" className="btn main-color btn-lg text-white">Sign up</a>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
                        <div className="ml-2">
                            <h1>Our responsibility to the environment is a challenge!</h1>
                            <p className="lead">
                                Printed books require a lot of paper and we all know where paper comes from.
                                By reading the books on our online library, you are saving hunders and thousands of trees.
                                Join us on this mission to save trees and get rewarded by the love of nature.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-6">
                        <div className="col-image-right"></div>
                    </div>
                </div>
            </div>

            <div className="d-lg-none">
                <div className="container">
                    <div className="m-2">
                        <div className="col-image-left"></div>
                        <div className="ml-2">
                            <h1>What have you been reading?</h1>
                            <p className="lead">
                                The Biblioteca team would like to know what you have been reading.
                                Whether it is to learn a new skill or grow within one, we will be able to provide the top content for you!
                            </p>
                            <a href="" className="btn main-color btn-lg text-white">Sign up</a>
                        </div>
                    </div>

                    <div className="m-2">
                        <div className="col-image-right"></div>
                        <div className="mt-2">
                            <h1>Our responsibility to the environment is a challenge!</h1>
                            <p className="lead">
                                Printed books require a lot of paper and we all know where paper comes from.
                                By reading the books on our online library, you are saving hunders and thousands of trees.
                                Join us on this mission to save trees and get rewarded by the love of nature.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}