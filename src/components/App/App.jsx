import React from 'react';

import css from './app.module.css';
import Header from '../Header/header';

const App = () => {
  return (
    <div className={css.wrapper}>
      <Header />
      <div className={css.content}>
        <div className={css.container}>
          <div className={css.contenttop}>
            <div className={css.categories}>
              <ul style={{ display: 'flex' }}>
                <li className={css.liactive}>All</li>
                <li className={css.categoriesactive}>Meat</li>
                <li className={css.categoriesactive}>Vegetarian</li>
                <li className={css.categoriesactive}>Grill</li>
                <li className={css.categoriesactive}>Sharp</li>
                <li className={css.categoriesactive}>Closed</li>
              </ul>
            </div>
            <div className={css.sort}>
              <div className={css.sortlabel}>
                <svg
                  style={{ marginRight: 8 }}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b style={{ marginRight: 8 }}>Sort by:</b>
                <span className={css.popularity}>Popularity</span>
              </div>
              <div className={css.sortpopup}>
                <ul className={{ oveflow: 'hidden' }}>
                  <li className={css.priceactive}>popularity</li>
                  <li className={css.price}>price</li>
                  <li className={css.price}>alphabet</li>
                </ul>
              </div>
            </div>
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