# HashMap Visualizer
### A quick visualization of a bucketed chained hashmap
##### Built with React.js

A HashMap is a data structure that stores keys and values. In a
bucketed separate chaining system a key value pair is placed into a bucket as denoted by
object.hashCode() % n where the hashcode is denoted by the equation (2(k) + 5). If there are multiple elements in a bucket the elements are put into a linked list with each new addition being the next node. 