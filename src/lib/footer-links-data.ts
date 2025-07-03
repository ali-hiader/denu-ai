import DescriptionBikni from "@/components/footerLinksComponents/description-bikni";
import DescriptionCelebrity from "@/components/footerLinksComponents/description-celebrity";
import DescriptionGirlfriend from "@/components/footerLinksComponents/description-girlfriend";
import DescriptionPothos from "@/components/footerLinksComponents/description-pothos";
import HeaderCelebrity from "@/components/footerLinksComponents/heading-celebrity";
import HeadingAnime from "@/components/footerLinksComponents/heading-anime";
import HeadingBikni from "@/components/footerLinksComponents/heading-bikni";
import HeadingGirlfriend from "@/components/footerLinksComponents/heading-girlfriend";
import HeadingPothos from "@/components/footerLinksComponents/heading-pothos";

export const footerLinksData = [
  {
    link: "/celebrity-nudes",
    heading: HeaderCelebrity,
    paragraph:
      "Transform any celebrity photo into stunning nude images with our advanced AI technology",
    description: DescriptionCelebrity,
    cta: "Try Celebrity Nudes",
    clothesPic: "/celeb1-clothed.jpg",
    nudePic: "/celeb1-nude.jpg",
  },
  {
    link: "/anime-ai-nude",
    heading: HeadingAnime,
    paragraph:
      "Transform your favorite anime characters with our specialized AI technology. Experience high-quality anime nude transformations with authentic artistic style.",
    cta: "Create Anime Nudes",
    clothesPic: "/anime-clothes1.jpg",
    nudePic: "/anime-nude1.webp",
  },
  {
    link: "/bikini-to-nude",
    heading: HeadingBikni,
    paragraph:
      "Convert swimwear photos to realistic nude images with our advanced AI technology",
    description: DescriptionBikni,
    cta: "Convert Bikini Photos",
    clothesPic: "/anime-clothes1.jpg",
    nudePic: "/anime-nude1.webp",
  },
  {
    link: "/ai-girlfriend",
    heading: HeadingGirlfriend,
    paragraph:
      "Design your ideal virtual companion with our cutting-edge AI technology",
    description: DescriptionGirlfriend,
    cta: "Create Your AI Girlfriend",
    clothesPic: "/ai-girlfriend1-clothed.jpg",
    nudePic: "/ai-girlfriend1-nude.jpg",
  },
  {
    link: "/nudify-photos",
    heading: HeadingPothos,
    paragraph:
      "Transform any photo into stunning nude images with our powerful AI nudifier",
    description: DescriptionPothos,
    cta: "Undress Now!",
    clothesPic: "/anime-clothes1.jpg",
    nudePic: "/anime-nude1.webp",
  },
];
