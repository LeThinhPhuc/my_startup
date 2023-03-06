import { Box } from "./Box";
import {FC, ReactNode} from "react"

interface Props {
  children: ReactNode
}
export const Layout: FC<Props> = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}
  </Box>
);
