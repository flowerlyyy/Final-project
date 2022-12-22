import '../Map/Map.scss';
    import img1 from "../Map/map.png";
    export const Map = () => {
      return (
        <section className="narrow-container">
          <div className="left-container ">
            <h2 className='deliver-h2'>Where we deliver</h2>
            <div className="text">
              See if we're delivering to you right now! Use the search engine by entering the postal code of your
              locality and see if we can deliver your order there.
            </div>
            <div className="body-form">
              <form>
                <input className="name-form" type="search" placeholder="City name" />
    
                <input className="nip-form" type="search" placeholder="NIP" />
              </form>
            </div>
    
            <button>Check</button>
    
            <div className="salammm">
              <div>
                <div className="circle"></div>
                <div className="square"></div>
              </div>
              <div className="all-text">
                <div className="daily-time">
                  <h4>Daily between </h4>
                  <h3>18:00</h3>
                  <h4>and</h4>
                  <h3>00:00</h3>
                </div>
    
                <p className='fotter-text'>
                  Vivamus nec tempus erat. Proin laoreet, risus id malesuada tempor <a className='map-a' href="{#}">Click here</a>
                </p>
              </div>
            </div>
          </div>
          <div className="right-container">
            <img src={img1} alt="map"/>
          </div>
        </section>
  
  );
};
