export type Collections={
    name:"collections",
    catalogFeatured:CatalogFeatured[]
    catalog:Catalog[],
    carousel:Carousel[],
}

type CatalogFeatured={
type:string;
image:string;
imageAlt:string;
}
type Catalog ={
    name:string;
    designation:string;
    image:string;
    imageAlt:string;
    faction:string;
    detail:string;
    front:Fronts[],
    manufactured:number;
    armament:string;
    topSpeed:string;
    crew:number;
    type:string;
    summary:string
}
type Fronts = string[];




type Carousel={
 name:string;
 designation:string;
 faction:string;
 era:string;
 type:string;
 detail:string
    image:string;
    imageAlt:string;
    tone:string;
}

