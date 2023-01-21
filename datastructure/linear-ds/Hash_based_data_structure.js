/**
 * Associative arrays (A-Arrays) --> Combination of key value pair
 *  Note - We don't use the word index with associative arrays because we often don't worry about the order of key-value pair
 * * A-Arrays Rules -
 *  1. Key value pair are bound together
 *  2. Each key must be unique
 *  3. An A-Array is an abstract datatype
 *  3. Most A-Arrays, whether they are dictionaries, maps, or hashes --> are implemented using `Hash Table`
 *  
 *  ? Hashing --
 *     1. Store and retrieve the data in constant time
 *     1. Hashing is a way of taking some `raw data` and mixing it together to form a smaller single piece of data
 *     2. We call the process of inputting the raw ingredients to produce the final hash value --> A Hash function
 * 
 *  ? Hash Inputs --
 *    --> Characters, Objects, Numbers
 *    -- and Hash output would be an integer
 * 
 *  ? Hash Function --
 *    -- Hash function are not reversible, they are one way - This means you can't feed the hash value into another function and get the original data back.
 *    Ex - Whenever website stores username and password, they stored password in the hash value format
 *             Ex - Simplistic example would be ASCII code conversion of any text
 *    Note - Anytime two input produce the same hash value, We call it hash collision. However same input will always produce same hash value
 *          1. It seems like encryption but it isn't because in encryption we can decrypt the encrypt item. but there is `no way` to unhash a hash value.
 *          2. In programming, we often use hash values as a way to get or store a value at a certain location.
 * 
 * 
 *  ? Hash Table --
 *      -- A Hash table is an implementation of the A-Arrays abstract data structure.
 *      -- When Hash table created internally -- It's really an array-based data structure, where we get extra functionality to get us past the limitations of an array
 *      -- We use the term bucket to describe each entry or place for a key-value pair to go in a hash table, Remember we always add a pair
 *      -- Methods --> 
 *              1. Add() - to add key value pair
 *              2. 
 * 
 *   ? Benefit of Hash Table -
 *  1. Search is much faster than any other data structure -> O(1)
 *  2. Insertion and deletion is also quick -> O(1)
 *  
 *    ? Disadvantages -
 *      1. When Hash map value collisions -> It must be handled with separate chaining, which creates linked list with additional values
 */