import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Info } from './components/info.jsx'
import { ActiveWindow } from './components/ActiveWindow.jsx';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  return (
    < ThemeProvider
      breakpoints = { [ 'xxxl' ,  'xxl' ,  'xl' ,  'lg' ,  'md' ,  'sm' ,  'xs' ,  'xxs' ] }
      minBreakpoint = " xxs "
    > 
      <div className="App">
        <Form>
          <h1 className="App__title b-2">Управление рассылками</h1>
          <p className="App__description mb-5 mt-4">Здравствуйте, Андрей. Выберите, категории писем, от которых хотите отписаться.<br /> Но пожалуйста, исключите только те категории, которые действительно вас не интересуют. <br />Мы обещаем слать только полезные письма где 😊</p>
          
          <div className="App__section-total">
            <h4 className="App__section-title">Общие уведомления</h4>
            <Form.Group className="mb-3 d-flex" controlId="section">
              <Form.Label className="w-50 App__small-title">Приветственная серия</Form.Label>
              <Form.Check 
                type="switch"
                id="custom-switch"
              />
              <Form.Text className="text-muted ms-5">
                4 полезных и емких письма в течение месяца            
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="section">
              <Form.Label className="w-50 App__small-title">Образовательные вебинары</Form.Label>
              <Form.Check 
                type="switch"
                id="custom-switch"
              />
              <Form.Text className="text-muted ms-5">
                Бесплатные вебинары проходят 1 раз в 2 недели. <br />Вы будете получать 2 письма с напоминанием <br />о предстоящем вебинаре            
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="section">
              <Form.Label className="w-50 App__small-title">
                Личные сообщения
                <Info />
              </Form.Label>
              <Form.Check 
                type="switch"
                id="custom-switch"
              />
              <Form.Text className="text-muted ms-5">
              <Form.Select aria-label="Default select example">
                <option>Мгновенно</option>
                <option value="1">1 раз в день</option>
                <option value="3">Отключить</option>
              </Form.Select>
              </Form.Text>
            </Form.Group>
          </div>

          <div className="App__section-site">
            <h4 className="App__section-title">Уведомление по Сайтам</h4>
            <Form.Group className="mb-3 d-flex" controlId="section">
              <Form.Label className="w-50 App__small-title">Новости</Form.Label>
              <Form.Check 
                type="switch"
                id="custom-switch"
              />
              <Form.Text className="text-muted ms-5">           
              </Form.Text>
            </Form.Group>
          </div>

          <div className="App__section-total">
            <h5 className="App__section-title">Поисковые агенты</h5>
            
            <Form.Group className="mb-3 d-flex" controlId="section">
              <Form.Label className="w-50 d-block">
                Бизнес
                <Form.Text className="d-flex justify-content-between">
                  <div className="d-flex flex-wrap">
                    <ActiveWindow name={"Seo"} />
                    <ActiveWindow name={"Продвижение"} />
                    <ActiveWindow name={"Аналитика"} />
                  </div>      
                  <Button variant="link" className="me-5">Детали</Button>
                </Form.Text>
              </Form.Label>
              <Form.Check 
                type="switch"
                className="mt-5"
                id="custom-switch"
              />
              <Form.Text className="text-muted ms-5 mt-5">       
              Поисковый агент присылает 1 письмо <br />в неделю и только при условии, что найдены <br />новые площадки<br />    
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="section">
              <Form.Label className="w-50 App__small-title d-block">
                123
                <Form.Text className="d-flex justify-content-between">
                  <div className="d-flex flex-wrap">
                    <ActiveWindow name={"Seo"} />
                    <ActiveWindow name={"Продвижение"} />
                  </div>      
                  <Button variant="link" className="me-5">Детали</Button>
                </Form.Text>
              </Form.Label>
              <Form.Check 
                type="switch"
                className="mt-5"
                id="custom-switch"
              />
              <Form.Text className="text-muted ms-5 mt-5">       
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="section">
              <Form.Label className="w-50 App__small-title d-block">
                SEO
                <Form.Text className="d-flex justify-content-between">
                  <div className="d-flex flex-wrap">
                    <ActiveWindow name={"Seo"} />
                    <ActiveWindow name={"Продвижение"} />
                    <ActiveWindow name={"Аналитика"} />
                  </div>      
                  <Button variant="link" className="me-5">Детали</Button>
                </Form.Text>
              </Form.Label>
              <Form.Check 
                type="switch"
                className="mt-5"
                id="custom-switch"
              />
              <Form.Text className="text-muted ms-5 mt-5">       
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 d-flex" controlId="section">
              <Form.Label className="w-50 App__small-title d-block">
                Бурж ссылки
                <Form.Text className="d-flex justify-content-between">
                  <div className="d-flex flex-wrap">
                    <ActiveWindow name={"Биржи ссылок: Не обнаружен"} />
                  </div>      
                  <Button variant="link" className="me-5">Детали</Button>
                </Form.Text>
              </Form.Label>
              <Form.Check 
                type="switch"
                className="mt-5"
                id="custom-switch"
              />
              <Form.Text className="text-muted ms-5 mt-5">       
              </Form.Text>
            </Form.Group>
          </div>

          <h5 className="App__section-title">Рекламные компании</h5>
          <Form.Group className="mb-3 d-flex" controlId="section">
            <Form.Label className="w-50 App__small-title">
            Строительство домов в Украине
            </Form.Label>
            <Form.Check 
              type="switch"
              id="custom-switch"
            />
            <Form.Text className="text-muted ms-5">
            <Form.Select aria-label="Default select example">
              <option>Мгновенно</option>
              <option value="1">1 раз в день</option>
              <option value="3">Отключить</option>
            </Form.Select>
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3 d-flex" controlId="section">
            <Form.Label className="w-50 App__small-title">
            Строительство домов в Украине
            </Form.Label>
            <Form.Check 
              type="switch"
              id="custom-switch"
            />
            <Form.Text className="text-muted ms-5">
            <Form.Select aria-label="Default select example">
              <option>Мгновенно</option>
              <option value="1">1 раз в день</option>
              <option value="3">Отключить</option>
            </Form.Select>
            </Form.Text>
          </Form.Group>

          <div className="App__section-site">
            <h4 className="App__section-title">Уведомление по Телеграму</h4>
            <Form.Group className="mb-3 d-flex" controlId="section">
              <Form.Label className="w-50 App__small-title">Новости</Form.Label>
              <Form.Check 
                type="switch"
                id="custom-switch"
              />
              <Form.Text className="text-muted ms-5">     
              <Form.Select aria-label="Default select example">
              <option>Мгновенно</option>
              <option value="1">1 раз в день</option>
              <option value="3">Отключить</option>
            </Form.Select>      
              </Form.Text>
            </Form.Group>
            
          </div>


          <div className="buttons">
            <Button variant="secondary" type="submit">
              По умолчанию
            </Button>
            <Button variant="primary ms-4" type="submit">
              Сохранить изменения
            </Button>
          </div>

        </Form>
      </div>
    </ ThemeProvider >
  );
}

export default BasicExample;