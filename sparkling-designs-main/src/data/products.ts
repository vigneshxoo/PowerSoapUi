export interface Product {

  _id: string;
  code: string;
  name: string;
  image: string;
  images: string[];
  boxPieces: number;
  division: string;
  netPrice: number;
  boxPrice: number;
  mfs: number;
  isOffer?: boolean;
  offerDescription?: string;
}

export const mokeproducts: Product[] = [

  {
    _id: "8",
    code: "FG00990",
    name: "Nature Power Beauty Soap (Papaya) - 125 gm",
    image: "https://static.wixstatic.com/media/052b2d_2e2bb8ed707042f9adf362f335d81f2d~mv2.jpg/v1/fill/w_520,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/052b2d_2e2bb8ed707042f9adf362f335d81f2d~mv2.jpg",
    images: [
      "https://static.wixstatic.com/media/052b2d_20f28be217c145ee95e5cc4e4f921f04~mv2.jpg/v1/fill/w_520,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/052b2d_20f28be217c145ee95e5cc4e4f921f04~mv2.jpg",
      "https://static.wixstatic.com/media/052b2d_7d298b3139d94027ae0e3f83b3425d01~mv2.jpg/v1/fill/w_520,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/052b2d_7d298b3139d94027ae0e3f83b3425d01~mv2.jpg",
      "https://static.wixstatic.com/media/052b2d_c36938d15e174758989e7ca43423b687~mv2.jpg/v1/fill/w_520,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/052b2d_c36938d15e174758989e7ca43423b687~mv2.jpg",
      "https://static.wixstatic.com/media/052b2d_af3d21ab0a1949c984cde3c225d6cb31~mv2.jpg/v1/fill/w_520,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/052b2d_af3d21ab0a1949c984cde3c225d6cb31~mv2.jpg"
    ],
    boxPieces: 40,
    division: "POWER PREMIUM RANGE",
    netPrice: 22,
    boxPrice: 880,
    mfs: 5,
  },
  {
    _id: "1",
    code: "FG00482",
    name: "Tyko Liquid Pouch 500ML x 12Pcs MRP 50",
    image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg",
    images: [
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg"
    ],
    boxPieces: 12,
    division: "TYKO LIQUID DETERGENT (KA&KL)",
    netPrice: 40,
    boxPrice: 480,
    mfs: 0,
    isOffer: true,
    offerDescription: "Buy 10 boxes and get 1 box free! Limited time offer."
  },
  {
    _id: "2",
    code: "FG00812",
    name: "Power Jumbo Detergent Cake Blue 110 Gms x 78 Pcs",
    image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_45671615_1766048110.jpeg",
    images: [
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_45671615_1766048110.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_45671615_1766048110.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_45671615_1766048110.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_45671615_1766048110.jpeg"
    ],
    boxPieces: 78,
    division: "POWER JUMBO CAKE - KA, KL, AP, TL",
    netPrice: 5.10,
    boxPrice: 398,
    mfs: 0,
    isOffer: true,
    offerDescription: "Flat 10% off on bulk orders over 50 boxes."
  },
  {
    _id: "3",
    code: "FG00813",
    name: "Power Jumbo Detergent Cake Pink 110 Gms x 78 Pcs",
    image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg",
    images: [
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_28112053_1663223729.jpeg"
    ],
    boxPieces: 78,
    division: "POWER JUMBO CAKE - KA, KL, AP, TL",
    netPrice: 5.10,
    boxPrice: 398,
    mfs: 0,
  },
  {
    _id: "4",
    code: "FG00814",
    name: "Power Jumbo Detergent Cake Yellow 110 Gms x 78 Pcs",
    image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_46759288_1744112873.jpeg",
    images: [
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_46759288_1744112873.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_46759288_1744112873.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_46759288_1744112873.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_46759288_1744112873.jpeg"
    ],
    boxPieces: 78,
    division: "POWER JUMBO CAKE - KA, KL, AP, TL",
    netPrice: 5.10,
    boxPrice: 398,
    mfs: 0,
  },
  {
    _id: "5",
    code: "FG00484",
    name: "Tyko Liquid Pouch 1L x 12 Pcs MRP 99",
    image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_99597441_1711621186.png",
    images: [
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_99597441_1711621186.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_99597441_1711621186.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_99597441_1711621186.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_99597441_1711621186.png"
    ],
    boxPieces: 12,
    division: "TYKO LIQUID DETERGENT",
    netPrice: 79,
    boxPrice: 948,
    mfs: 0,
  },
  {
    _id: "6",
    code: "FG00958",
    name: "Tyko Liquid Pouch 6L x 2Pcs MRP 480",
    image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_64697215_1663153858.png",
    images: [
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_64697215_1663153858.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_64697215_1663153858.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_64697215_1663153858.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_64697215_1663153858.png"
    ],
    boxPieces: 2,
    division: "TYKO LIQUID DETERGENT",
    netPrice: 384,
    boxPrice: 768,
    mfs: 0,
  },
  {
    _id: "7",
    code: "FG00957",
    name: "Tyko Liquid Pouch 4L x 3Pcs MRP 340",
    image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_65007862_1723439028.jpeg",
    images: [
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_65007862_1723439028.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_65007862_1723439028.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_65007862_1723439028.jpeg",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_65007862_1723439028.jpeg"
    ],
    boxPieces: 3,
    division: "TYKO LIQUID DETERGENT",
    netPrice: 272,
    boxPrice: 816,
    mfs: 0,
  },
  {
    _id: "8",
    code: "FG00990",
    name: "Power Premium Detergent Bar 250g x 40 Pcs",
    image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_81769870_1725269779.png",
    images: [
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_81769870_1725269779.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_81769870_1725269779.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_81769870_1725269779.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_81769870_1725269779.png"
    ],
    boxPieces: 40,
    division: "POWER PREMIUM RANGE",
    netPrice: 22,
    boxPrice: 880,
    mfs: 5,
  },
  {
    _id: "8",
    code: "FG00990",
    name: "Power Premium Detergent Bar 250g x 40 Pcs",
    image: "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_81769870_1725269779.png",
    images: [
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_81769870_1725269779.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_81769870_1725269779.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_81769870_1725269779.png",
      "https://d8yt9z8a0r4xc.cloudfront.net/userImage/IMG_81769870_1725269779.png"
    ],
    boxPieces: 40,
    division: "POWER PREMIUM RANGE",
    netPrice: 22,
    boxPrice: 880,
    mfs: 5,
  },


];

