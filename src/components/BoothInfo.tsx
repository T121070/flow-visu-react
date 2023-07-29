import { Card, CardContent, Typography } from "@mui/material"

export function BoothInfo() {
  return(
    <>
      <Card sx={{ width:"300px", backgroundColor: "#D6E3FF", p:"10px",m:"10px" }}>
        <CardContent>
          <Typography variant="h6">ブース１</Typography>
          <Typography variant="body1">状態:</Typography>
          <Typography variant="body1">担当者:</Typography>
          <Typography variant="body1">タグID:</Typography>
          <Typography variant="body1">経過時間:</Typography>
        </CardContent>
      </Card>
    </>
  )
}
