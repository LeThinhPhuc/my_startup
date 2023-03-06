import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Text} from "@nextui-org/react";
import { Layout } from "./Layout";
import { Logo } from "./Logo";

export default function Header() {

  return (
    <Layout>
      <Navbar height={80}>
        <Navbar.Brand>
          <Logo />
          <Text b color="inherit" hideIn="xs">
            SKY MAVIS
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link>
            <Link to="#">
              Product
            </Link>
            </Navbar.Link>
          <Navbar.Link>
            <Link to="#">
              Team
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="#">
              Blog
            </Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="#">
              Career
            </Link>
          </Navbar.Link>
        </Navbar.Content>

      </Navbar>
    </Layout>
  )
}
