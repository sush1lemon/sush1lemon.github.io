export interface Project {
	name: string;
	description: string;
	link: string;
	thumbnail: string;
	folderName?: string;
	stack?: string[];
}

export interface ProjectTool {
	name: string;
	link?: string;
	bgColor: string;
	color: string;
}
