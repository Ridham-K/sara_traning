function ScoreCard(){

    const name = "Riddham";
    const score = 87;
    const isPassed = score >= 50;

    return(
        <div>
            <h2>{name}</h2>
            <p>Result: {isPassed ? "Pass" : "Fail"}</p>
            <span>Score + 10: {score + 10}</span>
        </div>
    )
}

export default ScoreCard;