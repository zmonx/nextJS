import Link from "next/link";
import React from "react";

function index(props) {
    const { data } = props;
    return (
        <>
    


            <div class="col-sm-4">
                <div class="product-image-wrapper">
                    <div class="single-products">
                        <div class="productinfo text-center">
                            <img src={data.image} width="360" height="360" />
                            <p>{data.title} </p>
                            <p>{data.price} ฿</p>
                            
                        </div>
                    </div>
                </div>
            </div>






        </>
    );

}

export default index;