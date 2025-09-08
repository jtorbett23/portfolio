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

export type Contact = {
	title: string,
	content: string,
}

type PageContent = {
    front: String,
    back: String,
    has_tag: Boolean
}