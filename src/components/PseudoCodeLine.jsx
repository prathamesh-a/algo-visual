export default function PseudoCodeLine(props) {
    let classes
    if (props.active) classes = 'bg-zinc-900 text-cyan-300 rounded-sm'
    else classes = 'text-green-300'

    return (
        <p className={classes}>{props.text}</p>
    )
}