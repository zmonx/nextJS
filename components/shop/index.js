
import React from "react";
import Card from "../products";

function index(props) {
    return (
        <>
            <div className="row">
                {/* card one */}
                {props.data.map((data) => (
                    <Card data={data} />
                ))}
            </div>
        </>
    );
}
export default index;