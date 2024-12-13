import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import { GiBlackBook } from "react-icons/gi";
import { FaNewspaper } from "react-icons/fa6";
import { FcReadingEbook } from "react-icons/fc";
import { IoGameController } from "react-icons/io5";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
export default function WelcomeComponent (){

    return(
        <>
            <Container className="welcomeComponent">
                <section className="welcomePart1">
                <Typography variant="h4">Welcome to BookVault Hub</Typography>
                <Typography>Welcome to the biggest library</Typography>

                <div className="divLine">
                    <p className="line lin"></p><GiBlackBook className="icon"/><p className="line lin2"></p>
                </div>
                </section>

                <section className="welcomePart2">
                    {/* 1 */}
                    <Card className="cardWelcome">
                        <CardContent className="cardWelcomeAction">
                            <CardActions className="btnAction">
                                <Button><GiBlackBook/></Button>
                            </CardActions>
                            <Typography variant="h6">EBOOKS</Typography>
                            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, vel. Totam sit dicta, officia ipsam ipsa.</Typography>
                            <Typography className="readMore">Read More</Typography>
                        </CardContent>
                    </Card>

                    {/* 2 */}
                    <Card className="cardWelcome">
                        <CardContent className="cardWelcomeAction">
                            <CardActions className="btnAction">
                                <Button><FcReadingEbook/></Button>
                            </CardActions>
                            <Typography variant="h6">KIDS</Typography>
                            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, vel. Totam sit dicta, officia ipsam ipsa.</Typography>
                            <Typography className="readMore">Read More</Typography>
                        </CardContent>
                    </Card>

                    {/* 3 */}
                    <Card className="cardWelcome">
                        <CardContent className="cardWelcomeAction">
                            <CardActions className="btnAction">
                                <Button><FaNewspaper/></Button>
                            </CardActions>
                            <Typography variant="h6">NEWSPAPER</Typography>
                            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, vel. Totam sit dicta, officia ipsam ipsa.</Typography>
                            <Typography className="readMore">Read More</Typography>
                        </CardContent>
                    </Card>

                    {/* 4 */}
                    <Card className="cardWelcome">
                        <CardContent className="cardWelcomeAction">
                            <CardActions className="btnAction">
                                <Button><IoGameController/></Button>
                            </CardActions>
                            <Typography variant="h6">GAMES</Typography>
                            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, vel. Totam sit dicta, officia ipsam ipsa.</Typography>
                            <Typography className="readMore">Read More</Typography>
                        </CardContent>
                    </Card>
                </section>
            </Container>
        </>
    )
}