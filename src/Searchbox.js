import React from 'react'
import "./Searchbox.css"

const Searchbox = () => {
    return (
        <>
            <div className="Searchbox">
                <div className="Searchbar">
                    <input type="text" submi placeholder='Search Here' />
                    <span id='Search_btn'><button>Search</button></span>
                </div>

                {/* <div className="Search_list">
                    <ul>
                        <li>Hello</li>
                    </ul>
                </div> */}

            </div>
        </>
    )
}

export default Searchbox;