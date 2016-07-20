function GoodsItem(json) {
    if(!!json.barcode) {
        this.barcode = json.barcode;
        this.name = json.name || "";
        this.unit = json.unit || "";
        this.price = json.price || 0.00;
        this.subCategory = json.subCategory || ""
        this.category = json.category || "";
    }
}
