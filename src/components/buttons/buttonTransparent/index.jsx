import BaseButton from '../baseButton'

const ButtonTransparent = (props) => {
    const { text, handleFunction } = props
    const classCus =
        'text-lime hover:text-white font-bold bg-transparent hover:bg-lime border-lime'
    return (
        <BaseButton
            classCus={classCus}
            text={text}
            handleFunction={handleFunction}
        />
    )
}

export default ButtonTransparent
