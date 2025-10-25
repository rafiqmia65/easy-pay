import Image from "next/image";
import Link from "next/link";

const BrandLogo = () => {
  return (
    <Link href={"/"}>
      <Image src="/Logo.png" width={110} height={50} alt="Easy Pay"></Image>
    </Link>
  );
};

export default BrandLogo;
