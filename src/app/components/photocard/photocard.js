import styles from "./photocard.module.scss"

function PhotoCard() {
    return (
        <div className={styles.PhotoContainer + " h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg"}>
            <img className="lg:h-36 md:h-36 w-full object-cover object-center" src="https://weds360-production.s3.amazonaws.com/store/photo/431/src/large-6792d00acebc42fc36a6abba09f4513b.jpeg" alt="Irresistible appetizers’ corner" />
            <div className="p-2"><h1 className={styles.PhotoCardHeader + " text-center  text-lg font-semibold"}>Irresistible appetizers’ corner</h1></div>
        </div>
    )
}

export default PhotoCard;