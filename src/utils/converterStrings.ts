export const evaluateExpression = (expression: string) => {
    console.log(expression)

    const func = new Function("return " + expression);
    return func();
}