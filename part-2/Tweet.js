function Tweet({ date, message, name, username }) {
    return (
        <div classname="tweet">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3 classname ="username">{username}</h3>
            <h3 classname ="date">{date}</h3>
        </div>

    );
  }