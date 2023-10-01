import React, { useState } from "react";

const NavButtons = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="">
      {project.image && (
            <Image
              src={project.image}
              alt={project.slug}
              width={700}
              height={700}
            />
          )}
    </div>
  );
};

export default NavButtons;
