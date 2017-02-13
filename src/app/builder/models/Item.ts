export class Item {
    type: string = '';
    name: string = '';
    visible: boolean = true;

    props: any = {
        title: '',
        currentValue: '',
        currentLabel: '',
        defaultValue: '',
        minVal: 10,
        maxVal: 500,
    };

    constructor(type?: string, name?: string) {
        this.type = type || '';
        this.name = name;
    }
}