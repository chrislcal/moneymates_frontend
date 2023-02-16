import ProgressBar from './ProgressBar';
import cash from "../icons/cash.png"
import '../styles/categoryCard.css';


function CategoryCard() {
    const testData =
        { bgcolor: "#5D1788", completed: 60 };

    return (
        <div className="category-container">
            <div className="category-card">
                <div className="progress-bar">
                    <ProgressBar bgcolor={testData.bgcolor} completed={testData.completed} />
                </div>
                <h1 className="category-name">Groceries</h1>
                <div className="icon">
                    <img src="https://icons8.com/icon/CUByzzUJpaet/fast-moving-consumer-goods" alt="Shopping basket" />
                </div>
                <div className="remaining-funds">
                    <p><span className="bold">5000/</span>3000</p>
                    <img className="money-icon" src={cash} alt="Cash" />
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;