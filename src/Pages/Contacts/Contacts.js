import './Contacts.css';

function Contacts() {
  return (
    <>
  <section class="book grey ">
     <div class="container">
      <h2 class="page_tit">Связаться с нами</h2>
      <p class="page_desc">Мы считаем, что все движущие силы перемен дают вам те компоненты, которые вам необходимо изменить, чтобы создать действительно происходящее..</p>
      <form action="" class="form form_book">
                <div class="form_in flex">
                  <div class="form_input">
                    <span class="form_tit">Имя</span>
                    <input type="text" class="input input_txt" placeholder="Введите ваше имя" />
                  </div>
                  <div class="form_input">
                    <span class="form_tit">Email</span>
                    <input type="text" class="input input_txt" placeholder="Введите адрес электронной почты" />
                  </div>


                  <div class="form_input form_input_big">
                    <span class="form_tit">Предмет</span>
                    <input type="text" class="input input_txt" placeholder="Написать тему" />
                  </div>

                  <div class="form_input form_input_big">
                    <span class="form_tit">Сообщение
                    </span>
                    <input type="text" class="input_messege  input_txt" placeholder="Напишите свое сообщение" />
                  </div>


                  <div class="form_btn">
                    <button class="btn btn_red" type="submit">Отправлять</button>
                  </div>
                </div>

              </form>
            </div>
            <div class="address">
              <div class="container">
                <div class="address_in flex">
                  <div class="address_card">
                    <h4 class="address_tit">Связаться с нами:</h4>
                    <a href="tel:+(996)705533214" class="address_link">+(996)705533214</a>
                  </div>
                  <div class="address_card">
                    <h4 class="address_tit">Время работы</h4>
                    <p class="address_txt">с Понедельника по Суботтом: с 9:00 до 17:00</p>
                    <p class="address_txt"> Воскресения: с 9:00 до 15:00</p>
                  </div>
                  <div class="address_card">
                    <h4 class="address_tit">Наше место нахождения:</h4>
                    <p class="address_txt">123 Bridge Street </p>
                    <p class="address_txt">Nowhere Land,LA 12345</p>
                    <p class="address_txt">United States</p>
                  </div>

                </div>
              </div>
            </div>
            <iframe className='carta' src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad5a7c4015459fbbd3ccfbc4ce02fea4007a57b71f906ad5e6ea04b38caa25dff&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>

          </section>
</>
        );
}

        export default Contacts;