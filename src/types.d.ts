declare module "*.module.css"
declare module "*.png"
declare module "*.json"


export type Article = {
	title: string,
	description: string,
	tags: Array<string>,
	url: string
}

export type Project = {
	title: string,
	description: string,
	url: string
}