export interface MediaGroup {
  label: string;
  audios?: string[];
  videos?: string[];
  images?: string[];
  links?: { url: string; label: string }[];
}
export interface Gift {
  id: string;
  title: string;
  description: string;
  media?: {
    images?: string[];
    audios?: string[];
    videos?: string[];
    links?: { url: string; label: string }[];
  };
  mediaGroups?: MediaGroup[]; // ✅ 새로 추가된 속성
  next: string | null;
  prev: string | null;
}

export const gifts: Gift[] = [
  {
    id: "birthday-songs",
    title: "🎶 치코의 생일 축하 노래",
    description: "치코가 준비한 두 개의 생일 노래를 함께 감상해봐! 🎤",
    mediaGroups: [
      {
        label: "🎼 오늘은 리코의 날",
        audios: ["/audio/오늘은_리코의_날.mp3"],
        videos: ["/video/오늘은_리코의_날.mp4"],
      },
      {
        label: "🎼 방송을 켜면 (With You)",
        audios: ["/audio/방송을_켜면.mp3"],
        videos: ["/video/방송을_켜면.mp4"],
      },
    ],
    next: "birthday-bg",
    prev: null,
  },
  // 📺 2. 생일 기념 방송 배경 (이미지가 여러 개)
  {
    id: "birthday-bg",
    title: "📺 생일 기념 방송 배경",
    description: "리코의 생일 방송을 더욱 특별하게 만들어줄 맞춤형 배경!",
    media: {
      images: ["/images/day_room_final.png", "/images/night_room_final.png"],
    },
    next: "birthday-illustration",
    prev: "song-with-you",
  },
  // 🎨 3. 생일 기념 일러스트
  {
    id: "birthday-illustration",
    title: "🎨 생일 기념 일러스트",
    description: "리코의 생일을 기념하는 특별한 일러스트!",
    // media: { images: ["/images/birthday_illustration.png"] },
    media: { images: ["/images/1743267638862.png"] },
    next: "stellachiko19",
    prev: "birthday-bg",
  },
  // 🌟 4. 별 이름 - Stellachiko19 (여러 개의 링크 포함)
  {
    id: "stellachiko19",
    title: "🌟 별 이름 - Stellachiko19",
    description: "리코의 이름이 밤하늘에서도 빛날 수 있도록 별을 선물했어! ✨",
    media: {
      images: ["/images/star.png"],
      links: [
        { url: "https://osr.org/oms/ko/LPL485491", label: "⭐ 별 위치 보기" },
        { url: "https://stars.osr.org/LPL485491", label: "🌠 별 페이지 보기" },
      ],
    },
    next: "minecraft-chiko-skin",
    prev: "birthday-illustration",
  },
  // 🎮 5. 마인크래프트 치코 스킨 공개
  {
    id: "minecraft-chiko-skin",
    title: "🎮 마인크래프트 치코 스킨 공개",
    description: "리코랜드에서 치코의 마인크래프트 스킨을 만나볼 수 있어!",
    media: { images: ["/images/chiko_skin.png"] },
    next: "chiko-bread",
    prev: "stellachiko19",
  },
  // 🍞 6. 리코랜드 기념품 – 치코빵 공개
  {
    id: "chiko-bread",
    title: "🍞 리코랜드 기념품 – 치코빵 공개",
    description: "리코랜드에서 만날 수 있는 특별한 기념품, 치코빵!",
    media: { images: ["/images/chiko_bread.png"] },
    next: "rikoland",
    prev: "minecraft-chiko-skin",
  },
  // 🎢 7. 마인크래프트 리코랜드
  {
    id: "rikoland",
    title: "🎢 마인크래프트 리코랜드",
    description:
      "🎠 마인크래프트 속에서 리코만을 위한 특별한 놀이공원을 만들었어!",
    media: { images: ["/images/riko_invite.png"] },
    next: "video-moments",
    prev: "chiko-bread",
  },
  // 🎞 8. 방송 영상 모음
  {
    id: "video-moments",
    title: "🎞 방송 영상 모음",
    description: "리코와 함께했던 추억들을 한데 모아 영상으로 정리했어!",
    media: { videos: ["/video/riko_moments.mp4"] },
    next: "video-foreign",
    prev: "rikoland",
  },
  // 🌍 9. 외국인 축하 영상
  {
    id: "video-foreign",
    title: "🌍 외국인 축하 영상",
    description: "외국인 유튜버들이 준비한 생일 축하 영상! 🌎",
    media: { videos: ["/video/foreign_fans.mp4"] },
    next: "video-streamers",
    prev: "video-moments",
  },
  // 🎥 10. 스트리머 축하 영상
  {
    id: "video-streamers",
    title: "🎥 스트리머 축하 영상",
    description: "리코와 함께했던 스트리머들의 축하 메시지! 📽️",
    media: { videos: ["/video/streamers.mp4"] },
    next: "cake-map",
    prev: "video-foreign",
  },
  // 🎂 11. 마인크래프트 케이크 축하맵
  {
    id: "cake-map",
    title: "🎂 마인크래프트 케이크 축하맵",
    description:
      "🎇 하트 폭죽 이벤트와 함께 리코의 생일을 완벽하게 마무리하자!",
    media: { images: ["/images/cake_map_t.png"] },
    next: null,
    prev: "video-streamers",
  },
];
