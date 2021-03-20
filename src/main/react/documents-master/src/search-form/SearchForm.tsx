import {useState} from "react";
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {SearchValues} from "../domain/SearchValues";

export const SearchForm = () => {
    const [documentName, setDocumentName] = useState<string>('');
    const [documentIssuer, setDocumentIssuer] = useState<string>('');
    const [city, setCityValue] = useState<string>('');

    const citySelectItems = [
        {label: 'New York', value: 'New York'}
    ];

    return (<form>
        <h5>Document Name</h5>
        <InputText value={documentName} onChange={(e) => setDocumentName((e.target as HTMLInputElement).value)}/>
        <h5>Document Issuer</h5>
        <InputText value={documentIssuer} onChange={(e) => setDocumentIssuer((e.target as HTMLInputElement).value)}/>
        <h5>Document Type</h5>
        <Dropdown value={city} options={citySelectItems} onChange={(e) => setCityValue(e.value)}
                  placeholder="Select document type"/>
    </form>);
}


