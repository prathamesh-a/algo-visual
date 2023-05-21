export default function PseudoCodeLine(props) {
    let classes
    if (props.active) classes = 'bg-black text-yellow-300 rounded-sm'
    else classes = 'text-green-300'

    return (
        <p className={classes}>{props.text}</p>
    )
}