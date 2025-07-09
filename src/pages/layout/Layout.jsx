import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Layout.module.css";
import { Button, Image, Stack, Nav } from "react-bootstrap";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  // Map your page names to routes and icons
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pages = [
    { name: "Conjuntos", route: "/", icon: "bi-collection" },
    {
      name: "javascript_básico",
      route: "/javascript_basico",
      icon: "bi-code-slash",
    },
    { name: "LOOPS", route: "/loops", icon: "bi-arrow-repeat" },
    { name: "Objetos", route: "/objetos", icon: "bi-link-45deg" },
  ];

  return (
    <div>
      <header
        className={`position-fixed top-0 start-0 end-0 ${styles.mainHeader}`}
      >
        <Stack
          direction="horizontal"
          gap={3}
          className={`align-items-center p-2 bg-body-tertiary border-bottom border-light-subtle ${styles.header}`}
        >
          <Button
            variant="secondary"
            onClick={() => setSidebarOpen((prev) => !prev)}
            className={styles.bigAnim}
          >
            <h1 className={`m-0 p-0 ${styles.headerText}`}>
              <i className="bi bi-list m-0 p-0" />
            </h1>
          </Button>
          <Stack
            direction="horizontal"
            gap={3}
            onClick={() => {
              setSidebarOpen(false);
              navigate("/");
            }}
            className={`${styles.logo} ${styles.bigAnim}`}
          >
            <Image className={`m-0`} src="logo.png" />
            <p className="m-0 pe-none">Conjuntos</p>
          </Stack>
        </Stack>
      </header>
      <div className={styles.grid}>
        <div
          className={`${styles.sidebar} ${sidebarOpen ? "" : styles.closed}`}
        >
          <Nav className="flex-column pt-4" variant="pills">
            {pages.map((page) => (
              <Nav.Item key={page.route}>
                <Nav.Link
                  as={Link}
                  to={page.route}
                  active={location.pathname === page.route}
                  onClick={() => {
                    setSidebarOpen(false);
                  }}
                  className="d-flex align-items-center gap-2"
                >
                  <i className={`bi ${page.icon}`}></i>
                  {page.name}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>
        <div />
        <div className={`ms-page ${styles.page}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
