export default {
    name: 'wallet',
    title: 'Wallet',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Allows cropping and focal point selection
        },
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name', // Automatically generate the slug from the name
          maxLength: 200,
        },
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Slug is required'),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule: { min: (arg0: number) => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.min(0).error('Price must be a positive number'),
      },
      {
        name: 'size',
        title: 'Size',
        type: 'string',
      
      },
    ],
  };
  