import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Navigation( { activeSection, onSectionChange } ) {
  const sections = [
    { id: 'home', label: 'Home ' },
    { id: 'about', label: 'About' },
    { id: 'links', label: 'Links' },
    { id: 'information', label: 'information' }
  ];

  return (
    <>
      { sections.map( ( section ) => (
        <Nav.Link
          key={ section.id }
          href={ `#${ section.id }` }
          onClick={ () => onSectionChange( section.id ) }
          active={ activeSection === section.id }
          >
            {section.label}
          </Nav.Link>
      ) ) }
    </>
  );
}
