import { useState, useRef, useEffect, useCallback } from "react";
import Quotation from "../pdf/quotation";
import Modal from "./Modal";
import generatePDF, { Resolution } from "react-to-pdf";
import { useReactToPrint } from "react-to-print";

function QuotationModal({ openModal, onModalClose }) {
    const [showPreview, setShowPreview] = useState(true);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isPrinting, setIsPrinting] = useState(false);
    const [loading, setLoading] = useState(false);

    const contentToPrint = useRef(null);

    const getTargetElement = () => document.getElementById("quotation-document");

    const options = {
        method: "save",
        resolution: Resolution.NORMAL,
        page: {
            format: "A4",
        },
        canvas: {
            qualityRatio: 1,
        },
        overrides: {
            canvas: {
                width: 800,
            },
        },
    };

    const downloadAsPdf = async () => {
        setShowPreview(false);
        setIsDownloading(true);
        try {
            setTimeout(() => {
                generatePDF(getTargetElement, options);
            }, 3000);
        } catch (error) {
            console.error(error);
        } finally {
            setTimeout(() => {
                setShowPreview(true);
                setIsDownloading(false);
            }, 6000);
        }
    };

    const handleOnBeforeGetContent = useCallback(() => {
        console.log("`onBeforeGetContent` called");
        setShowPreview(false)
        setLoading(true);
        setIsPrinting(true);

        return new Promise((resolve) => {
            setTimeout(() => {
                setLoading(false);
                setIsPrinting(false);
                resolve();
            }, 500);
        });
    }, [setLoading]);

    const reactToPrintContent = useCallback(() => {
        return contentToPrint.current;
    }, []);

    const handleBeforePrint = useCallback(() => {
        console.log("`onBeforePrint` called");
    }, []);

    const handleAfterPrint = useCallback(() => {
        console.log("`onAfterPrint` called");
        setShowPreview(true)
    }, []);

    const handlePrint = useReactToPrint({
        content: reactToPrintContent,
        documentTitle: "AwesomeFileName",
        onBeforeGetContent: handleOnBeforeGetContent,
        onBeforePrint: handleBeforePrint,
        onAfterPrint: handleAfterPrint,
        removeAfterPrint: true
    });

    return (
        <Modal open={openModal} onClose={() => onModalClose()}>
            <div className='bg-[#E8EBEF] flex justify-center py-2 px-4 flex-1 leading-[1.6] text-[1.25rem]'>
                <div className='flex flex-row justify-between flex-1'>
                    <div className='flex flex-row gap-2 items-center'>
                        <button className="bg-primary min-w-16 rounded-xl text-[0.875rem]" onClick={downloadAsPdf} disabled={isDownloading}>Download</button>
                        <button className="bg-white text-primary border-primary border-1 rounded-xl text-[0.875rem]" onClick={handlePrint}>Print Quotation</button>
                        <span className='text-[0.75rem]'>* Use A4 paper size for printing</span>
                    </div>
                    <button className="h-14 w-14 border-1" onClick={() => onModalClose()}>X</button>
                </div>
            </div>
            <div className='overflow-auto py-4 px-6'>
                <Quotation printRef={contentToPrint} showPreview={showPreview}/>
            </div>

        </Modal>
    )
}

export default QuotationModal