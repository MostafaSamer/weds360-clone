import { Link } from "react-router-dom";
import styles from "./photocard.module.scss"

function PhotoCard({ image, name, state }) {
    return (
        <Link to={state}>
            <div className={styles.PhotoContainer + " h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg"}>
                <img className="lg:h-36 md:h-36 w-full object-cover object-center" src={image} alt="Irresistible appetizers’ corner" />
                <div className="p-2"><h1 className={styles.PhotoCardHeader + " text-center  text-lg font-semibold"}>{name}</h1></div>
            </div>
        </Link>
    )
}

export default PhotoCard;