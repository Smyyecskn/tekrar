import React from "react";

const Main = () => {
  const style = {
    color: "green",
    backgroundColor: "yellow",
    fontSize: "20px",
  };
  return (
    <div>
      <h2>MAIN SECTION</h2>
      <p style={style}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aut,
        dicta quasi aliquid possimus, assumenda quo adipisci ut qui non numquam,
        nemo fugiat et impedit corporis blanditiis tempora. Iste, laudantium.
      </p>
      <h5>SUB SECTION</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        libero recusandae earum autem repudiandae sit eligendi dignissimos eius
        animi neque quibusdam voluptatibus laborum, expedita doloribus.
      </p>
    </div>
  );
};

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <img
        style={{
          backgroundColor: "blue",
          color: "red",
          margin: "10px",
          borderRadius: "5px",
          height: "80px",
          width: "100px",
        }}
        src="https://i.ytimg.com/vi/SJm5suVpOK0/maxresdefault.jpg"
        alt="donald duck"
      />
      <Profile />
    </section>
  );
}

export default Main;
