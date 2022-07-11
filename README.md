# Lexicon
Implement a Lexicon class that supports the following methods:

`add_word(string)`: used to initially populate the lexicon and add new words as needed

`is_word(string)`: returns True if input exists in the lexicon, otherwise False

`is_prefix(string)`: returns True if input is the prefix of any word in the lexicon, otherwise
False

### Background

A lexicon is a data structure that contains all strings that are valid words of some language or make up a set of terms related to a subject, (e.g. English language, the lexicon of legal terms).

Really, it is simply a container of words. If a string is contained in the lexicon, it is considered a valid word, and conversely if it is not contained, it is not valid.

One potential use case for a lexicon is as part of a word game solver, for example for a word search or BoggleTM computer player.

Consider specifically a word search solver. The lexicon in this case would be the set of words hidden in the word search. The solver could begin in the top left corner of the grid and check each position for valid words begining in that square. One important optimization would be the
ability to stop following paths that will never end in a valid word.

### Problem Questions and Assumptions
- is the lexicon set up as a square grid w/ equal length/width?
    
    assumption: no

- are we accounting for diagonal searches or vertical/horizontal?

    assumption: no diagonal searches

- what's the type of data structure we're searching? 

    assumption: array of arrays

### Questions
1. What is the run time of each operation in your implementation?

    add_word(string): O(n^2) since we are generating a word list and iterating through the vertical combinations (O(n), if we don't need to account for vertical search (remove ll 46-54))
    
    is_word: O(n)
    
    is_prefix: O(n^2)

2. What is the space usage of your Lexicon class?

    O(3)

3. Can you improve the time complexity?
   
   The time complexity can be improved if we use a trie structure. On initialization we'd create the a trie node with a hashmap. Insertion and prefix searching will be at O(n).

    Adding the word generation function (genWordList) creates an inefficient solution for combining a horizontal and vertical set of words. This doesn't account for diagonal movement.

    The prefix search iterates through the list of words and runs a substring search through each word. By using a there's a search time of O(n) through iterating through the hashmap.

4. Can you improve the space usage even further?
    
    Space complexity is constant, I don't believe this can be improved.

### Hints
* Think of the lexicon as a regular expression word1 | word2 | ... | wordn. How would you
efficiently implement the lexicon