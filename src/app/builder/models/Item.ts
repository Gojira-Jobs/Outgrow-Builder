export class Item {
_id: string = '';
  order: number = 0;
  type: string = '';
  name: string = '';
  visible: boolean = true;
  isIconPresent: boolean = false;
  defaultClass: string = '';
  formulaIndex: string = '';
  imageVisible: boolean = false;
  optionImageVisible: boolean = false;
  imageURL: string = 'https://cdn.filestackcontent.com/ueNrjSMReChnz2Ohiqwg';
  props: any = {
    title: '',
    followUpText: '',
    postTitle: '',
    currentValue: '',
    currentLabel: '',
    defaultValue: '',
    helpText: '',
    minVal: 10,
    maxVal: 500,
    steps: 1,
    scale: false,
    unit: '',
    postfix: false
  };
  config: any = {
    type: 'text',
    showHelp: false,
    showControl: '',
    attr: {
      class: '',
      style: '',
      width: '',
      height: '',

    },
    validations: {
      required: {
        status: false,
        message: 'This question is mandatory'
      },
      minLength: {
        status: false
      },
      maxLength: {
        status: false
      }
    },
    maxSelections: '',
    direction: '',
    placeholder: 'Default Placeholder'
  };
  options: any = [
    {
      type: '',
      label: 'Option',
      value: 0,
      selected: false,
      defualtselected: false,
      icon: '',
      previousIcons: [],
      hashIndex: 0,
      imageURL: 'https://cdn.filestackcontent.com/ueNrjSMReChnz2Ohiqwg',
      attr: {
        class: '',
        style: '',
      }
    }
  ];
  fields: any = [
    {
      type: 'text',
      name: 'Name',
      placeholder: 'John Doe',
      value: '',
      validations: {
        required: {
          status: true,
          message: 'Field is Required'
        },
        minLength: {
          status: false
        },
        maxLength: {
          status: false
        }
      },
      icon: '',
      attr: {
        class: '',
        style: '',
      }
    },
    {
      type: 'email',
      name: 'Email',
      placeholder: 'John@outgrow.co',
      value: '',
      validations: {
        required: {
          status: true,
          message: 'Field is Required'
        },
        minLength: {
          status: false
        },
        maxLength: {
          status: false
        }
      },
      icon: '',
      attr: {
        class: '',
        style: '',
      }
    }
  ];

    constructor(type?: string, name?: string) {
        this.type = type || '';
        this.name = name;
    }
}