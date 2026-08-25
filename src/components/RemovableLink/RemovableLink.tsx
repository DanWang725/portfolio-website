import { IconButton, Link, Typography } from "@mui/material";
import { ElementType, ReactNode, useState } from "react";
import { GiTrashCan } from "react-icons/gi";

interface RemovableLinkProps {
  value: string | ReactNode;
  onClick: () => void;
}

const RemovableLink: React.FC<RemovableLinkProps> = ({ value, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      underline="none"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      sx={{
        textDecoration: isHover ? "line-through" : "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {value}
    </Link>
  );
};
export default RemovableLink;
