export type Collections={
    name:"collections",
    catalog:Catalog[],
    carousel:Carousel[],
}

type Catalog ={
    name:string;
    image:string;
    imageAlt:string;
}
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

