import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Document
          file="../../img/LeesResume.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
        <ButtonToolbar>
          <Button
            href="../../img/LeesResume.pdf"
            bsStyle="info"
            download
          >
            Download
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}
