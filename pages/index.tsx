import Link from "next/link";
import { gifts } from "@/data/gifts";
import "../styles/globals.css"; // ✅ 스타일 적용

export default function Home() {
  return (
    <div className="container">
      <h1>🎉 유즈하 리코 생일 선물 🎉</h1>
      <ul>
        {gifts.map((gift) => (
          <li key={gift.id}>
            <Link href={`/gifts/${gift.id}`}>
              <span className="gift-title">{gift.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
