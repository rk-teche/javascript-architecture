class Node
    {
        constructor(value)
        {
            this.value = value,
            this.left = null,
            this.right = null
        }
    }

    class BinaryTree
    {
        constructor()
        {
            this.root = null;
        }

        insert(value)
        {
            const newNode = new Node(value);

            if(!this.root)
            {
                this.root = newNode;
            }
            else
            {
                    this.#insertNode(this.root, newNode);
            }
        }

        #insertNode(node, newNode)
        {
            if(newNode.value < node.value)
            {
                // insert left
                if(!node.left)
                {
                    node.left = newNode;
                }
                else
                {
                    this.#insertNode(node.left, newNode);
                }
            }
            else
            {
                // insert right
                if(!node.right)
                {
                    node.right = newNode;
                }
                else
                {
                    this.#insertNode(node.right, newNode);
                }
            }
        }

        iterator(type = 'inOrder')
        {
            switch(type)
            {
                case "preOrder" :
                    return this.#preOrderIterator(this.root);
                case "postOrder" :
                    return this.#postOrderIterator(this.root);
                default :
                    return this.#inOrderIterator(this.root);    
            }
        }

        // left - root - right
        #inOrderIterator(node, nodesOrder = [])
        {
                // base condition
                if(!node.left)
                {
                    nodesOrder.push(node.value);
                    return;
                }

                let pNode = node;
                this.#inOrderIterator(node.left, nodesOrder);
                nodesOrder.push(pNode.value);
            
                if(pNode.right)
                {
                    this.#inOrderIterator(pNode.right, nodesOrder);
                }
            

                return nodesOrder;
        }

        // root - left - right
        #preOrderIterator(node, nodesOrder = [])
        {
                // base condition
                if(!node.left)
                {
                    nodesOrder.push(node.value);
                    return;
                }

                let pNode = node;
                nodesOrder.push(pNode.value);
                this.#preOrderIterator(node.left, nodesOrder);
                if(pNode.right)
                {
                    this.#preOrderIterator(pNode.right, nodesOrder);
                }
            

                return nodesOrder;
        }

        // left - right - root
        #postOrderIterator(node, nodesOrder = [])
        {
                // base condition
                if(!node.left)
                {
                    nodesOrder.push(node.value);
                    return;
                }

                let pNode = node;
                this.#postOrderIterator(node.left, nodesOrder);
                if(pNode.right)
                {
                    this.#postOrderIterator(pNode.right, nodesOrder);
                }
                nodesOrder.push(pNode.value);
            

                return nodesOrder;
        }
        

    }

    let inOrder = new BinaryTree()
    inOrder.insert(40)
    inOrder.insert(25)
    inOrder.insert(78)
    inOrder.insert(10)
    inOrder.insert(32)