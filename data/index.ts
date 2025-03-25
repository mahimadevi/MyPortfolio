export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Learning NextJS",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Movie Web App - MovieHub",
    des: "This project is a React application for managing movie and TV show information, favorites, and user accounts. It utilizes Redux for state management and React Router for navigation.This project also implements a backend API for a movie/TV show application. It utilizes Express for the server framework, Mongoose for database interaction (MongoDB), and various validation and security features.",
    img: "/mov.svg",
    iconLists: ["/re.svg", "/js.svg", "/node.svg", "/mon.svg", "/css.svg"],
    link: "https://movie-hub-n3r1.vercel.app/",
  },
  {
    id: 2,
    title: "Social Media App - Snapgram",
    des: " A sleek social app with trending content, infinite scroll & personalized feeds. Built with React, Appwrite & TypeScript for top performance.",
    img: "/sna.svg",
    iconLists: ["/re.svg", "/tail.svg", "/app.svg", "/ts.svg", "/rq.svg"],
    link: "https://snapgram-gk88.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Website - AmazonClone",
    des: "Introducing our complete e-commerce website, modeled after Amazon and built with the MERN stack. Enjoy robust features like user authentication, product management, shopping cart, and seamless order processing",
    img: "/am.svg",
    iconLists: ["/re.svg", "/js.svg", "/node.svg", "/mon.svg", "/css.svg"],
    link: "https://github.com/mahimadevi/Amazon-Clone",
  },
  {
    id: 4,
    title: "Movie Recommender App",
    des: "AI-powered recommender that suggests films based on genres, cast, and keywords from your favorite movies. Uses content-based filtering for personalized picks.",
    img: "/p3.svg",
    iconLists: [
      "/stre.svg",
      "/numpy.svg",
      "/python.svg",
      "/pandas.svg",
      "/tmdb.svg",
    ],
    link: "https://github.com/mahimadevi/Movie_recommendor",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Developer - Nama Water",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer Intern - Exposys Data Lab",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/mahimadevi",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mahima-devi/",
  },
  {
    id: 3,
    img: "/leet.svg",
    link: "https://leetcode.com/u/mahima5687/",
  },
];
