const getHash = () => {
  return /#\/[^#]*(#[^#]+)/.exec(window.location.hash)?.[1] ?? null;
};

const scrollToHash = (hash) => {
  const element = document.getElementById(hash);
  if (element) {
    // Calculate the target scroll position 50px from the top of the section
    const targetScrollPosition =
      element.getBoundingClientRect().top + window.scrollY - 50;

    // Scroll to the target position smoothly
    window.scrollTo({
      top: targetScrollPosition,
      behavior: "smooth",
    });
  }
};

export { getHash, scrollToHash };
