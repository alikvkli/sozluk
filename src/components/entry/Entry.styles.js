import {styled,Box,Avatar} from "@mui/material"

export const EntryCard = styled(Box)(({theme}) => ({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    boxShadow: "-2px 2px 6px 0px rgba(0,0,0,0.16)",
    maxWidth:"800px",
    height: "auto",
    padding:"16px",
    borderRadius:"2px",
    "&:not(:first-of-type)": {
        marginTop:"20px",
    },
}))

export const EntryTitle= styled("p")(({theme}) => ({
    fontSize: "18px",
    lineHeight:"24px",
    fontWeight:"bold"
}))

export  const EntryContent = styled("div")(({theme}) => ({
    fontSize:"14px",
    lineHeight:"18px"
}))

export const EntryActions = styled("div")(({theme}) => ({
    marginTop: "10px",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between"
}))

export const UserInfo = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "flex-end",
    justifyContent:"flex-end",
    gap: 10,
    marginTop:5
}))

export const ProfilePhoto = styled(Avatar)(({theme}) => ({
    objectFit:"contain",
    border: "1px solid #dedede",
}))

export const InfoText = styled("p")(({theme}) => ({
    margin:0,
    padding:0,
    fontSize: "14px",
    lineHeight:"18px"
}))
