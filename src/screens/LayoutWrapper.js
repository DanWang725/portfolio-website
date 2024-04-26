const LayoutWrapper = ({ children }) => {
  return (
    <div className="layout">
      <div className="content-section">
        <div className="std-container content-background">{children}</div>
      </div>
    </div>
  );
};
export default LayoutWrapper;
