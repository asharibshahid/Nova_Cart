export default {
    name: 'hijab',
    title: 'Hijabs',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Name is required'),
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
        name: 'price',
        title: 'Price',
        type: 'number',
        validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; new(): any; }; }; }) =>
          Rule.required().min(0).error('Price must be a positive number'),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        validation: (Rule: { max: (arg0: number) => { (): any; new(): any; warning: { (arg0: string): any; new(): any; }; }; }) =>
          Rule.max(500).warning('Description should be under 500 characters'),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true, // Enables cropping and focal point selection
        },
        validation: (Rule: { required: () => { (): any; new(): any; error: { (arg0: string): any; new(): any; }; }; }) => Rule.required().error('Image is required'),
      },
   
    ],
  };
  