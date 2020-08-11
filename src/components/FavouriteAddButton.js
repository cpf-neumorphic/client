import React from "react";
import { MdAddCircle } from "react-icons/md";
import { IconContext } from "react-icons";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 15px;
  cursor: pointer;
`;

const Card = styled.div`
  padding: 18px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  height: 70px;
  width: 70px;
  margin-bottom: 1rem;
  border-radius: 40px;
  box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.15);
  background: #40514e;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0 5px 15px 0 rgba(70, 70, 70, 0.5);
    transition: all 0.5s ease-out;
  }
`;

export default function AddButton(props) {
  const { addButtonHandler } = props;

  return (
    <Wrapper>
      <Card>
        <Button
          onClick={() => {
            addButtonHandler();
          }}
        >
          <IconContext.Provider value={{ color: "#ffffff", size: "36px" }}>
            <MdAddCircle />
          </IconContext.Provider>
        </Button>
        <p>Add items</p>
      </Card>
    </Wrapper>
  );
}

// import React from "react";
// import { Button, Col, Container } from "react-bootstrap";
// // import Favourites_card from "./Favourites_card";
// import { IoIosAddCircle } from "react-icons/io";
// import { IconContext } from "react-icons";
// import styled from "styled-components";
// import Favourites_addon from "./Favourites_addon";

// const Add_Button = styled(Button)`
//   background-color: gray;
//   border-radius: 100%;
// `;

// const Container_ = styled(Container)`
//   // border-style: solid;
//   height: 300px;
//   // padding-top: 50px;
//   // padding-right: 50px;
//   // padding-bottom: 50px;
//   // padding-left: 50px;
//   padding: 40%;
//   text-align: center;
// `;

// function Favourites_addbutton(props) {
//   const [modalShow, setModalShow] = React.useState(false);
//   const { Items, data } = props;
//   console.log(Items);
//   return (
//     <Col sm={4}>
//       <Container_>
//         <Add_Button variant="secondary" onClick={() => setModalShow(true)}>
//           <IconContext.Provider value={{ size: "45px", color: "white" }}>
//             <IoIosAddCircle />
//           </IconContext.Provider>
//         </Add_Button>
//         <Favourites_addon
//           Items={Items}
//           data={data}
//           show={modalShow}
//           onHide={() => setModalShow(false)}
//         />
//       </Container_>
//     </Col>
//   );
// }

// export default Favourites_addbutton;
