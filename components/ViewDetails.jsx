import Link from "next/link";
import React from "react";


const ViewDetails = ({ href, classStyle }) => {
  return (
    <Link className={classStyle} href={href}>
      View Details
    </Link>
  );
};

export default ViewDetails;