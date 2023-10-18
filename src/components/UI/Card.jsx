import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const Card = (props) => {
    return (
        <div class="card">
            {props.children}
        </div>
    )

}

export default Card;