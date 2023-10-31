import React, { useEffect } from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import CertificatesPageBody from '../CertificatesPageBody/CertificatesPageBody';

import axios from 'axios';

function CertificatesPage() {
 /* useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/certificates/data');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);*/

  return (
    <div>
      <Header />
      <CertificatesPageBody />
      <Footer />
    </div>
  );
}

export default CertificatesPage;