import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";


function Card({ name, description, price, link }) {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p className={styles.price}>${price}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <Link to={link}  target="_blank"  className={styles.botao}>
          <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default Card;
