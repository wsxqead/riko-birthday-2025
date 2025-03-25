export interface Gift {
  id: string;
  title: string;
  description: string;
  media: {
    images?: string[];
    audios?: string[];
    videos?: string[];
    links?: { url: string; label: string }[];
  };
  next: string | null;
  prev: string | null;
}

export const gifts: Gift[] = [
  // 🎶 1-1. 축하 노래 - "오늘은 리코의 날"
  {
    id: "1-1",
    title: "🎶 축하 노래 – 오늘은 리코의 날",
    description: "리코를 위해 치코가 준비한 특별한 노래! 🎵",
    media: {
      audios: ["/audio/오늘은_리코의_날.mp3"],
      videos: ["/video/오늘은_리코의_날.mp4"],
    },
    next: "1-2",
    prev: null,
  },
  // 🎶 1-2. 축하 노래 - "방송을 켜면 (With You)"
  {
    id: "1-2",
    title: "🎶 축하 노래 – 방송을 켜면 (With You)",
    description: "만약 리코가 치코에게 노래를 선물한다면...? 🎼",
    media: {
      audios: ["/audio/방송을_켜면.mp3"],
      videos: ["/video/방송을_켜면.mp4"],
    },
    next: "2",
    prev: "1-1",
  },
  // 📺 2. 생일 기념 방송 배경 (이미지가 여러 개)
  {
    id: "2",
    title: "📺 생일 기념 방송 배경",
    description: "리코의 생일 방송을 더욱 특별하게 만들어줄 맞춤형 배경!",
    media: {
      images: ["/images/broadcast_bg1.png", "/images/broadcast_bg2.png"],
    },
    next: "3",
    prev: "1-2",
  },
  // 🎨 3. 생일 기념 일러스트
  {
    id: "3",
    title: "🎨 생일 기념 일러스트",
    description: "리코의 생일을 기념하는 특별한 일러스트!",
    media: { images: ["/images/birthday_illustration.png"] },
    next: "4",
    prev: "2",
  },
  // 🌟 4. 별 이름 - Stellachiko19 (여러 개의 링크 포함)
  {
    id: "4",
    title: "🌟 별 이름 - Stellachiko19",
    description: "리코의 이름이 밤하늘에서도 빛날 수 있도록 별을 선물했어! ✨",
    media: {
      images: ["/images/star.png"],
      links: [
        { url: "https://osr.org/oms/ko/LPL485491", label: "⭐ 별 위치 보기" },
        { url: "https://stars.osr.org/LPL485491", label: "🌠 별 페이지 보기" },
      ],
    },
    next: "5",
    prev: "3",
  },
  // 🎮 5. 마인크래프트 치코 스킨 공개
  {
    id: "5",
    title: "🎮 마인크래프트 치코 스킨 공개",
    description: "리코랜드에서 치코의 마인크래프트 스킨을 만나볼 수 있어!",
    media: { images: ["/images/chiko_skin.png"] },
    next: "6",
    prev: "4",
  },
  // 🍞 6. 리코랜드 기념품 – 치코빵 공개
  {
    id: "6",
    title: "🍞 리코랜드 기념품 – 치코빵 공개",
    description: "리코랜드에서 만날 수 있는 특별한 기념품, 치코빵!",
    media: { images: ["/images/chiko_bread.png"] },
    next: "7",
    prev: "5",
  },
  // 🎢 7. 마인크래프트 리코랜드
  {
    id: "7",
    title: "🎢 마인크래프트 리코랜드",
    description:
      "🎠 마인크래프트 속에서 리코만을 위한 특별한 놀이공원을 만들었어!",
    media: { images: ["/images/rikoland.png"] },
    next: "8",
    prev: "6",
  },
  // 🎞 8. 방송 영상 모음
  {
    id: "8",
    title: "🎞 방송 영상 모음",
    description: "리코와 함께했던 추억들을 한데 모아 영상으로 정리했어!",
    media: { videos: ["/video/riko_moments.mp4"] },
    next: "9",
    prev: "7",
  },
  // 🌍 9. 외국인 축하 영상
  {
    id: "9",
    title: "🌍 외국인 축하 영상",
    description: "외국인 유튜버들이 준비한 생일 축하 영상! 🌎",
    media: { videos: ["/video/foreign_fans.mp4"] },
    next: "10",
    prev: "8",
  },
  // 🎥 10. 스트리머 축하 영상
  {
    id: "10",
    title: "🎥 스트리머 축하 영상",
    description: "리코와 함께했던 스트리머들의 축하 메시지! 📽️",
    media: { videos: ["/video/streamers.mp4"] },
    next: "11",
    prev: "9",
  },
  // 🎂 11. 마인크래프트 케이크 축하맵
  {
    id: "11",
    title: "🎂 마인크래프트 케이크 축하맵",
    description:
      "🎇 하트 폭죽 이벤트와 함께 리코의 생일을 완벽하게 마무리하자!",
    media: { images: ["/images/cake_map.png"] },
    next: null,
    prev: "10",
  },
];
