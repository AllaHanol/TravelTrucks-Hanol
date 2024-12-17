import Review from "../Review/Review";
import css from "./Reviews.module.css";

export default function Reviews({ reviews }) {
    return (
        <section className={css.reviews}>
            <ul className={css.list}>
                {reviews.map((review, index) => (
                    <li key={index} >
                        <Review review={review}/>
                    </li>
                    
                ))}
            </ul>

        </section>
    );
}