//Classes geradas utilizando Json2TS <http://json2ts.com>

export interface TextObject {
  type: string;
  language: string;
  text: string;
}

export interface Url {
  type: string;
  url: string;
}

export interface Series {
  resourceURI: string;
  name: string;
}

export interface Variant {
  resourceURI: string;
  name: string;
}

export interface Collection {
  resourceURI: string;
  name: string;
}

export interface CollectedIssue {
  resourceURI: string;
  name: string;
}

export interface Date {
  type: string;
  date: string;
}

export interface Price {
  type: string;
  price: number;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Image {
  path: string;
  extension: string;
}

export interface Creator {
  resourceURI: string;
  name: string;
  role: string;
}

export interface Creators {
  available: number;
  returned: number;
  collectionURI: string;
  items: Creator[];
}

export interface Character {
  resourceURI: string;
  name: string;
  role: string;
}

export interface Characters {
  available: number;
  collectionURI: string;
  items: Character[];
  returned: number;
}

export interface Story {
  resourceURI: string;
  name: string;
  type: string;
}

export interface Event {
  resourceURI: string;
  name: string;
}


export interface Stories {
  available: number;
  collectionURI: string;
  items: Story[];
  returned: number;
}

export interface Events {
  available: number;
  collectionURI: string;
  items: Event[];
  returned: number;
}

export interface Comic {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description?: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: Url[];
  series: Series;
  variants: Variant[];
  collections: Collection[];
  collectedIssues: CollectedIssue[];
  dates: Date[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Image[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Events;
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Comic[];
}

export interface ComicData {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: Data;
  etag: string;
}
