import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { PropsWithChildren } from 'react'

type PageLayoutProps = {
  title: string
}

export const PageLayout = ({
  children,
  title,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="80vh"
          flexDirection="column"
        >
          {children}
        </Box>
      </Container>
    </>
  )
}
