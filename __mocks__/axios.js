export default {
    get: jest.fn(() => Promise.resolve({ data: { name: 'stubbed val' } }))
};
