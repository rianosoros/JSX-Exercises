function App() {
    return (
      <div>
        <Tweet
          name="Rian Johnson"
          username="rhino"
          date={new Date().toDateString()}
          message="im just a rhino"
        />
        <Tweet
          name="Nicole Smith"
          username="smitherines"
          date={new Date().toDateString()}
          message="i love rhinos!"
        />
        <Tweet
          name="Shrekford Williams"
          username="Shrekford"
          date={new Date().toDateString()}
          message="get out of my swamp!"
        />
      </div>
    );
  }