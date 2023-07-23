import { Box, AppBar, Toolbar, Typography } from "@mui/material"

export function MyHeader() {
  return(
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Flow Visu
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}