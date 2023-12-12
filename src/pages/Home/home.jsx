import React from 'react';
import { Categories, SortPopup, PizzaBlock } from 'components';
import css from './home.module.css';
import pizzas from '../../assets/pizza.json';

function Home() {
  return (
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
        {pizzas.map(obj => (
          <PizzaBlock {...obj} />
        ))}
      </div>
    </div>
  );
}

export default Home;
