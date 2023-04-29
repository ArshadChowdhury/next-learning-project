import React from "react";
import Link from "next/link";

const ViewDetails = ({ href, classStyle }) => {
  return (
    <Link className={classStyle} href={href}>
      View Details
    </Link>
  );
};

export default ViewDetails;
