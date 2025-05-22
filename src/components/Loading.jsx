import { Backdrop, CircularProgress, Typography, Box } from "@mui/material";

export default function LoadingComponent({message="Loading..."}) {
  return (
    <Backdrop
      open={true}
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        flexDirection: "column",
        display: "flex",
      }}
    >
      <CircularProgress color="inherit" />
      <Box mt={2}>
        <Typography variant="h6">{message}</Typography>
      </Box>
    </Backdrop>
  );
}
