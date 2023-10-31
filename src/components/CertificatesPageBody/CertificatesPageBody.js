import React, { useEffect, useState } from 'react';
import "./style.css";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

function CertificatesPageBody() {

    const [certificates, setCertificates] = useState(null);
    let certificatesArr = null;
    const [pageLinks, setPageLinks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:8080/certificates/data');
                const certificatesData = response.data._embedded.giftCertificateWithDataDtoList;
                setCertificates(certificatesData);
                console.log(response.data);
                console.log(certificatesData);
                setPageLinks(response.data._links);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    const handlePageChange = async (url) => {
        try {
            const response = await axios.get(url);
            setCertificates(response.data._embedded.giftCertificateWithDataDtoList);
            setPageLinks(response.data._links);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="certificates-body">
            <div>Error message</div>
            {certificates ? (
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Tags</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {certificates.map(certificate => (
                            <tr key={certificate.id}>
                                <td>{certificate.name}</td>
                                <td>{certificate.description}</td>
                                <td style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    {certificate.tagDtoList.map((tag, index) => (
                                        index !== certificate.tagDtoList.length - 1 ? `${tag.name}, ` : tag.name
                                    ))}
                                </td>
                                <td>{certificate.price}</td>
                                <td>
                                    <button type="button" className="btn btn-primary">View</button>
                                    <button type="button" className="btn btn-warning">Edit</button>
                                    <button type="button" className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                "Loading..." // Или сообщение об ошибке, если данные не загружены
            )}
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${!pageLinks.prev ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(pageLinks.prev?.href)}
                            disabled={!pageLinks.prev}
                        >
                            &lt;&lt;
                        </button>
                    </li>
                    {pageLinks && Array.isArray(pageLinks.pageLink) && (
                        pageLinks.pageLink.map((link, index) => (
                            <li key={index} className="page-item">
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(link.href)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        )))}
                    <li className={`page-item ${!pageLinks.next ? 'disabled' : ''}`}>
                        <button
                            className="page-link"
                            onClick={() => handlePageChange(pageLinks.next?.href)}
                            disabled={!pageLinks.next}
                        >
                            &gt;&gt;
                        </button>
                    </li>
                </ul>
            </nav>
        </div >
    );
}

export default CertificatesPageBody;