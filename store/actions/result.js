export const ADD_RESULT = 'ADD_RESULT';

export const addResult = (number,result) => {
    return {
        type : ADD_RESULT,
        listResult : {numbers : number, results :result}};
}