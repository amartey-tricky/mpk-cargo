import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function Logo() {
  return (
    <section>
      <Link href="/">
        <CldImage
          src="logo_lhvmu4"
          alt="Mpk logo"
          width={55}
          height={55}
          priority
        />
      </Link>
    </section>
  );
}
