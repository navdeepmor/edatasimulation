export default (services = [], action) => {
    switch(action.type) {
        case 'CREATE':
            return [...services, action.payload];
        case 'FETCH_ALL':
            return action.payload;
        case 'FIND':
            return services;
        default:
            return services; 
    }
}