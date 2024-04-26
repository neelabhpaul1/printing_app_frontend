export const urlToFormData = async (url) => {
	const visual_source = url;
	const visual_ext = visual_source.split(".").pop();
	const visual = await fetch(visual_source);
	const visual_as_blob = await visual.blob();
	const visual_as_file = new File(
		[visual_as_blob],
		"file-name-renamed." + visual_ext,
		{ lastModified: new Date().getTime(), type: visual_as_blob.type }
	);

	return visual_as_file;
};
