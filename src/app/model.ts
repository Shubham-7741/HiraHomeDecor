export class product_model {
    pid!: number;
    pname!: string;
    pdescription!: string;
    pcategory!: string;
    psubcategory!: string;
    pimages!: File;
}

export class product_category_model {
    cid!: number;
    cname!: string;
    scname!: string;

}