
interface Props {
    number: number;
    hadlerNumberIncrement: () => void;
}

const CounterButton = ({ number, hadlerNumberIncrement }: Props) => {

    return (
        <div>
            <button onClick={hadlerNumberIncrement}>{number}</button>
        </div>
    )
}
export default CounterButton