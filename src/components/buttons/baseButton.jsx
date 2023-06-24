const BaseButton = (props) => {
    const { classCus, width, height, text, handleFunction } = props
    return (
        <button
            className={`baseButton border-2 rounded-full px-4 py-2 transition duration-300 ease-in-out ${classCus}`}
            style={{ width: width ?? '150px', height: height ?? '46px' }}
            onClick={handleFunction}
        >
            {text}
        </button>
    )
}

export default BaseButton
