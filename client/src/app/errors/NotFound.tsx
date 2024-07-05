import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container component={Paper} sx={{height: 20}} >
            <Typography gutterBottom variant="h3" >Opps We couldn't find what u're looking for</Typography>
            <Divider/>
            <Button fullWidth component={Link} to="/catalog" >Go back to shop</Button>
        </Container>
    )
}