import BaseButton from '../baseButton'

const ButtonLime = (props) => {
    const { text, handleFunction, width, height } = props
    const classCus =
        'text-white bg-lime hover:bg-limeHover font-bold border-lime hover:border-limeHover'
    return (
        <BaseButton
            classCus={classCus}
            width={width}
            height={height}
            text={text}
            handleFunction={handleFunction}
        />
    )
}

export default ButtonLime
