import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;
const mobileView = window.innerWidth <= 767;

function PdfViewer({ pdfFile, setTotalPages }) {
	const [numPages, setNumPages] = useState();

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setTotalPages(numPages);
	}

	return (
		<>
			<div className="bg-slate-200 overflow-auto h-[500px] w-fit relative">
				<Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
					{Array.apply(null, Array(numPages))
						.map((x, i) => i + 1)
						.map((page) => {
							return (
								<>
									<Page
										pageNumber={page}
										renderAnnotationLayer={false}
										renderTextLayer={false}
										width={mobileView ? window.innerWidth - 20 : 750}
									/>
								</>
							);
						})}
				</Document>
			</div>
		</>
	);
}

export default PdfViewer;
