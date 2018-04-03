/* Will be changed after using FS DB */
export let TYPES :{ id: number, name: string }[]=[
    { id: 1, name: 'All' },
    { id: 2, name: 'Standard' },
    { id: 3, name: 'Service' },
    { id: 4, name: 'Combination' }
];

export let SUPPLIERS :{ id: number, name: string }[]= [
    { id: 1, name: 'supplier1' },
    { id: 2, name: 'supplier2' },
    { id: 3, name: 'supplier3' }
];

export let ENTRIES :{ id: number, value: string }[]=[
    { id: 1, value: '10' },
    { id: 2, value: '25' },
    { id: 3, value: '50' },
    { id: 3, value: '100' }
];

export let PROPERTIES = [  
    'Code',
    'Name',
    'Category',
    'Product Description',
    'Tax(%)',
    'Price',
    'Action'
];


