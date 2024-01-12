import { useEffect } from 'react';
import { Categories } from '../../components/Categories/Categories';
import { PizzaBlock } from '../../components/PizzaBlock/PizzaBlock';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setCategoryId } from '../../redux/slices/filterSlice.js';
import { fetchPizzas, selectPizzaData } from '../../redux/slices/pizzasSlice';

export const Home = () => {
  const dispatch = useDispatch();

  const { items, status } = useSelector(selectPizzaData);
  const { categoryId } = useSelector(selectFilter);

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const getPizzas = async () => {
    const category = categoryId > 0 ? `&category=${categoryId}` : '';

    dispatch(fetchPizzas({ category }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getPizzas();
  }, [categoryId]);

  const pizzas = items.map((item) => (
    <PizzaBlock
      price={item.price}
      title={item.title}
      imageUrl={item.imageUrl}
      sizes={item.sizes}
      key={item.id}
      id={item.id}
      category={item.category}
      desc={item.desc}
    />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories categoryId={categoryId} onClickCategory={onClickCategory} />
      </div>
      <h2 className="content__title">Продукты:</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка</h2>
          <p>Не удалось получить данные</p>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? 'Загрузка...' : pizzas}
        </div>
      )}
    </div>
  );
};
