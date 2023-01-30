import React from 'react'
import "./App.css"
import Searchbox from './Searchbox';
import Map from './Map';
const App = () => {
    return (
        <>
            <div className="App">
                <div className="App_body">
                    <div className="App_searchbox">
                        <Searchbox />
                    </div>
                    <div className="App_mapbox">
                        <Map />
                    </div>

                    <div className="App_infocard">


                    </div>
                </div>
            </div>
        </>
    )
}

export default App;