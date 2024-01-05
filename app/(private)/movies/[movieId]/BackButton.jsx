"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button className="btn-light text-black" onClick={() => router.back()}>
      BACK
    </button>
  );
}
