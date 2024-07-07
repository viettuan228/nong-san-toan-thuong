import StarRatingIcon from '../../icons/StarRatingIcon'

const CardHorizontalProductItem = ({
    width = '100%',
    height = '75px',
    src,
    alt = '',
    title = '',
    oldPrice = '15.000',
    newPrice = '10.000',
}) => {
    return (
        <div
            className={`cursor-pointer flex gap-3 rounded-lg overflow-hidden group`}
            style={{ width: width, height: height }}
        >
            <div
                className={`h-full overflow-hidden group-hover:scale-110 transition-transform duration-300`}
                style={{ width: height }}
            >
                <img
                    className="w-full h-full object-cover rounded-lg"
                    src={src}
                    alt={alt}
                />
            </div>
            <div className="h-full flex flex-col gap-1">
                <h3 className="font-bold text-lg text-textDark group-hover:text-organize transition-color duration-300">
                    {title}
                </h3>
                <div className="flex items-center gap-1">
                    <StarRatingIcon />
                    <StarRatingIcon />
                    <StarRatingIcon />
                    <StarRatingIcon />
                    <StarRatingIcon />
                </div>
                <div className="flex items-center gap-3 text-sm">
                    {oldPrice && (
                        <p className="text-gray line-through font-bold ">
                            {oldPrice}
                        </p>
                    )}
                    <p className="text-lime font-bold">
                        {newPrice ? newPrice : oldPrice}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardHorizontalProductItem
