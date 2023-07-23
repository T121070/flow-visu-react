import { Box, Typography, Divider, Stack } from "@mui/material"
import { BoothInfo } from "./BoothInfo"

export function StepInfo() {
  return(
    <>
      <Box sx={{ flexGrow: 1, px: "20px", pt: "50px" }}>
        <Typography variant="h6">デザイン</Typography>
        <Divider sx={{ borderBottomWidth: 3 , borderColor: "black"  }} />
        <Stack direction="row">
          <BoothInfo />
          <BoothInfo />
        </Stack>
      </Box>
    </>
  )
}