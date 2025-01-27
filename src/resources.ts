const fakeDb = {
    people: [
        {
            firstName: 'Bri',
            lastName: 'Hammmond',
            fullName: 'Bri Hammond'
        }
    ]
}

export const getPeople = (version: string) => {
    if (version == 'v1') {
        const result = fakeDb.people.map(({ fullName, ...rest }) => rest);
        return result;
    } else if (version == 'v2') {
        const result = fakeDb.people.map(({ fullName }) => ({ fullName }));
        return result;
    }
}