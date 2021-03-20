import {Accordion, AccordionTab} from "primereact/accordion";
import {SearchForm} from "../search-form/SearchForm";
import {ResultTable} from "../result-table/ResultTable";
import {useState} from "react";

export const Accordions = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <Accordion multiple activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <AccordionTab header="Add new document">
                    <SearchForm/>
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