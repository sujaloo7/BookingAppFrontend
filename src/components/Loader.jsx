import React from 'react'

const Loader = () => {
    return (
        <> <div className="col-sm-1 ms-auto me-auto " style={{ marginTop: "240px" }}>
            <div class="spinner-border  text-center mt-5 pt-5 p-5 " role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div></>
    )
}

export default Loader