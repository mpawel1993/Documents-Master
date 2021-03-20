import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {useEffect, useState} from "react";
import {SearchValues} from "../domain/SearchValues";


export const ResultTable = () => {
    const [products, setProducts] = useState<SearchValues[]>([]);

    useEffect(() => {
        setProducts([getSample(), getSample(), getSample(), getSample(), getSample()])
    }, []);

    function getSample(): SearchValues {
        return {
            documentName: 'Benefit',
            documentType: 'Document',
            documentIssuer: 'Tax Office'
        }
    }

    return (
        <div>
            <div className="card">
                <DataTable value={products}>
                    <Column field="documentName" header="Document Name"/>
                    <Column field="documentIssuer" header="Document Issuer"/>
                    <Column field="documentType" header="Document Type"/>
                </DataTable>
            </div>
        </div>
    );
}

