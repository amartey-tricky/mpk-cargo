import { CldImage } from "next-cloudinary";
import Link from "next/link";

export default function Logo() {
  return (
    <section>
      <Link href="/">
        <CldImage
          src="logo_lhvmu4"
          alt="Mpk logo"
          width={80}
          height={80}
          priority
        />
      </Link>
    </section>
  );
}
