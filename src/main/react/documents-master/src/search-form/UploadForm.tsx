import {useRef, useState} from "react";
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {FileUpload} from "primereact/fileupload";
import {Chips} from 'primereact/chips';
import {Calendar} from 'primereact/calendar';
import './UploadForm.css'

export const UploadForm = () => {
    const [documentName, setDocumentName] = useState<string>('');
    const [documentIssuer, setDocumentIssuer] = useState<string>('');
    const [tags, setTagsValue] = useState([]);
    const [uploadDate, setUploadDate] = useState<Date>();
    const [documentType, setDocumentType] = useState<string>('');

    const documentTypes = [
        {label: 'Document', value: 'document'},
        {label: 'E-mail', value: 'email'}
    ];

    const toast = useRef(null);

    const onUpload = () => {
        // @ts-ignore
        toast.current.show({severity: 'info', summary: 'Success', detail: 'File Uploaded'});
    }

    return (<form id={'input__form'}>
        <div id={'left'}>
            <h5>Document Name</h5>
            <InputText value={documentName}
                       onChange={(e) => setDocumentName((e.target as HTMLInputElement).value)}/>
            <h5>Document Issuer</h5>
            <InputText value={documentIssuer}
                       onChange={(e) => setDocumentIssuer((e.target as HTMLInputElement).value)}/>
            <h5>Document Type</h5>
            <Dropdown value={documentType} options={documentTypes} onChange={(e) => setDocumentType(e.value)}
                      placeholder="Select document type"/>
            <div id={'chips'}>
                <h5>Tags</h5>
                <Chips value={tags} onChange={(e) => setTagsValue(e.value)}/>
            </div>
            <div className="p-field p-col-12 p-md-4">
                <label htmlFor="icon">Upload Date</label><br/>
                <Calendar id="icon" value={uploadDate} onChange={(e) => setUploadDate(e.value as Date)} showIcon/>
            </div>
        </div>
        <div id={'right'}>
            <h5>Documents Upload Form</h5>
            <FileUpload name="demo[]" url="./upload.php" onUpload={onUpload} multiple maxFileSize={100000000}/>
        </div>
    </form>);
}


