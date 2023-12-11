import React from 'react';

import css from './app.module.css';
import { Header, Categories, SortPopup } from 'components';

const App = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.content}>
        <div className={css.container}>
          <div className={css.contenttop}>
            <Categories
              onClickItem={name => console.log(name)}
              items={['Meat', 'Vegetarian', 'Grill', 'Sharp', 'Closed']}
            />
            <SortPopup items={['popularity', 'price', 'alphabet']} />
          </div>
          <h2 className={css.contenttitle}>All Pizzas</h2>
          <div className={css.contentitems}>
            <div className={css.block}>
              <img
                style={{ width: 260 }}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
              <h4 className={css.blocktitle}>Cheeseburger Pizza</h4>
              <div className={css.blockselector}>
                <ul className={css.choice}>
                  <li className={css.choicelist}>subtle</li>
                  <li className={css.choicelist}>traditional</li>
                </ul>
                <ul className={css.choice}>
                  <li className={css.choicelist}>26 h.</li>
                  <li className={css.choicelist}>30 h.</li>
                  <li className={css.choicelist}>40 h.</li>
                </ul>
              </div>
              <div className={css.bottom}>
                <div className={css.blockprice}>from 39 $</div>
                <div className={css.buttonoutline}>
                  <svg
                    style={{ fill: '#fe5f1e', marginRight: 2 }}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Add</span>
                  <i className={css.i}>2</i>
                </div>
              </div>
            </div>{' '}
            <div className={css.block}>
              <img
                style={{ width: 260 }}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
              <h4 className={css.blocktitle}>Cheeseburger Pizza</h4>
              <div className={css.blockselector}>
                <ul className={css.choice}>
                  <li className={css.choicelist}>subtle</li>
                  <li className={css.choicelist}>traditional</li>
                </ul>
                <ul className={css.choice}>
                  <li className={css.choicelist}>26 h.</li>
                  <li className={css.choicelist}>30 h.</li>
                  <li className={css.choicelist}>40 h.</li>
                </ul>
              </div>
              <div className={css.bottom}>
                <div className={css.blockprice}>from 39 $</div>
                <div className={css.buttonoutline}>
                  <svg
                    style={{ fill: '#fe5f1e', marginRight: 2 }}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Add</span>
                  <i className={css.i}>2</i>
                </div>
              </div>
            </div>{' '}
            <div className={css.block}>
              <img
                style={{ width: 260 }}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
              <h4 className={css.blocktitle}>Cheeseburger Pizza</h4>
              <div className={css.blockselector}>
                <ul className={css.choice}>
                  <li className={css.choicelist}>subtle</li>
                  <li className={css.choicelist}>traditional</li>
                </ul>
                <ul className={css.choice}>
                  <li className={css.choicelist}>26 h.</li>
                  <li className={css.choicelist}>30 h.</li>
                  <li className={css.choicelist}>40 h.</li>
                </ul>
              </div>
              <div className={css.bottom}>
                <div className={css.blockprice}>from 39 $</div>
                <div className={css.buttonoutline}>
                  <svg
                    style={{ fill: '#fe5f1e', marginRight: 2 }}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Add</span>
                  <i className={css.i}>2</i>
                </div>
              </div>
            </div>{' '}
            <div className={css.block}>
              <img
                style={{ width: 260 }}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
              <h4 className={css.blocktitle}>Cheeseburger Pizza</h4>
              <div className={css.blockselector}>
                <ul className={css.choice}>
                  <li className={css.choicelist}>subtle</li>
                  <li className={css.choicelist}>traditional</li>
                </ul>
                <ul className={css.choice}>
                  <li className={css.choicelist}>26 h.</li>
                  <li className={css.choicelist}>30 h.</li>
                  <li className={css.choicelist}>40 h.</li>
                </ul>
              </div>
              <div className={css.bottom}>
                <div className={css.blockprice}>from 39 $</div>
                <div className={css.buttonoutline}>
                  <svg
                    style={{ fill: '#fe5f1e', marginRight: 2 }}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Add</span>
                  <i className={css.i}>2</i>
                </div>
              </div>
            </div>{' '}
            <div className={css.block}>
              <img
                style={{ width: 260 }}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
              <h4 className={css.blocktitle}>Cheeseburger Pizza</h4>
              <div className={css.blockselector}>
                <ul className={css.choice}>
                  <li className={css.choicelist}>subtle</li>
                  <li className={css.choicelist}>traditional</li>
                </ul>
                <ul className={css.choice}>
                  <li className={css.choicelist}>26 h.</li>
                  <li className={css.choicelist}>30 h.</li>
                  <li className={css.choicelist}>40 h.</li>
                </ul>
              </div>
              <div className={css.bottom}>
                <div className={css.blockprice}>from 39 $</div>
                <div className={css.buttonoutline}>
                  <svg
                    style={{ fill: '#fe5f1e', marginRight: 2 }}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Add</span>
                  <i className={css.i}>2</i>
                </div>
              </div>
            </div>{' '}
            <div className={css.block}>
              <img
                style={{ width: 260 }}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
              <h4 className={css.blocktitle}>Cheeseburger Pizza</h4>
              <div className={css.blockselector}>
                <ul className={css.choice}>
                  <li className={css.choicelist}>subtle</li>
                  <li className={css.choicelist}>traditional</li>
                </ul>
                <ul className={css.choice}>
                  <li className={css.choicelist}>26 h.</li>
                  <li className={css.choicelist}>30 h.</li>
                  <li className={css.choicelist}>40 h.</li>
                </ul>
              </div>
              <div className={css.bottom}>
                <div className={css.blockprice}>from 39 $</div>
                <div className={css.buttonoutline}>
                  <svg
                    style={{ fill: '#fe5f1e', marginRight: 2 }}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Add</span>
                  <i className={css.i}>2</i>
                </div>
              </div>
            </div>{' '}
            <div className={css.block}>
              <img
                style={{ width: 260 }}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
              <h4 className={css.blocktitle}>Cheeseburger Pizza</h4>
              <div className={css.blockselector}>
                <ul className={css.choice}>
                  <li className={css.choicelist}>subtle</li>
                  <li className={css.choicelist}>traditional</li>
                </ul>
                <ul className={css.choice}>
                  <li className={css.choicelist}>26 h.</li>
                  <li className={css.choicelist}>30 h.</li>
                  <li className={css.choicelist}>40 h.</li>
                </ul>
              </div>
              <div className={css.bottom}>
                <div className={css.blockprice}>from 39 $</div>
                <div className={css.buttonoutline}>
                  <svg
                    style={{ fill: '#fe5f1e', marginRight: 2 }}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Add</span>
                  <i className={css.i}>2</i>
                </div>
              </div>
            </div>{' '}
            <div className={css.block}>
              <img
                style={{ width: 260 }}
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
              />
              <h4 className={css.blocktitle}>Cheeseburger Pizza</h4>
              <div className={css.blockselector}>
                <ul className={css.choice}>
                  <li className={css.choicelist}>subtle</li>
                  <li className={css.choicelist}>traditional</li>
                </ul>
                <ul className={css.choice}>
                  <li className={css.choicelist}>26 h.</li>
                  <li className={css.choicelist}>30 h.</li>
                  <li className={css.choicelist}>40 h.</li>
                </ul>
              </div>
              <div className={css.bottom}>
                <div className={css.blockprice}>from 39 $</div>
                <div className={css.buttonoutline}>
                  <svg
                    style={{ fill: '#fe5f1e', marginRight: 2 }}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                      fill="white"
                    />
                  </svg>
                  <span>Add</span>
                  <i className={css.i}>2</i>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
