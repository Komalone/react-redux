import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy= [
  {
    id: '01',
    title: 'my Book',
    price: 20,
    description: 'my first book published'
  },
  {
    id: '02',
    title: 'pen',
    price: 5,
    description: 'blue and black pen set'
  },
  {
    id: '03',
    title: 'color book',
    price: 30,
    description: 'painting book '
  },
  {
    id: '04',
    title: 'novel',
    price: 10,
    description: 'my fav novel'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy.map((item) => (<ProductItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />)
        )}
      </ul>
    </section>
  );
};

export default Products;
