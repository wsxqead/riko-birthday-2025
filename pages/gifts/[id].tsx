import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import Link from "next/link";
import { gifts, Gift } from "@/data/gifts";
import "../styles/globals.css"; // ✅ 스타일 적용

interface GiftPageProps {
  initialGift: Gift;
}

export default function GiftPage({ initialGift }: GiftPageProps) {
  const router = useRouter();
  const [gift, setGift] = useState<Gift | null>(initialGift);

  // ✅ `router.query.id` 타입 변환
  const currentId: string | null =
    typeof router.query.id === "string"
      ? router.query.id
      : router.query.id?.[0] ?? null;

  // ✅ useEffect로 동적 데이터 업데이트
  useEffect(() => {
    if (currentId) {
      const updatedGift = gifts.find((g) => g.id === currentId);
      if (updatedGift) setGift(updatedGift);
    }
  }, [currentId]);

  if (!gift) return <h1>404 - 선물을 찾을 수 없습니다.</h1>;

  return (
    <div className="container" key={currentId}>
      <div className="gift-card">
        <h1>{gift.title}</h1>
        <p>{gift.description}</p>
        {/* 🎨 여러 개의 이미지 표시 */}
        {gift.media.images && gift.media.images.length > 0 && (
          <div className="image-gallery">
            {gift.media.images.map((img, index) => (
              <Image
                key={`${currentId}-img-${index}`} // ✅ key에 currentId 포함하여 고유값 보장
                src={img}
                alt={`${gift.title} - 이미지 ${index + 1}`}
                width={500}
                height={300}
                layout="intrinsic"
                objectFit="contain"
                priority
              />
            ))}
          </div>
        )}
        {/* 🎵 여러 개의 오디오 파일 */}
        {gift.media.audios && gift.media.audios.length > 0 && (
          <div className="audio-list">
            {gift.media.audios.map((audio, index) => (
              <div key={`${currentId}-audio-${index}`}>
                <h3>🎼 오디오 {index + 1}</h3>
                <audio controls>
                  <source src={audio} type="audio/mpeg" />
                </audio>
              </div>
            ))}
          </div>
        )}
        {/* 🎬 여러 개의 비디오 파일 */}
        {gift.media.videos && gift.media.videos.length > 0 && (
          <div className="video-list" key={currentId}>
            {" "}
            {/* ✅ key에 currentId 지정 */}
            {gift.media.videos.map((video, index) => (
              <div key={`${currentId}-video-${index}`}>
                <h3>🎥 비디오 {index + 1}</h3>
                <video controls>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        )}
        {/* 🌍 여러 개의 링크 버튼 */}
        {gift.media.links && gift.media.links.length > 0 && (
          <div className="link-buttons">
            {gift.media.links.map((link, index) => (
              <a
                key={`${currentId}-link-${index}`}
                href={link.url}
                target="_blank"
                className="button"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        <div className="nav-buttons">
          {gift.prev && (
            <Link href={`/gifts/${gift.prev}`}>
              <button>⬅ 이전</button>
            </Link>
          )}
          <Link href="/">🏠 홈으로</Link>
          {gift.next && (
            <Link href={`/gifts/${gift.next}`}>
              <button>다음 ➡</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// 🎯 동적 경로 미리 생성
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = gifts.map((gift) => ({ params: { id: gift.id } }));
  return { paths, fallback: false };
};

// 🎯 초기 선물 데이터 제공
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const initialGift = gifts.find((g) => g.id === params?.id) || null;
  return { props: { initialGift }, notFound: !initialGift };
};
