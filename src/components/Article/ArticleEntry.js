import "./Article.css";
import { HashScroll } from "react-hash-scroll";
const ArticleEntry = ({ title, content, id, key }) => {
  const scrollToSection = (ref, behavior, position) => {
    console.log(ref, behavior, position);
    if (ref.current) {
      // Calculate the target scroll position 50px from the top of the section
      const targetScrollPosition =
        ref.current.getBoundingClientRect().top + window.scrollY - 50;

      // Scroll to the target position smoothly
      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <HashScroll hash={id} position="start" scrollFunc={scrollToSection}>
      <section className="article-entry" key={key} id={id}>
        <h1>{title}</h1>
        <p>{content}</p>
      </section>
    </HashScroll>
  );
};
export default ArticleEntry;
