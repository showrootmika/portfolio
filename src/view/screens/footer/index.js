import { Box, Typography } from "@mui/material"
import { SubText, SubtitleText } from "../../styles/title";

const FooterPage = () => {
    return <>
        <Box sx={{ paddingBottom: "50px", paddingInline: { lg: "20%", xs: "20px" }, width: "100%", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box sx={{ display: "flex", paddingTop: "100px", justifyContent: "center" }}>
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Typography variant="h2">MG</Typography>
                    <Box sx={{ paddingTop: "50px" }}>
                        <SubText textAlign="justify" text="Em uma rede, o mais importante e a qualidade de sua infraestrutura . Você sabia que ate o posicionamento de seus equipamentos pode e vão influenciam em sua  qualidade de sinal e navegação, uma instalação organizada, sem pontos soltas vai melhorar e muito sua conexão de rede. Quer saber mais marque ja seu orçamento e tenha uma internet de qualidade!" />
                    </Box>
                </Box>
            </Box>
            <Box height={"50px"} />
            <SubText text="© Copyright @mmessiasdev" />
        </Box>
    </>
}

export default FooterPage;