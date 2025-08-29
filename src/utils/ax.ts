import { AXNode, AXValueType } from '../cdpaccessibilitydomain.js';

export function trimOptionalProperties(nodes: AXNode[]): AXNode[] {
    return nodes.map((node) => {
        return {
            nodeId: node.nodeId,
            ignored: node.ignored,
            role: node.role,
            name: {
                type: node.name?.type as AXValueType,
                value: node.name?.value
            },
            childIds: node.childIds,
        }
    })
}
