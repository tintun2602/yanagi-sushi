//Import Images

import sushi1 from "./img/sushi1.jpg";
import sushi2 from "./img/sushi2.jpg";
import sushi3 from "./img/sushi3.jpg";
import sushi4 from "./img/sushi4.jpg";
import sushi5 from "./img/sushi5.jpg";
import sushi6 from "./img/sushi6.jpg";

export const MenuState = () => {
  return [
    {
      title: "Sashimi",
      mainImg: sushi1,
      secondaryImg: sushi4,
      url: "/meny/sushi1",
      awards: [
        {
          title: "Liten (15 Biter)",
          description: "SERVERES MIX OG RIS ",
          price: "169 Kr",
        },
        {
          title: "Stor (20 Biter)",
          description: "SERVERES MIX OG RIS ",
          price: "209 Kr",
        },
      ],
    },
    {
      title: "Maki (8 Biter)",
      mainImg: sushi2,
      url: "/meny/sushi2",
      secondaryImg: sushi5,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Futo Maki: 6 /12 Biter",
      mainImg: sushi3,
      url: "/meny/sushi3",
      secondaryImg: sushi6,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
