import {Accordion, AccordionTab} from "primereact/accordion";
import {ResultTable} from "../result-table/ResultTable";
import {useState} from "react";
import {UploadForm} from "../search-form/UploadForm";

export const Accordions = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <AccordionTab header="Add new document">
                    <UploadForm/>
                </AccordionTab>
                <AccordionTab header="Search for existing documents">
                    //TODO recator this search forms
                </AccordionTab>
                <AccordionTab header="Manage existing documents">
                    <ResultTable/>
                </AccordionTab>
            </Accordion>
        </div>
    );
}