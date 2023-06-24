import BaseButton from '../baseButton'

const ButtonLime = (props) => {
    const { text, handleFunction } = props
    const classCus =
        'text-white bg-lime hover:bg-limeHover font-bold border-lime hover:border-limeHover'
    return (
        <BaseButton
            classCus={classCus}
            text={text}
            handleFunction={handleFunction}
        />
    )
}

export default ButtonLime
