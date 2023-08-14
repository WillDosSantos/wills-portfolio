import Link from 'next/link';

// components/Navbar.js
function Navbar({onTagSelect}) {
  const tags = ["case studies", "apps & games", "illustration", "motion"]; // Add more tags as needed
  return (
    <nav className="navbar">
        <ul>
        <Link href="/">
            <li onClick={() => onTagSelect(null)}>All</li>
        </Link>
      {tags.map((tag) => (
        <li key={tag} onClick={() => onTagSelect(tag)}>
          {tag}
        </li>
      ))}
      </ul>
      <button className="btn btn--outline">Connect</button> {/* This could be a modal or a link */}
    </nav>
  );
}

export default Navbar;
