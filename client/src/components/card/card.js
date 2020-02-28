import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from "reactstrap";
import "./card.css";
import "../navbar/navbar";
import "../navbar/index";
import icon from "../../images/activityIcon.png";
import icon2 from "../../images/goalicon.png";
import icon3 from "../../images/homeicon.png";

const ImgCard = props => {
    return (
        <div class="card">
            <div class="container">
                <Card>
                    <CardImg top width="35%" src={icon2} alt=""></CardImg>
                    <CardBody>
                        <CardTitle>Goals</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText> </CardText>
                        <Button>Click</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="35%" src={icon} alt=""></CardImg>
                    <CardBody>
                        <CardTitle> Activity</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText></CardText>
                        <Button>Click</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="35%" src={icon3} alt=""></CardImg>
                    <CardBody>
                        <CardTitle>Home</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText></CardText>
                        <Button>Click</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="35%" src={icon3} alt=""></CardImg>
                    <CardBody>
                        <CardTitle>Home</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText></CardText>
                        <Button>Click</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="35%" src={icon3} alt=""></CardImg>
                    <CardBody>
                        <CardTitle>Home</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText></CardText>
                        <Button>Click</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="35%" src={icon3} alt=""></CardImg>
                    <CardBody>
                        <CardTitle>Home</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText></CardText>
                        <Button>Click</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="35%" src={icon3} alt=""></CardImg>
                    <CardBody>
                        <CardTitle>Home</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText></CardText>
                        <Button>Click</Button>
                    </CardBody>
                </Card>

                <Card>
                    <CardImg top width="35%" src={icon3} alt=""></CardImg>
                    <CardBody>
                        <CardTitle>Home</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText></CardText>
                        <Button>Click</Button>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="35%" src={icon3} alt=""></CardImg>
                    <CardBody>
                        <CardTitle>Home</CardTitle>
                        <CardSubtitle></CardSubtitle>
                        <CardText></CardText>
                        <Button>Click</Button>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default ImgCard;
