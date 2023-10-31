import React from "react";
import PersonCard from "./person-card";

const testimonialData = [
  {
    companyName: "Jeff",
    desc: ``,
    img: "/user-1.png",
    name: "Elliot John",
    designation: "Marketing Executive",
    linkedin: "https://www.linkedin.com/in/jeffnzk/",
    github: "https://github.com/jeffnzk",
  },
  {
    companyName: "Rita",
    desc: ``,
    img: "/user-2.png",
    name: "John Adam",
    designation: "Senior Engineering Manager",
    linkedin: "https://www.linkedin.com/in/margarita-bizhan-0837a9171/",
    github: "https://github.com/margaritabizhan",
  },
  {
    companyName: "Cristina",
    desc: ``,
    img: "/user-3.png",
    name: "Adam Smith",
    designation: "Engineering Manager",
    linkedin: "https://www.linkedin.com/in/cristina-flores-rodriguez/",
    github: "https://github.com/mildwushroom",
  },
  {
    companyName: "Tarik",
    desc: ``,
    img: "/user-3.png",
    name: "Adam Smith",
    designation: "Engineering Manager",
    linkedin: "https://www.linkedin.com/in/tarik-bensalem/",
    github: "https://github.com/Tbensalem",
  },
];

const People = () => {
  return (
    <div className="container pt-32">
      <div className="text-center text-4xl pb-8">
        <p className="border-b-4 inline-block pb-2">Connect with Us</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonialData.map((item, index) => (
          <PersonCard
            key={index}
            companyName={item.companyName}
            desc={item.desc}
            img={item.img}
            name={item.name}
            designation={item.designation}
            linkedin={item.linkedin}
            github={item.github}
          />
        ))}
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default People;