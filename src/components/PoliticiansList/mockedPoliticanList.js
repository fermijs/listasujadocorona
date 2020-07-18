export const mockedPolitician = {
    name: 'Example Politician',
    id: 'example-politician',
    profilePicture: 'https://via.placeholder.com/150',
    party: 'Example Party',
    twitter: 'exampleTwitter',
    evidences: [
        {
            description: 'Example Evidence',
            link: 'https://link-to-evidence.com'
        }
    ]
};

export const mockedPoliticanList = Array.from({length:6}, Number.call, () => mockedPolitician);
