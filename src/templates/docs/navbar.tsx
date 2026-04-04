import SharedNavbar from "../shared/navbar";

const DocsNavbar = ({ onMenuToggle }: { onMenuToggle: () => void }) => (
  <SharedNavbar activePage="docs" onMenuToggle={onMenuToggle} />
);

export default DocsNavbar;
