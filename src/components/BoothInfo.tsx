import { Card, CardContent, Typography } from "@mui/material"

interface BoothInfoProps {
  boothInfo: { [key: string]: any }
}

export function BoothInfo(props: BoothInfoProps) {
  return(
    <>
      <Card sx={{ width:"300px", backgroundColor: "#D6E3FF", p:"10px",m:"10px" }}>
        <CardContent>
          <Typography variant="h6">{props.boothInfo["boothId"]}</Typography>
          <Typography variant="body1">状態：{props.boothInfo["status"]}</Typography>
          <Typography variant="body1">担当者：{props.boothInfo["operator"]}</Typography>
          <Typography variant="body1">タグID：{props.boothInfo["tagId"]}</Typography>
          <Typography variant="body1">経過時間：{props.boothInfo["startTime"]}</Typography>
        </CardContent>
      </Card>
    </>
  )
}
