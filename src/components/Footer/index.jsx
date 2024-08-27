function Footer() {
  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/LolRB",
    },
    {
      name: "fab fa-linkedin",
      link: "www.linkedin.com/in/luis-rodrigo-bueno-martínez-a83314242",
    },
  ];

  return (
    <footer className="flex-row px-1">
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer">
          <i className={icon.name}></i>
        </a>
      ))}
    </footer>
  );
}

export default Footer;
