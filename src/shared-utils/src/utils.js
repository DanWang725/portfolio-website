const getHash = () => {
  return /#\/[^#]+(#[^#]+)/.exec(window.location.hash)?.[1] ?? null;
};

export { getHash };
