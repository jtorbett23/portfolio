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
	front: String | React.JSX.Element,
	back: String | React.JSX.Element
	has_tag_front: number,
	has_tag_back: number
}

type PageSideContent = {
	content: String | React.JSX.Element
	has_tag: boolean
}
