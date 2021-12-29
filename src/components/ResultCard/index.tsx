import './styles.css';

type Props = {
    title: string;
    description: string;
}

const ResultCard = ( { title, description} : Props) => {

    return (
        <div className="result-container">
            <h4>teste</h4>
        </div>
    );
}

export default ResultCard;