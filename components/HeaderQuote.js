
// components/HeaderQuote.js
function HeaderQuote({ quote, author }) {
  return (
    <div className="header-quote">
        <h2>{quote}</h2>
        <span style={{marginTop: '1em'}} className="speaker">{author}</span>
    </div>
  );
}

export default HeaderQuote;