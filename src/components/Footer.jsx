import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className=" flex lg:flex-row flex-col justify-between items-center py-7 lg:px-40 px-4 text-center bg-black text-white">
        <div className=" py-5">
          Copyright © 2022 Xenium. All rights reserved.
        </div>
        <div className=" flex lg:flex-row flex-col text-center gap-5">
          <p>
            <Link to="/terms-of-use">TERMS OF USE</Link>{" "}
          </p>
          <p>
            <Link to="/privacy-policy">PRIVACY POLICY</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
