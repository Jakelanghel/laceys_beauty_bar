import { images } from "../../../constants/images";

export const servicesData = [
  {
    path: "lashes",
    title: "lashes",
    multiService: false,
    details: [
      ` At Lacey's Beauty Bar, we know our stuff! Your lash health is the
    most important aspect to us! We take xpride in our ability to
    customize each set to your lashes!`,
      `We offer different styles of lashes depending on what you're looking
    to get! We offer classic, hybrid, volume and mega volume lash
    extensions. We offer a variety of lengths and curls. We use nothing
    but the best products that the Industry has to offer!`,
      `We are patient, thorough and trained to properly apply extensions.
    Quality care, quality products and quality service are our main
    goals at LBB!`,
    ],
    services: [
      {
        title: "Full set of eyelash extensions",
        description: "Classic, Hybrid, Volume, Mega Volume",
        price: "$140 - $170",
      },
      {
        title: "Full Set of Teen Lashes",
        description: "18 & Under",
        price: "$130",
      },
      {
        title: "Eyelash refill",
        description: "Needed every 2-3 weeks",
        price: "$60 - $80",
      },
      {
        title: "Eyelash lift and tint",
        description: "Give your natural lashes the perfect curl",
        price: "$70",
      },
      {
        title: "seven day mini fill",
        description: "Give your natural lashes the perfect curl",
        price: "$50",
      },
    ],
    imgArr: [
      images.mobileLashesImg_1,
      images.mobileLashesImg_2,
      images.mobileLashesImg_3,
      images.mobileLashesImg_4,
      images.mobileLashesImg_5,
      images.mobileLashesImg_6,
      images.mobileLashesImg_7,
    ],
  },
  {
    path: "eyebrows",
    title: "eye brows",
    multiService: false,
    details: [
      `At Lacey's Beauty Bar, we specialize in eyebrow shaping. We're
      very precise and detail oriented when deciding on a shape that
      best suits your face. We offer a number of services for your
      brows.`,
    ],
    services: [
      {
        title: "Eyebrow lamination",
        description: `Achieve the "brow gel" look for 3-6 weeks`,
        price: "$60",
      },
      {
        title: "Eyebrow shaping & tint",
        price: "$40",
      },
      {
        title: "Eyebrow shaping & henna",
        price: "$60",
      },
      {
        title: "Eyebrow shaping",
        description: "Wax / Trim / Pluck",
        price: "$20",
      },
    ],
    imgArr: [
      images.mobileBrowsImg_1,
      images.browsImg_2,
      images.mobileBrowsImg_3,
      images.browsImg_4,
      images.browsImg_5,
      images.mobileBrowsImg_6,
      images.browsImg_7,
    ],
  },
  {
    path: "skin",
    title: "Skin Care",
    multiService: false,
    details: [
      ` At Lacey's Beauty Bar, we offer top tier services using some of
      the Industry's leading brands and products. We offer a variety
      of facials using Farmhouse Fresh Products and Esthemax hydro
      jelly masks. We have facials formulated for all skin types. `,
      `Our facial services include a mini massage focusing on your neck,
      décolleté, arms and hands. We look forward to enhancing your
      natural beauty and helping to perfect your skin!`,
    ],
    services: [
      {
        title: "One hour facial (with mini massage)",
        description: `Charcoal Blemish Control, Rosacea Reducing, Intensive Healing, 
        Lighten, Tighten & Brighten, Collagen & Elasticity, Anti-Aging`,
        price: "$70",
      },
      {
        title: "Vajacial Treatments",
        price: "$60 - $100",
      },
      {
        title: "Dermaplaning",
        description: `Achieve an even skin tone & texture by removing dead skin cells.`,
        price: "$65",
      },
      {
        title: "Mini facial",
        description: "30 min facial",
        price: "$40",
      },
    ],
    imgArr: [
      images.skinImg_1,
      images.skinImg_2,
      images.skinImg_3,
      images.skinImg_4,
      images.skinImg_5,
      images.skinImg_6,
      images.skinImg_7,
    ],
  },
  {
    path: "waxing-tanning",
    title: "waxing / tanning",
    multiService: true,
    services: [
      {
        title: "waxing",
        details: `We are waxing queens at the beauty bar! We offer a variety of
            waxes, from full face to full Brazilian. Whether you're looking
            to have smooth legs or smooth underarms, we have you covered!
            Book your wax today for smooth skin year round!`,
        services: [
          {
            title: "Brazilian Wax",
            price: "$80",
          },
          {
            title: "Bikini Wax",
            price: "$50",
          },
          {
            title: "Leg Wax",
            price: "$50",
          },
          {
            title: "Full Face Wax",
            description: "Sideburns, lip and chin",
            price: "$30 - $40",
          },
          {
            title: "Men's Back / Chest Wax",
            price: "$40",
          },
        ],
      },
      {
        title: "tanning",
        details: `At Lacey's Beauty Bar, we offer the best spray tanning on the
            market! We offer a healthy and safe method using organic
            ingredients. Our all-natural solution provides a beautiful
            golden glow that you can achieve year round. Lacey is
            specifically trained to provide luxurious tans that leave you
            with a beautiful and natural color.`,
        price: "$30 - $40",
        services: [
          {
            title: "level 1",
            description: "light spray tan",
          },
          {
            title: "level 2",
            description: "light spray tan",
          },
          {
            title: "level 3",
            description: "light spray tan",
          },
          {
            title: "level 4",
            description: "light spray tan",
          },
        ],
      },
    ],
  },
];
