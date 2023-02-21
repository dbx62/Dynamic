export default function PostMessage(node: any, parent: any = {}) {
    Object.entries({
        type: 'CallExpression',
        callee: {
            type: 'MemberExpression',
            object: {type: 'Identifier', name: 'self'},
            property: {type: 'Identifier', name: '__dynamic$message'},
        },
        arguments: [
            {type: 'Identifier', name: (node.object?.name||node.name||node.value)},
        ]
    }).forEach(([e,v])=>node[e]=v)

    return;
}