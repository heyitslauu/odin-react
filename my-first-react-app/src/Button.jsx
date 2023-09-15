/* eslint-disable react/prop-types */ 
// export const Button = (props) => {

//     const buttonStyle = {
//         color: props.color,
//         fontSize: props.fontSize + 'px'
//     }

//     return (
//         <button style={buttonStyle}>{props.text}</button>
//     )
// }


export const Button = ({text, color, fontSize, handleIncrement}) => {

    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    }

    return (
        <button  style={buttonStyle} onClick={handleIncrement}>{text}</button>
    )
}


Button.defaultProps = {
    text: "Click me also",
    color: "green",
    fontSize: 12
}