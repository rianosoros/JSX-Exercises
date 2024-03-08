const MAX_NAME_LENGTH_TO_SHOW = 6;

function Person({age, hobbies, name}) {
    const voteText = age >= 18 ? 'Please go vote!' : 'You must be 18 to vote.';

    return (
        <div>
        <h1>{name.length > MAX_NAME_LENGTH_TO_SHOW ? name.substring(0, MAX_NAME_LENGTH_TO_SHOW) + '...' : name}</h1>
        <p>Age: {age}</p>
        <p>Hobbies: {hobbies.join(', ')}</p>
        <p>{voteText}</p>
        </div>
    );
    }