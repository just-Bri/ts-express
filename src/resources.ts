const fakeDb = {
    people: [
        {
            firstName: 'Jane',
            lastName: 'Doe',
            fullName: 'Jane Doe'
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            fullName: 'Jane Doe'
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            fullName: 'Jane Doe'
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            fullName: 'Jane Doe'
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            fullName: 'Jane Doe'
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
            fullName: 'Jane Doe'
        },
    ]
}

export const getPeople = (version: string) => {
    switch (version) {
        case 'v1':
            return fakeDb.people.map(({ fullName, ...rest }) => rest);
        default:
            return fakeDb.people.map(({ fullName }) => ({ fullName }));
    }
}