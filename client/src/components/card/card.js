import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col
} from "reactstrap";
import "./card.css";
import "../navbar/navbar";
import "../navbar/index";
import icon from "../../images/activityIcon.png";
import icon2 from "../../images/goalicon.png";
import icon3 from "../../images/homeicon.png";
import icon4 from "../../images/yes-icon.png";
import icon5 from "../../images/no-icon.png";
import icon6 from "../../images/run-icon.png";
import icon7 from "../../images/music-icon.png";
import icon8 from "../../images/drink-icon.png";


const dummyArr = [
    {
        icon: icon,
        title: "Activity"
    },
    {
        icon: icon2,
        title: "Goals"
    },
    {
        icon: icon3,
        title: "Home"
    },
    {
        icon: icon4,
        title: "Yes"
    },
    {
        icon: icon5,
        title: "No"
    },
    {
        icon: icon6,
        title: "Move"
    },
    {
        icon: icon7,
        title: "Music"
    },
    {
        icon: icon8,
        title: "Drink"
    }
]

const ImgCard = props => {
    return (
        <div class="container-fluid cardStyle">
            <Row>
                {dummyArr.map(cardItem => {
                    return (
                        <Col md={3}>
                            <Card>
                                <CardImg top src={cardItem.icon} alt=""></CardImg>
                                <CardBody class="bodyCard" style={{ backgroundColor: "teal" }}>
                                    <CardTitle>{cardItem.title}</CardTitle>
                                    <CardSubtitle></CardSubtitle>
                                    <CardText> </CardText>
                                    <Button>Click</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    );
};

export default ImgCard;
