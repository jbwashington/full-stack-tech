import { useState } from "react";
import Image from "next/image";
import { Navbar, Nav, InputGroup, FormControl, Button } from "react-bootstrap";
import { Search } from 'react-bootstrap-icons';
import Logo from './Logo';
import styles from '../styles/Navigation.module.css';

function Navigation() {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  const toggleSearch = () => {
    setSearchActive(!isSearchActive);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    // Fetch your search results here based on searchValue and update searchResults.
    // This will depend on how you have implemented search in your site.
  };

  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Navbar.Brand href="#home" className={styles.logoWrapper}>
        <Logo />
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggleNav} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className={styles.navCollapse}>
        <Nav>
          <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
          <Nav.Link href="#services" className={styles.navLink}>Services</Nav.Link>
          <Nav.Link href="#about" className={styles.navLink}>About Us</Nav.Link>
          <Nav.Link href="#contact" className={styles.navLink}>Contact Us</Nav.Link>
        </Nav>
        {isSearchActive ? (
          <>
            <InputGroup className={`mb-3 ${styles.search}`}>
              <FormControl
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
                className={styles.searchInput}
                value={searchValue}
                onChange={handleSearchChange}
              />
              <Button variant="outline-secondary" id="button-addon2" onClick={toggleSearch}>
                <Search />
              </Button>
            </InputGroup>
            <div>
              {searchResults.map((result, index) => (
                <div key={index}>
                  {/* Render your search results here */}
                </div>
              ))}
            </div>
          </>
        ) : (
          <Button onClick={toggleSearch} variant="outline-secondary" id="button-addon2">
            <Search />
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;

