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
            if(!node)
            {
                return nodesOrder;
            }
            node.left && this.#inOrderIterator(node.left, nodesOrder);
            nodesOrder.push(node.value);
            pNode.right && this.#inOrderIterator(pNode.right, nodesOrder);
        
            return nodesOrder;
        }

        // root - left - right
        #preOrderIterator(node, nodesOrder = [])
        {
            // base condition
            if(!node)
            {
                return nodesOrder;
            }
            nodesOrder.push(node.value);
            node.left && this.#preOrderIterator(node.left, nodesOrder);
            pNode.right && this.#preOrderIterator(pNode.right, nodesOrder);
            
            return nodesOrder;
        }

        // left - right - root
        #postOrderIterator(node, nodesOrder = [])
        {
           // base condition
           if(!node)
           {
               return nodesOrder;
           }
           node.left && this.#postOrderIterator(node.left, nodesOrder);
           pNode.right && this.#postOrderIterator(pNode.right, nodesOrder); 
           nodesOrder.push(node.value);

           return nodesOrder;
        }
        

    }

    let inOrder = new BinaryTree()
    inOrder.insert(40)
    inOrder.insert(25)
    inOrder.insert(78)
    inOrder.insert(10)
    inOrder.insert(32)