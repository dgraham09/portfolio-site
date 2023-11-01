const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span className="namesplit">
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))
      }
    </span>
  );
};

export default AnimatedLetters;
