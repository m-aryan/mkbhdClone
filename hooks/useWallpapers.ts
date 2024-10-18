export interface Wallpaper {
  url: string;
  name: string;
}

interface FullWallpaper extends Wallpaper {
  liked: boolean;
  suggested: boolean;
  library: boolean;
}

export function useWallpapers(): Wallpaper[] {
  return [
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/fyx1eR_KQ5GuvWnKU7kfog",
      name: "Euro Mountains",
      //   liked: true,
      //   suggested: true,
      //   library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/emq-MN6ERM6yz2iOeccIyA",
      name: "Papy Cat",
      //   liked: true,
      //   suggested: true,
      //   library: true,
    },
    {
      url: "https://ideogram.ai/assets/image/lossless/response/-6HFwP7cSb2-BxiDNMFTDw",
      name: "Goal Keeper",
      //   liked: false,
      //   suggested: true,
      //   library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/grtS8AsZRGyLm3VJ2SHS7g",
      name: "Heritage",
      //   liked: true,
      //   suggested: true,
      //   library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/0reS7n7eRfClLKHIEiWJUw",
      name: "Late night",
      //   liked: true,
      //   suggested: false,
      //   library: true,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/O0l3cIsdSJm7CRjGqrb5-Q",
      name: "Motivation",
      //   liked: false,
      //   suggested: true,
      //   library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/6n67jVOxTRW0-xEqMpLw9A",
      name: "Night sky",
      //   liked: false,
      //   suggested: true,
      //   library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/IfLz4vd4Tfy5fnBlMN0cLA",
      name: "Sunrise",
      //   liked: false,
      //   suggested: true,
      //   library: false,
    },
    {
      url: "https://ideogram.ai/assets/progressive-image/balanced/response/Hma-KogESI-h9o8oyO1YKg",
      name: "Shoes",
      //   liked: false,
      //   suggested: true,
      //   library: false,
    },
  ];
}
