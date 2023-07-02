


import React from "react";


// Home component - displays two images related to the Women's World Cup.

function Home(){
    return (
        <div className="home-page">
            {/*Image #1*/}
            <img src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-10/womens-world-cup-logo.jpg?itok=aLdnds58" 
            alt="Main Home Image" 
            style={{ width: "1500px", height: "auto"}}
            />
            {/*Image #2*/}
            <img src="https://digitalhub.fifa.com/transform/ec443084-8ae2-4834-91f6-5655c872bc5d/FIFA_FWWC23_16x9_FIFAplus_Banner_v4?io=transform:fill,height:868,width:1536&quality=100" 
            alt="Secondary Home Image" 
            style={{ width: "1500px", height: "auto"}}
            />
        </div>
    )
}



export default Home;
