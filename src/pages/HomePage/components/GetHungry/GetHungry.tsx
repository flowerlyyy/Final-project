import './GetHungry.scss';
import img1 from '../GetHungry/blackheart.png';
import img2 from '../GetHungry/blacknumber.png';
import img3 from '../GetHungry/chefhat.png';
import img4 from '../GetHungry/delivery.png';
import img5 from '../GetHungry/greennumber.png';
import img6 from '../GetHungry/grup.png';
import img7 from '../GetHungry/phone.png';
import img8 from '../GetHungry/yellownumber.png';
export const GetHungry = () => {
  return (
    <>
      <section className="get_hungry">
        <div className="both-container">
          <div className="container-get_hungry-left">
            <div className="div-text">
              <h2 className="get_hungry_title">Order faster than you can get hungry</h2>
              <div className="heart">
                <img src={img1} />
              </div>
            </div>

            <div>
              <img className="group" src={img6} />
            </div>
          </div>

          <div className="container-get_hungry-right">
            <div>
              <p className="choosing-text">
                By choosing our box catering at your door, you can be sure that your ready meals will be
                healthy and tasty.
              </p>
            </div>
            <div className="cycle">
              <div className="class">
                <div className="cycle-one">
                  <img src={img5} />
                </div>
                <div className="box">
                  <div>
                    <img src={img7} />
                  </div>
                  <div className="left">
                    <h3>Choose a diet that suits you</h3>
                    <p>Qui blanditiis praesentium voluptatum deleniti atque maxime placeat facere</p>
                  </div>
                </div>
              </div>
              <div className="class-two">
                <div className="cycle-two">
                  <img src={img2} />
                </div>
                <div className="box">
                  <div>
                    <img src={img3} />
                  </div>
                  <div>
                    <h3>We start cooking</h3>
                    <p>
                      Qui blanditiis praesentium voluptatum deleniti atque veniet ut et voluptates repudiandae
                    </p>
                  </div>
                </div>
              </div>

              <div className="class-three">
                <div className="cycle-three">
                  <img src={img8} />
                </div>
                <div className="box">
                  <div>
                    <img src={img4} />
                  </div>
                  <div>
                    <h3>We're bringing the diet to your door, bon appetit! </h3>
                    <p>Qui blanditiis praesentium voluptatum deleniti atque</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
