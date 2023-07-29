import { Box, Typography, Divider, Stack } from "@mui/material"
import { BoothInfo } from "./BoothInfo"

interface StepInfoProps {
  boothData: any[],
  stepLabel: string,
}

export function StepInfo(props: StepInfoProps) {
  const boothInfoArray = props.boothData.map(elm => {
    <BoothInfo boothInfo={elm} />
  })

  return(
    <>
      <Box sx={{ px: "20px", pt: "50px" }}>
        <Typography variant="h6">{props.stepLabel}</Typography>
        <Divider sx={{ borderBottomWidth: 3 , borderColor: "black"  }} />
        <Stack direction="row" spacing={3} sx={{p: "20px"}}>
          { boothInfoArray }
        </Stack>
      </Box>
    </>
  )
}