export default type => {
    return import('./rest').then(provider => provider.default);
};



