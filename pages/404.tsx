/** @jsxImportSource @emotion/react */
import Link from "next/link";

export const NotFound = () => {
  return (
    <div>
      <h1>Oooops</h1>
      <h2>That page could not be found</h2>
      <p>
        {" "}
        Go back to the
        <Link href="/">
          <a> Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
