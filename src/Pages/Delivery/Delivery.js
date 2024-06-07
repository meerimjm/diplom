import './Delivery.css';
import port from "../../imges/port.jpeg"
import Delivery1 from "../../imges/Delivery/delivery1.png"
import Delivery2 from "../../imges/Delivery/delivery2.png"

function Delivery() {
  return (
    <>
     <section className='delivery'>
        <div className="container">
          <h2 className="delivery_tit">Оплата и доставка</h2>
          <h2 className="delivery_tit1">Формы оплаты заказа</h2>
          <div className="cards_delivery flex">

            <div className="card_delivery_left">
              <div className="card_left_img">
                <img className='delivery_img' src={Delivery1} alt="" />
              </div>
              <p className="delivery_txt">Безналичный расчет</p>
            </div>

            <div className="card_delivery_right">

                <div className="card_left_img">
                  <img className='delivery_img' src={Delivery2} alt="" />
                </div>
                <p className="delivery_txt"> Оплата наличными </p>

            </div>
          </div>
        </div>
      </section>
    
    </>




   
  );
}

export default Delivery;