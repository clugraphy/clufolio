export const METADATA = {
  title: "BRYO Appetite Restaurant",
  description:
    "Restaurant BRYO Pizza Paste Salate",
  siteUrl: "https://bryo.eatme/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "TimelineMenu",
    ref: "timeline",
  },
  {
    name:"GridMenu",
    ref: "gridmenu"
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

// Type strings.

export const TYPED_STRINGS = [
  "I know once people get connected to real food, they never change back",
  "A recipe has no soul. You, as the cook, must bring soul to the recipe.",
  "Life is uncertain. Eat dessert first.",
  "Food is symbolic of love when words are inadequate",
];

export const EMAIL = "alexandru.catalin.stroe@gmail.com";

// Social links

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/bryo_resturant/",
  facebook: "https://www.facebook.com/bryo_resturant",
  twitter: "https://twitter.com/bryo_resturant",
};

// Timeline section 
export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "BREAKFAST",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Green Omlette",
    size: ItemSize.SMALL,
    subtitle: "oua,patrunjel, baby spanac, parmezan, mini boconcinni, rosii cherry, castravete 😎",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/1.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Eggs and stuff",
    size: ItemSize.SMALL,
    subtitle: "oua,patrunjel, baby spanac, parmezan, mini boconcinni, rosii cherry, castravete 😎",
    image: "/timeline/down_outline_arrow.svg",
    slideImage: "/timeline/2.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "SALAD",
    size: ItemSize.LARGE,
    slideImage: "/timeline/2.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Buffala salad",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Salata cu pui teryiaki cu susan",
    size: ItemSize.SMALL,
    subtitle: "Motion Graphics content for Product Launch 🚀",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "RISOTTO",
    size: ItemSize.LARGE,
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Risotto cu trio de ciuperci si trufe",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
 
  {
    type: NodeTypes.CHECKPOINT,
    title: "Risotto cu creveti si sparanghel",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/9.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "PASTA by BRYO",
    size: ItemSize.LARGE,
    slideImage: "/timeline/9.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Tagliatelle cu vita frageda si rucola",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/7.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Tagliatelle cu vita frageda si rucola",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/7.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Penne quattro formaggi cu trufe",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Penne carbonara al forno",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/4.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "OUR DISH",
    size: ItemSize.LARGE,
    slideImage: "/timeline/4.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/1.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/2",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/3",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/6.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/9.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/8.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/7.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/1.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "DESERT",
    subtitle:"bune de tot",
    slideImage: "/timeline/4.jpg",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/3.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/4.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "CLASIC PIZZA",
    subtitle:"bune de tot",
    slideImage: "/timeline/4.jpg",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "BRYO PIZZA",
    subtitle:"bune de tot",
    slideImage: "/timeline/4.jpg",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Dorada mediteraneana",
    size: ItemSize.SMALL,
    subtitle:
      "penne, usturoi, bacon, mozzarella, vin alb, smantana",
    image: "/timeline/smear.svg",
    slideImage: "/timeline/5.jpg",
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
 

  

];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "GOOGLE TAG HERE.";
